<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Toggle } from "$lib/components/ui/toggle/index.js";
  import Goals from "$lib/components/sellability/goals.svelte";
  import Scenario from "$lib/components/sellability/scenario-table.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import type { ChartData } from "$lib/components/charts/diverging-bar-chart.svelte";
  import { ChartPie, ChartBarStacked, X, SquarePen, Info, Trash2, Sun, Moon } from "lucide-svelte";
  import DonutChart from "$lib/components/charts/donut-chart.svelte";
  import DivergingBarChart from "$lib/components/charts/diverging-bar-chart.svelte";
  import { getAppContext } from "$lib/app/app.svelte";
  import { cn } from "$lib/utils";
  import ScenarioList from "$lib/components/sellability/scenario-list.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { toggleMode } from "mode-watcher";

  const app = getAppContext();
  const firebase = getFirebaseContext();

  let dialogOpen = $state(false);
  let highlightedProductId = $state("");
  let displayDonutChart = $state(false);
  let showLegend = $state(false);
  let groupBy: "sentiment" | "profitability" = $state("sentiment");

  let timeData = $derived.by(() => {
    const scenario = app.selectedScenario;

    if (!scenario) return [];
    const evalProducts = app.products.filter((p) =>
      Object.keys(scenario.quantities).includes(p.id)
    );
    return evalProducts.flatMap((p) =>
      p.time.map((t) => ({
        productId: p.id,
        value: t.value * scenario.quantities[p.id],
        sentiment: t.rating,
        profitability: app.productData[p.id].profitability,
      }))
    );
  });

  let showChart = $derived(timeData.reduce((acc, curr) => acc + curr.value, 0) > 0);

  $effect(() => {
    if (app.selectedScenarioId == "") app.selectedScenarioId = app.scenarios[0]?.id || "";
  });
</script>

<svelte:window
  onclick={() => (highlightedProductId = "")}
  onkeydown={(e) => {
    if (e.key == "Escape") highlightedProductId = "";
  }}
/>

<!-- Scenario List -->
<Card.Root class="h-min m-3 transition-[height]">
  <Card.Content class="grid grid-cols-[1fr,auto] items-center">
    <ScenarioList />
    <Button onclick={toggleMode} variant="ghost" size="icon" class="relative">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  </Card.Content>
  {#if !app.selectedScenario}
    <Card.Footer>
      <div class="text-center py-4 grow">Create a new Scenario to get started</div>
    </Card.Footer>
  {/if}
</Card.Root>

{#if app.selectedScenario}
  <!-- Scenario Table -->
  <Card.Root class="h-min m-3">
    <Card.Header>
      <Card.Title class="flex gap-1 items-center">
        <img src="{base}/images/rocket.png" class="w-8" alt="Scenario icon" />
        <Input
          placeholder="Scenario Name"
          class="font-medium text-2xl md:text-2xl border-none"
          bind:value={app.selectedScenario.name}
        />
        <Dialog.Root bind:open={dialogOpen}>
          <Dialog.Trigger><Button size="icon" variant="ghost"><Trash2 /></Button></Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
              <Dialog.Description>
                This action cannot be undone. This will permanently delete your scenario. Your
                products will not be affected.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Button
                variant="destructive"
                onclick={() => {
                  app.deleteScenario(app.selectedScenarioId);
                  dialogOpen = false;
                }}>Yes, delete</Button
              >
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
      </Card.Title>
    </Card.Header>
    <Card.Content class="">
      <Scenario scenarioId={app.selectedScenarioId} bind:highlightedProductId />
    </Card.Content>
  </Card.Root>

  <div class="flex md:flex-row flex-col justify-between gap-3 px-3">
    <!-- Goals -->
    <Card.Root class="h-min">
      <Card.Header>
        <Card.Title class="flex gap-3 items-center">
          <img src="{base}/images/pie.png" class="w-8" alt="goals icon" />
          Goals
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <Goals bind:data={app.selectedScenario.goals} />
      </Card.Content>
      <Card.Footer></Card.Footer>
    </Card.Root>

    <!-- Scenario Chart -->
    <Card.Root class={cn("h-min grow")}>
      <Card.Header>
        <Card.Title class="flex items-center gap-3">
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
            {#if Object.keys(app.selectedScenario).length > 0}
              No info to show yet
            {:else}
              Select products to see time data
            {/if}
          </div>
        </Card.Content>
      {/if}
    </Card.Root>
  </div>
{/if}
