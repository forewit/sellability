<script lang="ts">
  import { untrack } from "svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import {
    TriangleAlert,
    CheckCheck,
    MessageCircleWarning,
    Trash2,
    MinusCircle,
    Minus,
    Plus,
    SquarePen,
  } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import type { Snippet } from "svelte";
  import Stars from "../stars/stars.svelte";

  let {
    evalData = $bindable({ test: { quantity: 1, rank: 0 } }),
    timeSpanDays = $bindable(30),
    class: className = "",
    children,
  }: {
    evalData?: Record<string, { quantity: number; rank: number }>;
    timeSpanDays?: number;
    class?: string;
    children?: Snippet;
  } = $props();

  const app = getAppContext();

  let evalProducts = $derived(app.products.filter((p) => Object.keys(evalData).includes(p.id)));

  let selectedIds: string[] = $state(Object.keys(evalData));
  $effect(() => {
    console.log("hi");

    // sync selectIds and evalData (update evalData when selectedIds changes)
    untrack(() =>
      Object.keys(evalData).forEach((id) => {
        if (!selectedIds.includes(id)) {
          delete evalData[id];
        }
      })
    );

    selectedIds.forEach((id) => {
      if (untrack(() => !evalData[id])) {
        evalData[id] = { quantity: 0, rank: 0 };
      }
    });
  });

  let timeSpanString = $state(timeSpanDays.toString());
  $effect(() => {
    timeSpanDays = parseInt(timeSpanString) || 30; // Update timeSpanDays based on timeSpanString
  });

  let totalTime = $derived(
    evalProducts.reduce(
      (total, product) =>
        total +
        evalData[product.id].quantity *
          (app.productData.find((p) => p.id === product.id)?.time || 0),
      0
    )
  );

  let totalExpenses = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total +
          evalData[product.id].quantity *
            (app.productData.find((p) => p.id === product.id)?.expenses || 0),
        0
      )
      .toFixed(2)
  );

  let totalProfit = $derived(
    evalProducts
      .reduce(
        (total, product) =>
          total +
          evalData[product.id].quantity *
            (app.productData.find((p) => p.id === product.id)?.profit || 0),
        0
      )
      .toFixed(2)
  );
</script>

<div class={cn("min-w-[220px]", className)}>
  <Card.Header class="p-0 grid grid-cols-[1fr,auto,auto] gap-2">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
      Scenario
    </Card.Title>
    <Select.Root type="single" bind:value={timeSpanString}>
      <Select.Trigger class="w-28">{timeSpanString + " days"}</Select.Trigger>
      <Select.Content>
        <Select.Item value="7">7 days</Select.Item>
        <Select.Item value="30">30 days</Select.Item>
        <Select.Item value="90">90 days</Select.Item>
        <Select.Item value="180">180 days</Select.Item>
        <Select.Item value="365">365 days</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root type="multiple" bind:value={selectedIds}>
      <Select.Trigger class="w-48">Add products ({evalProducts.length})</Select.Trigger>
      <Select.Content>
        {#each app.products as product}
          <Select.Item value={product.id}>
            <img
              src={product.url || `${base}/images/cube.png`}
              class="w-6 min-w-6 aspect-square mr-2"
              alt={product.name}
            />
            {product.name}</Select.Item
          >
        {/each}
        <a href="{base}/">
          <Button class="py-2" variant="link">Manage Products →</Button>
        </a>
      </Select.Content>
    </Select.Root>
  </Card.Header>
  <Card.Content class="px-0 pb-0">
    <!-- {#if evalProducts.length > 0} -->
    <!-- eval products -->
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head></Table.Head>
          <Table.Head class="">Product</Table.Head>
          <Table.Head class="">Sell price (each)</Table.Head>
          <Table.Head class="">Quantity</Table.Head>
          <Table.Head class="">Rank</Table.Head>
          <Table.Head class="text-right">Time (hrs)</Table.Head>
          <Table.Head class="">Expenses ($)</Table.Head>
          <Table.Head class="text-right">Profit ($)</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each evalProducts as product}
          <Table.Row>
            <Table.Cell class="w-12 pr-0 pl-1">
              <Button
                size="sm"
                variant="ghost"
                onclick={() => (selectedIds = selectedIds.filter((id) => id !== product.id))}
              >
                <MinusCircle />
              </Button>
            </Table.Cell>

            <Table.Cell class="pl-0">
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
            <Table.Cell class="">
              <Input
                class="w-16"
                type="number"
                inputmode="numeric"
                bind:value={product.price}
                min="0"
              />
            </Table.Cell>
            <Table.Cell class="flex">
              <Button
                size="sm"
                variant="ghost"
                onclick={() => {
                  if (evalData[product.id].quantity > 0) evalData[product.id].quantity--;
                  else evalData[product.id].quantity = 0;
                }}
              >
                <Minus />
              </Button>
              <Input
                class="w-16"
                type="number"
                inputmode="numeric"
                bind:value={evalData[product.id].quantity}
                min="0"
              />
              <Button size="sm" variant="ghost" onclick={() => evalData[product.id].quantity++}>
                <Plus />
              </Button>
            </Table.Cell>
            <Table.Cell>
              <div class="justify-self-start" role="cell" tabindex="0" onkeydown={() => {}}>
                <Stars bind:value={evalData[product.id].rank} />
              </div>
            </Table.Cell>
            <Table.Cell class="text-right"
              >{evalData[product.id].quantity *
                (app.productData.find((p) => p.id === product.id)?.time || 0)} hrs</Table.Cell
            >
            <Table.Cell class="text-right"
              >${(
                evalData[product.id].quantity *
                (app.productData.find((p) => p.id === product.id)?.expenses || 0)
              ).toFixed(2)}</Table.Cell
            >
            <Table.Cell class="text-right"
              >${(
                evalData[product.id].quantity *
                (app.productData.find((p) => p.id === product.id)?.profit || 0)
              ).toFixed(2)}</Table.Cell
            >
          </Table.Row>
        {/each}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colspan={5}></Table.Cell>
          <!-- total time -->
          <Table.Cell class="text-right">
            {totalTime} hrs
          </Table.Cell>
          <!-- total expenses -->
          <Table.Cell class="text-right">
            ${totalExpenses}
          </Table.Cell>
          <Table.Cell class="text-right">
            ${totalProfit}
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>

    <!-- {:else}
      <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if} -->
  </Card.Content>
  {@render children?.()}
</div>
