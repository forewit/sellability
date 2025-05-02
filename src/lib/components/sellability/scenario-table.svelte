<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "../../app/app.svelte";
  import { Minus, Plus, Square, SquareCheck, SquarePen, SquareMinus } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import Stars from "../ratings/stars.svelte";
  import type { ChartData } from "../charts/diverging-bar-chart.svelte";
  import type { Scenario } from "$lib/app/app.svelte";
  import Time from "../ui/time.svelte";

  let {
    class: className = "",
    children,
    highlightedProductId = $bindable(""),
    scenarioId = "",
  }: {
    class?: string;
    children?: Snippet;
    highlightedProductId?: string;
    scenarioId: string;
  } = $props();

  const app = getAppContext();

  let blankScenario: Scenario = {
    id: "",
    name: "",
    quantities: {},
    goals: { time: { targetHours: 0, maxHours: 0 }, profit: { target: 0, min: 0 }, timespanDays: 0 }
  }

  let scenario = $state(app.scenarios.find(s => s.id === scenarioId) || blankScenario);

  $effect(()=>{
    scenario = app.scenarios.find(s => s.id === scenarioId) || blankScenario
  })
  
  let evalProducts = $derived(
    app.products.filter((p) => Object.keys(scenario.quantities).includes(p.id))
  );

  function changeSelectedIds(selectedIds: string[]) {
    Object.keys(scenario.quantities).forEach((id) => {
      if (!selectedIds.includes(id)) {
        delete scenario.quantities[id];
      }
    });

    selectedIds.forEach((id) => {
      if (!scenario.quantities[id]) {
        scenario.quantities[id] = 0;
      }
    });
  }

  let totalTime = $derived(
    evalProducts.reduce(
      (total, product) =>
        total + scenario.quantities[product.id] * (app.productData[product.id].time || 0),
      0
    )
  );

  let totalExpenses = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total + scenario.quantities[product.id] * (app.productData[product.id].expenses || 0),
        0
      )
      .toFixed(2)
  );

  let totalRevenue = $derived(
    evalProducts
      .reduce((total, product) => total + scenario.quantities[product.id] * product.price || 0, 0)
      .toFixed(2)
  );

  let totalProfit = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total + scenario.quantities[product.id] * (app.productData[product.id].profit || 0),
        0
      )
      .toFixed(2)
  );
</script>

<svelte:window />

