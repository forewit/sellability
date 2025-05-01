<script lang="ts">
  import { untrack } from "svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getAppContext, exampleScenario } from "./app.svelte";
  import { Minus, Plus, Square, SquareCheck, SquarePen, SquareMinus } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import Stars from "../custom/stars.svelte";
  import type { ChartData } from "./diverging-bar-chart.svelte";

  let {
    class: className = "",
    children,
    onScenarioChange = () => {},
    highlightedProductId = $bindable(""),
    scenario = $bindable({}),
  }: {
    class?: string;
    children?: Snippet;
    onScenarioChange?: (timeData: ChartData) => void;
    highlightedProductId?: string;
    scenario?: Record<string, { quantity: number }>;
  } = $props();

  const app = getAppContext();

  let evalProducts = $derived(app.products.filter((p) => Object.keys(scenario).includes(p.id)));

  $effect(() => {
    let timeData = evalProducts.flatMap((p) =>
      p.time.map((t) => ({
        productId: p.id,
        value: t.value * scenario[p.id].quantity,
        sentiment: t.rating,
        profitability: app.productData[p.id].profitability,
      }))
    );
    onScenarioChange(timeData);
  });

  let selectedIds: string[] = $state(Object.keys(scenario));
  $effect(() => {
    // sync selectIds and evalData (update evalData when selectedIds changes)
    untrack(() =>
      Object.keys(scenario).forEach((id) => {
        if (!selectedIds.includes(id)) {
          delete scenario[id];
        }
      })
    );

    selectedIds.forEach((id) => {
      if (untrack(() => !scenario[id])) {
        scenario[id] = { quantity: 0 };
      }
    });
  });

  let totalTime = $derived(
    evalProducts.reduce(
      (total, product) =>
        total + scenario[product.id].quantity * (app.productData[product.id].time || 0),
      0
    )
  );

  let totalExpenses = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total + scenario[product.id].quantity * (app.productData[product.id].expenses || 0),
        0
      )
      .toFixed(2)
  );

  let totalRevenue = $derived(
    evalProducts
      .reduce((total, product) => total + scenario[product.id].quantity * product.price || 0, 0)
      .toFixed(2)
  );

  let totalProfit = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total + scenario[product.id].quantity * (app.productData[product.id].profit || 0),
        0
      )
      .toFixed(2)
  );
</script>

<svelte:window></svelte:window>

<div class={cn("min-w-[220px]", className)}>
  <!-- {#if evalProducts.length > 0} -->
  <!-- eval products -->
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head class="">Product</Table.Head>
        <Table.Head class="">Price</Table.Head>
        <Table.Head class="">Quantity</Table.Head>
        <Table.Head>Profitability</Table.Head>
        <Table.Head class="text-right">Time</Table.Head>
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
          style={cn(highlightedProductId == product.id && "outline: 2px solid black; border-radius: var(--radius); outline-offset: -2px")}
          onpointerdown={(e) => {e.stopPropagation(); highlightedProductId = product.id}}
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
                if (scenario[product.id].quantity > 0) scenario[product.id].quantity--;
                else scenario[product.id].quantity = 0;
              }}
            >
              <Minus />
            </Button>
            <Input
              class="w-16"
              type="number"
              inputmode="numeric"
              bind:value={scenario[product.id].quantity}
              min="0"
            />
            <Button size="sm" variant="ghost" onclick={() => scenario[product.id].quantity++}>
              <Plus />
            </Button>
          </Table.Cell>
          <Table.Cell>
            <div class="justify-self-start" role="cell" tabindex="-1" onkeydown={() => {}}>
              <Stars size={3} value={app.productData[product.id].profitability} disabled />
            </div>
          </Table.Cell>
          <Table.Cell class="text-right">
            {scenario[product.id].quantity * (app.productData[product.id].time || 0)} hrs
          </Table.Cell>
          <Table.Cell class="text-right">
            ${(scenario[product.id].quantity * product.price).toFixed(2)}
          </Table.Cell>
          <Table.Cell class="text-right p-0">-</Table.Cell>
          <Table.Cell class="text-right">
            ${(scenario[product.id].quantity * (app.productData[product.id].expenses || 0)).toFixed(
              2
            )}
          </Table.Cell>
          <Table.Cell class="text-right p-0">=</Table.Cell>
          <Table.Cell class="text-right"
            >${(scenario[product.id].quantity * (app.productData[product.id].profit || 0)).toFixed(
              2
            )}</Table.Cell
          >
        </Table.Row>
      {/each}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colspan={4}>
          <Select.Root type="multiple" bind:value={selectedIds}>
            <Select.Trigger class="w-48">Select products ({evalProducts.length})</Select.Trigger>
            <Select.Content>
              {#if evalProducts.length <= 0}
                <Button
                  variant="link"
                  class="mb-1 pl-2 font-normal hover:no-underline"
                  onclick={() => (selectedIds = app.products.map((p) => p.id))}
                  ><Square />Select all</Button
                >
              {:else if evalProducts.length < app.products.length}
                <Button
                  variant="link"
                  class="mb-1 pl-2 font-normal hover:no-underline"
                  onclick={() => (selectedIds = [])}><SquareMinus />Deselect all</Button
                >
              {:else}
                <Button
                  variant="link"
                  class="mb-1 pl-2 font-normal hover:no-underline"
                  onclick={() => (selectedIds = [])}><SquareCheck />Deselect all</Button
                >
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
        <Table.Cell class="text-right text-nowrap">
          <div
            class={cn(
              "text-background flex items-center px-3 py-2 rounded-lg bg-red-600",
              Number(totalTime) <= app.timeGoals[1] && "bg-yellow-600",
              Number(totalTime) <= app.timeGoals[0] && "bg-green-600"
            )}
          >
            {totalTime} hrs
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
          <div
            class={cn(
              "text-background flex items-center px-3 py-2 rounded-lg bg-red-600",
              Number(totalProfit) >= app.profitGoals[1] && "bg-yellow-600",
              Number(totalProfit) >= app.profitGoals[0] && "bg-green-600"
            )}
          >
            ${totalProfit}
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
