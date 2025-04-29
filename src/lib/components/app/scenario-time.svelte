<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { getAppContext } from "./app.svelte";
  import type { ChartData } from "./donut-chart.svelte";
  import DonutChart from "./donut-chart.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { base } from "$app/paths";
  import { Minus, X, SquarePen, ChartPie, ChartBarStacked } from "lucide-svelte";
  import DivergingBarChart from "./diverging-bar-chart.svelte";

  let {
    class: className = "",
    timeData: data = [],
    highlightedProductId = $bindable(""),
    groupBy = $bindable("sentiment"),
  }: {
    class?: string;
    timeData?: ChartData;
    highlightedProductId?: string;
    groupBy?: "sentiment" | "profitability";
  } = $props(); // Updated groupBy type to include "profitability"

  const app = getAppContext();

  let displayDonutChart = $state(false);
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex items-center gap-2">
      <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
      Time
      <Button
        variant="ghost"
        size="icon"
        class="ml-auto justify-self-end"
        onclick={() => (displayDonutChart = !displayDonutChart)}
      >
        {#if displayDonutChart}
          <ChartBarStacked />
        {:else}
          <ChartPie />
        {/if}
      </Button>
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">
    {#if displayDonutChart}
      <DonutChart {data} bind:highlightedProductId bind:groupBy></DonutChart>
    {:else}
      <DivergingBarChart {data} bind:highlightedProductId bind:groupBy></DivergingBarChart>
    {/if}
  </Card.Content>

  <Card.Footer class="p-0 mt-10 flex justify-between">
    <div class="flex gap-2">
      {#if highlightedProductId}
        <Button
          variant="outline"
          class="flex gap-2 pl-3"
          onclick={() => (app.selectedProductId = highlightedProductId)}
        >
          {@const product = app.products.find((p) => p.id == highlightedProductId)}
          <img
            src={product?.url || `${base}/images/cube.png`}
            class="w-6 min-w-6 aspect-square"
            alt={product?.name}
          />
          {product?.name}
          <SquarePen />
        </Button>
        <Button
          onclick={() => (highlightedProductId = "")}
          class="p-2 hover:bg-transparent"
          variant="ghost"><X /></Button
        >
      {/if}
    </div>

    <Tabs.Root bind:value={groupBy} class="">
      <Tabs.List>
        <Tabs.Trigger value="sentiment">Sentiment</Tabs.Trigger>
        <Tabs.Trigger value="profitability">Profitability</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </Card.Footer>
</div>
