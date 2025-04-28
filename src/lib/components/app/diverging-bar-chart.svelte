<script lang="ts">
  import { cn } from "$lib/utils";
  import { flip } from "svelte/animate";
  import Button from "../ui/button/button.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";


  // ==========================================
  // TYPES
  // ==========================================
  type GroupId = number; // 0-3
  export type ChartData = { value: number; sentiment: number; profitability: number }[];
  type GroupByKey = "sentiment" | "profitability";

  // ==========================================
  // PROPS
  // ==========================================
  type Props = { data?: ChartData; groupBy?: GroupByKey };
  let { data = [], groupBy = $bindable("sentiment") }: Props = $props();

  // ==========================================
  // CONSTANTS
  // ==========================================

  const SENTIMENT_LABELS: Record<GroupId, string> = {
    0: "Bad",
    1: "Negative",
    2: "Positive",
    3: "Very Positive",
  };
  const PROFITABILITY_LABELS: Record<GroupId, string> = {
    0: "Bad",
    1: "Low",
    2: "High",
    3: "Very High",
  };
  // ==========================================
  // DERIVED STATE
  // ==========================================
  let totalValue = $derived(data.reduce((sum, d) => sum + d.value, 0));

  let segments = $derived.by(() => {
    if (totalValue === 0) return [];

    const unsorted = data.map((d, idx) => ({
      id: idx,
      sentimentId: d.sentiment,
      profitabilityId: d.profitability,
      value: d.value,
      width: (d.value / totalValue) * 100,
    }));

    return unsorted.sort((a, b) => {
      const pA = groupBy === "sentiment" ? a.sentimentId : a.profitabilityId;
      const sA = groupBy === "sentiment" ? a.profitabilityId : a.sentimentId;
      const pB = groupBy === "sentiment" ? b.sentimentId : b.profitabilityId;
      const sB = groupBy === "sentiment" ? b.profitabilityId : b.sentimentId;
      return pA - pB || sA - sB;
    });
  });

  let { groupData, groupIndexMap } = $derived.by(() => {
    const groupData: { startingIndex: number; totalGroupWidth: number; id: GroupId }[] = [];
    const groupIndexMap: Record<GroupId, { startingIndex: number; totalGroupWidth: number }> =
      {} as any;

    segments.forEach((seg, index) => {
      const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId;

      if (!groupIndexMap[id]) {
        const newGroup = { startingIndex: index, totalGroupWidth: seg.width, id };
        groupData.push(newGroup);
        groupIndexMap[id] = newGroup;
      } else {
        groupIndexMap[id].totalGroupWidth += seg.width;
      }
    });

    return { groupData, groupIndexMap };
  });
</script>

<div>
  <div role="figure" aria-label="Nested bar chart grouped by {groupBy}">
    <div class="flex">
      {#each segments as seg, i (seg.id)}
        <!-- lastOfGroup should check using the groupData.segmentCount -->
        {@const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId}
        {@const group = groupIndexMap[id]}
        {@const inbetweenGroup = i === group.startingIndex && i > 0}
        <div
          class={cn("overflow-hidden whitespace-nowrap")}
          animate:flip={{ duration: 600 }}
          style="
              width: {seg.width}%;
              {inbetweenGroup && 'margin-left: 0.5rem;'}
            "
          title="{SENTIMENT_LABELS[seg.sentimentId]} | {PROFITABILITY_LABELS[
            seg.profitabilityId
          ]}: {seg.value}"
        >
          <div
            class={cn(
              "ease-in-out transition-all flex items-center justify-center text-xs text-background h-8 border border-background",
              groupBy == "sentiment" && "h-2 text-transparent",
              seg.profitabilityId == 0 && "bg-orange-700",
              seg.profitabilityId == 1 && "bg-yellow-500",
              seg.profitabilityId == 2 && "bg-lime-600",
              seg.profitabilityId == 3 && "bg-green-600"
            )}
          >
            <!-- {#if seg.width >= 5}
              {seg.width.toFixed(0)}%
            {/if} -->
          </div>
          <div
            class={cn(
              "ease-in-out transition-all h-2 text-transparent mt-0.5 border border-background flex items-center justify-center text-xs",
              groupBy == "sentiment" && "h-8 text-background",
              seg.sentimentId == 0 && "bg-purple-200",
              seg.sentimentId == 1 && "bg-purple-300",
              seg.sentimentId == 2 && "bg-indigo-300",
              seg.sentimentId == 3 && "bg-blue-300"
            )}
          >
            <!-- {#if seg.width >= 5}
              {seg.width.toFixed(0)}%
            {/if} -->
          </div>
        </div>
      {/each}
    </div>
    <div class="flex gap-2">
      {#each groupData as group}
        <div style="width: {group.totalGroupWidth}%;" class="relative h-2 border-2 border-t-0 mt-3">
          <div class="text-xs text-stone-400 font-medium bg-background px-1 ml-1 absolute">
            {group.totalGroupWidth.toFixed(0)}%
            <!-- include group name -->
            {groupBy === "sentiment" ? SENTIMENT_LABELS[group.id] : PROFITABILITY_LABELS[group.id]}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="mt-10 flex justify-end">
    
    <Tabs.Root bind:value={groupBy} class="">
      <Tabs.List>
        <Tabs.Trigger value="sentiment">Sentiment</Tabs.Trigger>
        <Tabs.Trigger value="profitability">Profitability</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </div>
</div>
