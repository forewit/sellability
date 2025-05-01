<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Toggle } from "$lib/components/ui/toggle/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Scenario from "$lib/components/app/scenario-table.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import type { ChartData } from "$lib/components/app/diverging-bar-chart.svelte";
  import { ChartPie, ChartBarStacked, X, SquarePen, Info } from "lucide-svelte";
  import DonutChart from "$lib/components/app/donut-chart.svelte";
  import DivergingBarChart from "$lib/components/app/diverging-bar-chart.svelte";
  import { getAppContext } from "$lib/components/app/app.svelte";
  import { cn } from "$lib/utils";

  const app = getAppContext();

  let timeData: ChartData = $state([]);
  let highlightedProductId = $state("");
  let displayDonutChart = $state(false);
  let showLegend = $state(false);
  let groupBy: "sentiment" | "profitability" = $state("sentiment");


  let showChart = $derived(timeData.reduce((acc, curr) => acc + curr.value, 0) > 0);
  $effect(() => {
    if (Object.keys(app.scenario).length == 0) highlightedProductId = "";
  });
</script>

<svelte:window
 onpointerdown={() => highlightedProductId = ""}
 onkeydown={(e) => {
    if (e.key == "Escape") highlightedProductId = "";
  }}
/>

<!-- Scenario Table -->
<Card.Root class="h-min m-3">
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="Scenario icon" />
      Scenario
    </Card.Title>
  </Card.Header>
  <Card.Content class="">
    <Scenario
      bind:scenario={app.scenario}
      onScenarioChange={(data) => (timeData = data)}
      bind:highlightedProductId
    />
  </Card.Content>
</Card.Root>

<div class="flex md:flex-row flex-col justify-between gap-3 px-3">
  <!-- Goals -->
  <Card.Root class="h-min">
    <Card.Content>
      <Goals />
    </Card.Content>
  </Card.Root>

  <!-- Scenario Chart -->
  <Card.Root class={cn("h-min grow")}>
    <Card.Header>
      <Card.Title class="flex items-center gap-2">
        <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
        Time
        <div class="ml-auto">
          <Toggle bind:pressed={showLegend}><Info /></Toggle>
          <Button
            variant="ghost"
            size="icon"
            onclick={() => (displayDonutChart = !displayDonutChart)}
          >
            {#if displayDonutChart}
              <ChartBarStacked />
            {:else}
              <ChartPie />
            {/if}
          </Button>
        </div>
      </Card.Title>
    </Card.Header>
    {#if showChart}
      <Card.Content class={cn(displayDonutChart && "py-2 overflow-hidden")}>
        {#if displayDonutChart}
          <DonutChart data={timeData} bind:highlightedProductId bind:groupBy bind:showLegend />
        {:else}
          <DivergingBarChart
            data={timeData}
            bind:highlightedProductId
            bind:groupBy
            bind:showLegend
          />
        {/if}
      </Card.Content>
      <Card.Footer class="flex  gap-4 flex-wrap justify-end">
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
        <div class="grow"></div>
        <Tabs.Root bind:value={groupBy}>
          <Tabs.List>
            <Tabs.Trigger value="sentiment">Sentiment</Tabs.Trigger>
            <Tabs.Trigger value="profitability">Profitability</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Card.Footer>
    {:else}
      <Card.Content class="">
        <div class="text-center pb-6">
          {#if Object.keys(app.scenario).length > 0}
            Your selected products don't have any time data
          {:else}
            Select products to see time data
          {/if}
        </div>
      </Card.Content>
    {/if}
  </Card.Root>
</div>
