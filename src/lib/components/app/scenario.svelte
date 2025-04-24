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
  } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import type { Snippet } from "svelte";
  import Stars from "../stars/stars.svelte";

  let {
    evalData = $bindable({ test: { quantity: 1 } }),
    class: className = "",
    children,
  }: {
    evalData?: Record<string, { quantity: number }>;
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
      if (untrack(()=>(!evalData[id]))) {
        evalData[id] = { quantity: 0 };
      }
    });
  });
</script>

<div class={cn("min-w-[220px]", className)}>
  <Card.Header class="p-0 grid grid-cols-[1fr,auto]">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
      Scenario
    </Card.Title>
    <Select.Root type="multiple" bind:value={selectedIds}>
      <Select.Trigger class="w-48">Add products</Select.Trigger>
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
          <Table.Head class="">Quantity</Table.Head>
          <Table.Head class="">Rank</Table.Head>

          <Table.Head class="text-right">Total Time (hrs)</Table.Head>
          <Table.Head class="text-right">Total Profit ($)</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each evalProducts as product}
          <Table.Row onclick={() => (app.selectedProductId = product.id)}>
            <Table.Cell class="w-12 pr-0 pl-1">
              <Button
                size="sm"
                variant="ghost"
                onclick={(e) => {
                  e.stopPropagation();
                  selectedIds = selectedIds.filter(id => id !== product.id);
                }}
              >
                <MinusCircle />
              </Button>
            </Table.Cell>
            
            <Table.Cell class="pl-0">
              <div class="flex gap-2">
                <img
                  src={product.url || `${base}/images/cube.png`}
                  class="w-6 min-w-6 aspect-square"
                  alt={product.name}
                />
                {product.name}
              </div>
            </Table.Cell>

            <Table.Cell>
              <Input
                class="w-20"
                type="number"
                inputmode="numeric"
                onclick={(e) => e.stopPropagation()}
                bind:value={evalData[product.id].quantity}
                min="0"
              />
            </Table.Cell>
            <Table.Cell>
              <Stars></Stars>
            </Table.Cell>
            <Table.Cell class="text-right"
              >{evalData[product.id].quantity *
                (app.productData.find((p) => p.id === product.id)?.time || 0)} hrs</Table.Cell
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
    </Table.Root>

    <!-- {:else}
      <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if} -->
  </Card.Content>
  {@render children?.()}
</div>
