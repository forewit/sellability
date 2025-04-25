<script lang="ts">
  import { cn } from "$lib/utils";
  import { flip } from "svelte/animate";
  import Button from "../ui/button/button.svelte";

  // ==========================================
  // TYPES
  // ==========================================
  type GroupId = 0 | 1 | 2 | 3;
  type DataItem = { value: number; sentiment: GroupId; rating: GroupId };
  type GroupByKey = "sentiment" | "rating";

  // ==========================================
  // PROPS
  // ==========================================
  type Props = { data?: DataItem[]; groupBy?: GroupByKey; showToggleButton?: boolean };
  let { data = [], groupBy = $bindable("sentiment"), showToggleButton = true }: Props = $props();

  // ==========================================
  // CONSTANTS
  // ==========================================
  const DISPLAY_ORDER: GroupId[] = [0, 1, 2, 3];

  const SENTIMENT_LABELS: Record<GroupId, string> = {
    0: "No sentiment",
    1: "Negative",
    2: "Positive",
    3: "Very Positive",
  };
  const RATING_LABELS: Record<GroupId, string> = {
    0: "Very Low",
    1: "Low",
    2: "High",
    3: "Very High",
  };
  const SENTIMENT_COLORS: Record<GroupId, string> = {
    0: "#fff",
    1: "#e74c3c",
    2: "#f39c12",
    3: "#2ecc71",
  };
  const RATING_COLORS: Record<GroupId, string> = {
    0: "#d6d3d1",
    1: "#a8a29e",
    2: "#78716c",
    3: "#57534e",
  };

  // ==========================================
  // DERIVED STATE
  // ==========================================
  const totalValue = $derived(data.reduce((sum, d) => sum + d.value, 0));

  const segments = $derived.by(() => {
    if (totalValue === 0) return [];

    const unsorted = data.map((d) => ({
      key: `${d.sentiment}-${d.rating}`,
      sentimentId: d.sentiment,
      ratingId: d.rating,
      value: d.value,
      width: (d.value / totalValue) * 100,
    }));

    return unsorted.sort((a, b) => {
      const pA = groupBy === "sentiment" ? a.sentimentId : a.ratingId;
      const sA = groupBy === "sentiment" ? a.ratingId : a.sentimentId;
      const pB = groupBy === "sentiment" ? b.sentimentId : b.ratingId;
      const sB = groupBy === "sentiment" ? b.ratingId : b.sentimentId;
      return pA - pB || sA - sB;
    });
  });

  const groupData: { startingIndex: number; totalGroupWidth: number }[] = $derived.by(() => {
    if (groupBy === "sentiment") {
      const sentimentGroups = segments.reduce(
        (acc, seg, index) => {
          if (!acc[seg.sentimentId]) {
            acc[seg.sentimentId] = { startingIndex: index, totalGroupWidth: 0 };
          }
          acc[seg.sentimentId].totalGroupWidth += seg.width;
          return acc;
        },
        {} as Record<GroupId, { startingIndex: number; totalGroupWidth: number }>
      );

      return Object.values(sentimentGroups);
    } else {
      const ratingGroups = segments.reduce(
        (acc, seg, index) => {
          if (!acc[seg.ratingId]) {
            acc[seg.ratingId] = { startingIndex: index, totalGroupWidth: 0 };
          }
          acc[seg.ratingId].totalGroupWidth += seg.width;
          return acc;
        },
        {} as Record<GroupId, { startingIndex: number; totalGroupWidth: number }>
      );

      return Object.values(ratingGroups);
    }
  });

  function toggleGroupBy() {
    groupBy = groupBy === "sentiment" ? "rating" : "sentiment";
  }
</script>

<div>
  <div role="figure" aria-label="Nested bar chart grouped by {groupBy}">
    <div class="flex h-10">
      {#each segments as seg, i (seg.key)}
        <!-- lastOfGroup should check using the groupData.segmentCount -->
        {@const inbetweenGroup =
          i === groupData[groupBy == "sentiment" ? seg.sentimentId : seg.ratingId].startingIndex &&
          i > 0}

        <div
          class={cn(
            "flex items-center justify-center overflow-hidden whitespace-nowrap border-l-2 border-background",
            inbetweenGroup && "ml-2 border-l-0"
          )}
          animate:flip={{ duration: 200 }}
          style="
              width: {seg.width}%;
              background-color: {RATING_COLORS[seg.ratingId]};
              box-shadow: 0 6px 0px {SENTIMENT_COLORS[seg.sentimentId]};
              {inbetweenGroup && 'margin-left: 0.5rem;'}
            "
          title="{SENTIMENT_LABELS[seg.sentimentId]} | {RATING_LABELS[seg.ratingId]}: {seg.value}"
        >
          {#if seg.width >= 5}
            <span class="text-xs text-white">
              {seg.width.toFixed(0)}%
            </span>
          {/if}
        </div>
      {/each}
    </div>
    <div class="flex gap-2">
      {#each groupData as group}
        <div style="width: {group.totalGroupWidth}%;" class="relative h-2 border-2 border-t-0 mt-3">
          <div class="text-xs text-stone-400 font-medium bg-background px-1 ml-1 absolute">
            {group.totalGroupWidth.toFixed(0)}%
          </div>
        </div>
      {/each}
    </div>
  </div>
  {#if showToggleButton}
    <div class="mt-6">
      <Button variant="outline" size="sm" onclick={toggleGroupBy}>
        Grouped by {groupBy}
      </Button>
    </div>
  {/if}
</div>
