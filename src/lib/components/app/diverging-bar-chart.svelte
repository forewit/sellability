<script lang="ts">
  import { cn } from "$lib/utils";
  import { flip } from "svelte/animate";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { getAppContext } from "./app.svelte";
  import { base } from "$app/paths";
  import { Minus, X, SquarePen } from "lucide-svelte";

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
    data?: ChartData;
    groupBy?: GroupByKey;
    highlightedProductId?: string;
    showLegend?: boolean;
  };
  let {
    data = [],
    groupBy = $bindable("sentiment"),
    highlightedProductId = $bindable(""),
    showLegend = $bindable(false),
  }: Props = $props();

  // ==========================================
  // CONSTANTS
  // ==========================================

  const app = getAppContext();
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

    const unsorted = data.map((d, i) => ({
      key: d.productId + i,
      productId: d.productId,
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
      {#each segments as seg, i (seg.key)}
        <!-- lastOfGroup should check using the groupData.segmentCount -->
        {@const id = groupBy === "sentiment" ? seg.sentimentId : seg.profitabilityId}
        {@const group = groupIndexMap[id]}
        {@const inbetweenGroup = i === group.startingIndex && i > 0}
        <div
          onpointerdown={() =>
            highlightedProductId == seg.productId
              ? (highlightedProductId = "")
              : (highlightedProductId = seg.productId)}
          class={cn(
            "relative cursor-pointer transition-[margin]",
            highlightedProductId === seg.productId &&
              "z-10 -mt-3 mb-3 after:absolute after:inset-0 after:content-[''] after:ring-[1px] after:ring-inset after:rounded after:ring-offset-0 after:ring-primary after:z-10  before:absolute before:inset-0 before:content-[''] before:ring-[1px] before:rounded before:ring-offset-0 before:ring-primary before:z-10"
          )}
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
              "font-medium ease-in-out transition-all flex items-center justify-center text-xs text-background h-8 border border-background",
              groupBy == "sentiment" && "h-2 text-transparent",
              seg.profitabilityId == 0 && "bg-orange-700",
              seg.profitabilityId == 1 && "bg-yellow-500",
              seg.profitabilityId == 2 && "bg-lime-600",
              seg.profitabilityId == 3 && "bg-green-600",
              highlightedProductId === seg.productId && ""
            )}
          >
            {#if seg.width >= 5 && highlightedProductId == seg.productId}
              {seg.width.toFixed(0)}%
            {/if}
          </div>
          <div
            class={cn(
              "font-medium ease-in-out transition-all h-2 text-transparent mt-0.5 border border-background flex items-center justify-center text-xs",
              groupBy == "sentiment" && "h-8 text-background",
              seg.sentimentId == 0 && "bg-purple-200",
              seg.sentimentId == 1 && "bg-purple-300",
              seg.sentimentId == 2 && "bg-indigo-300",
              seg.sentimentId == 3 && "bg-blue-300",
              highlightedProductId === seg.productId && ""
            )}
          >
            {#if seg.width >= 5 && highlightedProductId == seg.productId}
              {seg.width.toFixed(0)}%
            {/if}
          </div>
        </div>
      {/each}
    </div>
    <div class="flex gap-2">
      {#each groupData as group}
        <div style="width: {group.totalGroupWidth}%;">
          <div class="mt-2 h-2 border-2 border-t-0"></div>
            <div class="bg-background w-min text-xs text-stone-400 font-medium px-1 ml-2 -mt-2">
              {group.totalGroupWidth.toFixed(0)}%
            </div>
            <!-- <div>
              {groupBy === "sentiment"
                ? SENTIMENT_LABELS[group.id]
                : PROFITABILITY_LABELS[group.id]}
            </div> -->
        </div>
      {/each}
    </div>
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
</div>