<div class={cn("min-w-[220px]", className)}>
  <!-- {#if evalProducts.length > 0} -->
  <!-- eval products -->
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Product</Table.Head>
        <Table.Head>Price</Table.Head>
        <Table.Head>Quantity</Table.Head>
        <Table.Head>Profitability</Table.Head>
        <Table.Head class="text-right min-w-[125px]">Time</Table.Head>
        <Table.Head class="text-right">Revenue</Table.Head>
        <Table.Head class="px-0"></Table.Head>
        <Table.Head class="text-right">Expenses</Table.Head>
        <Table.Head class="px-0"></Table.Head>
        <Table.Head class="text-right">Profit</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each evalProducts as product}
        <!-- inline style for highlight border because iOS safari SUCKS -->
        <Table.Row
          style={cn(
            highlightedProductId == product.id &&
              "outline: 2px solid hsl(var(--primary)); border-radius: var(--radius); outline-offset: -2px"
          )}
          onclick={(e) => {
            e.stopPropagation();
            highlightedProductId = product.id;
          }}
        >
          <Table.Cell class="">
            <Button
              variant="outline"
              class="flex gap-2 pl-3"
              onclick={() => (app.selectedProductId = product.id)}
            >
              <img
                src={product.url || `${base}/images/cube.png`}
                class="w-6 min-w-6 aspect-square"
                alt={product.name}
              />
              {product.name}
              <SquarePen />
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Input
              class="w-24"
              type="number"
              inputmode="numeric"
              bind:value={product.price}
              min="0"
            />
          </Table.Cell>
          <Table.Cell class="flex px-0">
            <Button
              size="sm"
              variant="ghost"
              onclick={() => {
                if (scenario.quantities[product.id] > 0) scenario.quantities[product.id]--;
                else scenario.quantities[product.id] = 0;
              }}
            >
              <Minus />
            </Button>
            <Input
              class="w-16"
              type="number"
              inputmode="numeric"
              bind:value={scenario.quantities[product.id]}
              min="0"
            />
            <Button size="sm" variant="ghost" onclick={() => scenario.quantities[product.id]++}>
              <Plus />
            </Button>
          </Table.Cell>
          <Table.Cell>
            <div class="justify-self-start" role="cell" tabindex="-1" onkeydown={() => {}}>
              <Stars size={3} value={app.productData[product.id].profitability} disabled />
            </div>
          </Table.Cell>
          <Table.Cell class="text-right">
            <Time
              class="text-nowrap"
              value={scenario.quantities[product.id] * (app.productData[product.id].time || 0)}
              disabled
            />
          </Table.Cell>
          <Table.Cell class="text-right">
            ${(scenario.quantities[product.id] * product.price).toFixed(2)}
          </Table.Cell>
          <Table.Cell class="text-right p-0">-</Table.Cell>
          <Table.Cell class="text-right">
            ${(
              scenario.quantities[product.id] * (app.productData[product.id].expenses || 0)
            ).toFixed(2)}
          </Table.Cell>
          <Table.Cell class="text-right p-0">=</Table.Cell>
          <Table.Cell class="text-right"
            >${(
              scenario.quantities[product.id] * (app.productData[product.id].profit || 0)
            ).toFixed(2)}</Table.Cell
          >
        </Table.Row>
      {/each}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colspan={3}>
          <Select.Root
            type="multiple"
            value={Object.keys(scenario.quantities)}
            onValueChange={changeSelectedIds}
          >
            <Select.Trigger class="w-48">Select products ({evalProducts.length})</Select.Trigger>
            <Select.Content>
              {#if app.products.length > 0}
                {#if evalProducts.length <= 0}
                  <Button
                    variant="link"
                    class="mb-1 pl-2 font-normal hover:no-underline"
                    onclick={() => changeSelectedIds(app.products.map((p) => p.id))}
                    ><Square />Select all</Button
                  >
                {:else if evalProducts.length < app.products.length}
                  <Button
                    variant="link"
                    class="mb-1 pl-2 font-normal hover:no-underline"
                    onclick={() => changeSelectedIds([])}><SquareMinus />Deselect all</Button
                  >
                {:else}
                  <Button
                    variant="link"
                    class="mb-1 pl-2 font-normal hover:no-underline"
                    onclick={() => changeSelectedIds([])}><SquareCheck />Deselect all</Button
                  >
                {/if}
              {/if}
              {#each app.products as product}
                <Select.Item value={product.id}>
                  <img
                    src={product.url || `${base}/images/cube.png`}
                    class="w-6 min-w-6 aspect-square mr-2"
                    alt={product.name}
                  />
                  {product.name}
                </Select.Item>
              {/each}
              <Button href="{base}/" class="" variant="link">Manage Products →</Button>
            </Select.Content>
          </Select.Root>
        </Table.Cell>
        <Table.Cell colspan={2}>
          <div class="flex justify-end">
            <div
              class={cn(
                "text-background px-3 py-2 rounded-lg bg-red-600",
                Number(totalTime) / 60 <= scenario.goals.time.maxHours && "bg-yellow-600",
                Number(totalTime) / 60 <= scenario.goals.time.targetHours && "bg-green-600"
              )}
            >
              <Time class="text-nowrap" value={totalTime} disabled />
            </div>
          </div>
        </Table.Cell>
        <Table.Cell class="text-right">
          ${totalRevenue}
        </Table.Cell>
        <Table.Cell class="text-right p-0">-</Table.Cell>
        <Table.Cell class="text-right">
          ${totalExpenses}
        </Table.Cell>
        <Table.Cell class="text-right p-0">=</Table.Cell>
        <Table.Cell class="relative">
          <div class="flex justify-end">
            <div
              class={cn(
                "text-background flex items-center px-3 py-2 rounded-lg bg-red-600",
                Number(totalProfit) >= scenario.goals.profit.min && "bg-yellow-600",
                Number(totalProfit) >= scenario.goals.profit.target && "bg-green-600"
              )}
            >
              ${totalProfit}
            </div>
          </div>
        </Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>

  <!-- {:else}
      <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if} -->
  {@render children?.()}
</div>
