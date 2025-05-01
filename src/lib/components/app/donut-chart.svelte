<script lang="ts">
  import { cn } from "$lib/utils";
  import { getAppContext } from "./app.svelte";

  // ==========================================
  // TYPES
  // ==========================================
  type GroupId = number; // 0-3
  export type ChartData = {
    value: number;
    productId: string;
    sentiment: number;
    profitability: number;
  }[];
  type GroupByKey = "sentiment" | "profitability";

  // ==========================================
  // PROPS
  // ==========================================
  type Props = {
    class?: string;
    data?: ChartData;
    groupBy?: GroupByKey;
    highlightedProductId?: string;
    showLegend?: boolean;
  };
  let {
    class: className = "",
    data = [],
    groupBy = $bindable("sentiment"),
    highlightedProductId = $bindable(""),
    showLegend = $bindable(false),
  }: Props = $props();

  // ==========================================
  // CONSTANTS
  // ==========================================
  const SENTIMENT_LABELS: Record<GroupId, string> = {
    0: "Very Negative",
    1: "Negative",
    2: "Positive",
    3: "Very Positive",
  };
  const PROFITABILITY_LABELS: Record<GroupId, string> = {
    0: "Very Low",
    1: "Low",
    2: "High",
    3: "Very High",
  };
  
  const SVG_SIZE = 400;
  const INNER_RADIUS = 100;
  const OUTER_RADIUS = 165;
  const CENTER = SVG_SIZE / 2;
  const GROUP_GAP = 10; // Gap between groups in degrees
  const SEGMENT_GAP = 0.5; // Gap between segments in degrees
  
  // ==========================================
  // DERIVED STATE
  // ==========================================
  let totalValue = $derived(data.reduce((sum, d) => sum + d.value, 0));

  let segments = $derived.by(() => {
    if (totalValue === 0) return [];

    const unsorted = data.map((d, i) => ({
      key: d.productId + i,
      productId: d.productId,
      sentimentId: d.sentiment,
      profitabilityId: d.profitability,
      value: d.value,
      percentage: (d.value / totalValue) * 100,
    }));

    return unsorted.sort((a, b) => {
      const pA = groupBy === "sentiment" ? a.sentimentId : a.profitabilityId;
      const sA = groupBy === "sentiment" ? a.profitabilityId : a.sentimentId;
      const pB = groupBy === "sentiment" ? b.sentimentId : b.profitabilityId;
      const sB = groupBy === "sentiment" ? b.profitabilityId : b.sentimentId;
      return pA - pB || sA - sB || (a.percentage - b.percentage);
    });
  });



  // SVG path calculation functions
  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, highlighted: boolean = false) {
    // Add padding for highlighted segments and ensure minimum gap
    const padding = highlighted ? 1 : SEGMENT_GAP;
    startAngle += padding;
    endAngle -= padding;
    
    // Ensure the arc is valid (end > start)
    if (endAngle <= startAngle) {
      endAngle = startAngle + 0.1;
    }
    
    const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
    const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
    const outerStart = polarToCartesian(x, y, outerRadius, startAngle);
    const outerEnd = polarToCartesian(x, y, outerRadius, endAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    const d = [
      "M", innerStart.x, innerStart.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 0, innerEnd.x, innerEnd.y,
      "L", outerStart.x, outerStart.y,
      "A", outerRadius, outerRadius, 0, largeArcFlag, 1, outerEnd.x, outerEnd.y,
      "Z"
    ].join(" ");
    
    return d;
  }

  // Process segments to add angle information
  let segmentsWithAngles = $derived.by(() => {
    // First identify all unique groups
    const uniqueGroups = new Set(segments.map(seg => 
      groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId
    ));
    
    // Calculate total group gaps needed (including between last and first)
    const totalGroupGaps = uniqueGroups.size > 1 ? uniqueGroups.size * GROUP_GAP : 0;
    
    // First pass: calculate total angle needed for segments
    const totalSegmentsAngle = segments.reduce((total, seg) => {
      const segmentAngle = (seg.percentage / 100) * 360;
      return total + segmentAngle;
    }, 0);
    
    // Calculate total angle with all gaps
    const totalAngleWithGaps = totalSegmentsAngle + totalGroupGaps;
    
    // Calculate adjustment factor to ensure we don't exceed 360 degrees
    const adjustmentFactor = totalAngleWithGaps > 360 ? 360 / totalAngleWithGaps : 1;
    
    let currentAngle = 0;
    let lastGroupId: GroupId | null = null;
    let firstGroupId: GroupId | null = null;
    
    // Second pass: apply the adjusted angles
    return segments.map((seg, index, array) => {
      const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId;
      
      // Set firstGroupId on first iteration
      if (index === 0) {
        firstGroupId = id;
      }
      
      // Add gap between groups
      if (index > 0) {
        const prevId = groupBy === "sentiment" 
          ? array[index-1].sentimentId 
          : array[index-1].profitabilityId;
        if (prevId !== id) {
          currentAngle += GROUP_GAP * adjustmentFactor;
        }
      }
      
      // Adjust segment angle proportionally
      const segmentAngle = (seg.percentage / 100) * 360 * adjustmentFactor;
      const startAngle = currentAngle;
      const endAngle = startAngle + segmentAngle;
      currentAngle = endAngle;
      
      // Update lastGroupId for the next iteration
      lastGroupId = id;
      
      return {
        ...seg,
        startAngle,
        endAngle
      };
    });
  });

  let { groupData, groupIndexMap }= $derived.by(() => {
    const groupData: { 
      startingIndex: number; 
      totalGroupPercentage: number; 
      id: GroupId;
      startAngle: number;
      endAngle: number;
    }[] = [];
    
    const groupIndexMap: Record<GroupId, { 
      startingIndex: number; 
      totalGroupPercentage: number;
      startAngle: number;
      endAngle: number;
    }> = {} as any;

    // Use the angles already calculated in segmentsWithAngles
    segmentsWithAngles.forEach((seg, index) => {
      const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId;

      if (!groupIndexMap[id]) {
        const newGroup = { 
          startingIndex: index, 
          totalGroupPercentage: seg.percentage, 
          id,
          startAngle: seg.startAngle,
          endAngle: seg.endAngle
        };
        
        groupData.push(newGroup);
        groupIndexMap[id] = newGroup;
      } else {
        groupIndexMap[id].totalGroupPercentage += seg.percentage;
        groupIndexMap[id].endAngle = seg.endAngle;
      }
    });

    return { groupData, groupIndexMap };
  });
  // Calculate label positions
  function getLabelPosition(startAngle: number, endAngle: number, radius: number) {
    const angle = (startAngle + endAngle) / 2;
    const pos = polarToCartesian(CENTER, CENTER, radius, angle);
    return pos;
  }
</script>

  <div class={cn("flex flex-col items-center", className)} role="figure" aria-label="Pie chart grouped by {groupBy}">
    <svg class="overflow-visible" width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 {SVG_SIZE} {SVG_SIZE}">
      <!-- Outline circle for reference (optional) -->
      <circle 
        cx={CENTER} 
        cy={CENTER} 
        r={OUTER_RADIUS} 
        fill="none" 
        stroke="#f1f1f1" 
        stroke-width="1" 
        stroke-dasharray="2,2"
      />
    
      <!-- Segments -->
      {#each segmentsWithAngles as seg (seg.key)}
      {@const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId}
      {@const isHighlighted = highlightedProductId === seg.productId}
        
        <!-- Profitability segment -->
        <path
          d={describeArc(
            CENTER, 
            CENTER, 
            groupBy === "profitability" 
              ? (INNER_RADIUS - 20) - (isHighlighted ? 5 : 0)  // Thicker when grouped by profitability
              : (INNER_RADIUS + 10) - (isHighlighted ? 5 : 0),  // Thinner when grouped by sentiment
            groupBy === "profitability" 
              ? (INNER_RADIUS + 40) + (isHighlighted ? 5 : 0)  // Thicker when grouped by profitability
              : (INNER_RADIUS + 20) - (isHighlighted ? 5 : 0),  // Thinner when grouped by sentiment
            seg.startAngle, 
            seg.endAngle,
            isHighlighted
          )}
          class={cn(
            "cursor-pointer transition-all",
            seg.profitabilityId == 0 && "fill-orange-700",
            seg.profitabilityId == 1 && "fill-yellow-500",
            seg.profitabilityId == 2 && "fill-lime-600",
            seg.profitabilityId == 3 && "fill-green-600",
            isHighlighted && "stroke-primary stroke-2 opacity-90"
          )}
          onpointerdown={(e) => {
            e.stopPropagation();
            highlightedProductId === seg.productId
              ? (highlightedProductId = "")
              : (highlightedProductId = seg.productId)}
          }
        >
          <title>{PROFITABILITY_LABELS[seg.profitabilityId]} | {SENTIMENT_LABELS[seg.sentimentId]}: {seg.value}</title>
        </path>
        
        <!-- Sentiment segment -->
        <path
          d={describeArc(
            CENTER, 
            CENTER, 
            groupBy === "sentiment"
              ? (OUTER_RADIUS - 40) - (isHighlighted ? 5 : 0)  // Thicker when grouped by sentiment
              : (OUTER_RADIUS - 20) + (isHighlighted ? 5 : 0),  // Thinner when grouped by profitability
            groupBy === "sentiment"
              ? OUTER_RADIUS + (isHighlighted ? 5 : 0)         // Thicker when grouped by sentiment
              : (OUTER_RADIUS - 10) + (isHighlighted ? 5 : 0),  // Thinner when grouped by profitability
            seg.startAngle, 
            seg.endAngle,
            isHighlighted
          )}
          class={cn(
            "cursor-pointer transition-all",
            seg.sentimentId == 0 && "fill-purple-200",
            seg.sentimentId == 1 && "fill-purple-300",
            seg.sentimentId == 2 && "fill-indigo-300",
            seg.sentimentId == 3 && "fill-blue-300",
            isHighlighted && "stroke-primary stroke-2 opacity-90"
          )}
          onpointerdown={() => 
            highlightedProductId === seg.productId
              ? (highlightedProductId = "")
              : (highlightedProductId = seg.productId)
          }
        >
          <title>{SENTIMENT_LABELS[seg.sentimentId]} | {PROFITABILITY_LABELS[seg.profitabilityId]}: {seg.value}</title>
        </path>
        
        <!-- Percentage label for highlighted segment -->
        {#if isHighlighted && seg.percentage >= 5}
          {@const primaryGrouping = groupBy === "sentiment" ? "sentiment" : "profitability"}
          {@const labelRadius = primaryGrouping === "sentiment" 
            ? OUTER_RADIUS - 20 
            : INNER_RADIUS + 15}
          {@const labelPos = getLabelPosition(seg.startAngle, seg.endAngle, labelRadius)}
          <text
            x={labelPos.x}
            y={labelPos.y}
            text-anchor="middle"
            dominant-baseline="middle"
            class="text-xs font-bold fill-background"
          >
            {seg.percentage.toFixed(0)}%
          </text>
        {/if}
      {/each}
      
      <!-- Group labels -->
      {#each groupData as group}
        {@const midAngle = (group.startAngle + group.endAngle) / 2}
        {@const labelRadius = OUTER_RADIUS + 25}
        {@const outerLabelPos = getLabelPosition(group.startAngle, group.endAngle, labelRadius)}
        
        <!-- Choose appropriate radius for the connector line based on grouping -->
        {@const arcRadius = groupBy === "sentiment" 
          ? OUTER_RADIUS - 20 // Connect to the sentiment arc when grouped by sentiment
          : INNER_RADIUS + 30 // Connect to the profitability arc when grouped by profitability
        }
        
        <text
          x={outerLabelPos.x}
          y={outerLabelPos.y}
          text-anchor={outerLabelPos.x > CENTER ? "start" : "end"}
          dominant-baseline="middle"
          class="text-xs font-medium fill-stone-400"
        >
          {group.totalGroupPercentage.toFixed(0)}%
          <tspan x={outerLabelPos.x} dy="1.3em">
            {groupBy === "sentiment" ? SENTIMENT_LABELS[group.id] : PROFITABILITY_LABELS[group.id]}
          </tspan>
        </text>
        
        <!-- Connection line from group to label -->
        <!-- <line
          x1={polarToCartesian(CENTER, CENTER, arcRadius, midAngle).x}
          y1={polarToCartesian(CENTER, CENTER, arcRadius, midAngle).y}
          x2={outerLabelPos.x}
          y2={outerLabelPos.y}
          stroke="#9ca3af"
          stroke-width="1"
          stroke-dasharray="2,2"
        /> -->
      {/each}
    </svg>
    
    <!-- Legend -->
    {#if showLegend}
      <div class="flex flex-wrap gap-4 mt-4 justify-center">
        {#if groupBy == "profitability"}
          <div class="flex flex-wrap gap-2">
            {#each Object.entries(PROFITABILITY_LABELS) as [id, label]}
              <div class="flex items-center gap-1">
                <div class={cn(
                  "w-4 h-4",
                  Number(id) == 0 && "bg-orange-700",
                  Number(id) == 1 && "bg-yellow-500",
                  Number(id) == 2 && "bg-lime-600",
                  Number(id) == 3 && "bg-green-600"
                )}></div>
                <span class="text-xs">{label}</span>
              </div>
            {/each}
          </div>
        {:else}
          <div class="flex flex-wrap gap-2">
            {#each Object.entries(SENTIMENT_LABELS) as [id, label]}
              <div class="flex items-center gap-1">
                <div class={cn(
                  "w-4 h-4",
                  Number(id) == 0 && "bg-purple-200",
                  Number(id) == 1 && "bg-purple-300",
                  Number(id) == 2 && "bg-indigo-300",
                  Number(id) == 3 && "bg-blue-300"
                )}></div>
                <span class="text-xs">{label}</span>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
