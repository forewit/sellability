<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { getAppContext } from "./app.svelte";
  import type { ChartData } from "./diverging-bar-chart.svelte";
  import DivergingBarChart from "./diverging-bar-chart.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { base } from "$app/paths";
  import { Minus, X, SquarePen } from "lucide-svelte";

  let {
    class: className = "",
    timeData: data = [],
    highlightedProductId = $bindable(""),
    groupBy = $bindable("sentiment")
  }: { class?: string; timeData?: ChartData; highlightedProductId?: string; groupBy?: "sentiment" | "profitability" } = $props(); // Updated groupBy type to include "profitability"

  const app = getAppContext();
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex items-center gap-2">
      <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
      Time
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">
    <DivergingBarChart {data} bind:highlightedProductId bind:groupBy></DivergingBarChart>
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
      <Button onclick={()=>highlightedProductId=""} class="px-2 hover:bg-transparent" variant="ghost"><X/></Button>
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
