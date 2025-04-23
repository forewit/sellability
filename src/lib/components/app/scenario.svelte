<script lang="ts">
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

  let { class: className = "" } = $props();

  const app = getAppContext();

  let evalIds: string[] = $state(["test"]);
  let evalProducts = $derived(app.products.filter((p) => evalIds.includes(p.id)));
  let evalProductQuantities: number[] = $state([0]);


  let unitsPerMonth = $state(0);
  let hoursPerWeek = $derived(0);
  let viabilityColor = $state("red");
</script>

<div class={cn("min-w-[220px]", className)}>
  <Card.Header class="p-0 grid grid-cols-[1fr,auto]">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
      Scenario
    </Card.Title>
    <Select.Root type="multiple" bind:value={evalIds}>
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
          <Table.Head class="text-right">Time (hrs)</Table.Head>
          <Table.Head class="text-right">Profit ($)</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each evalProducts as product, i}
          <Table.Row>
            <Table.Cell class="w-12 pr-0 pl-1">
              <Button
                size="sm"
                variant="ghost"
                onclick={() => {
                  evalIds = evalIds.filter((id) => id !== product.id);
                }}
              >
                <MinusCircle />
              </Button>
            </Table.Cell>
            <Table.Cell class="pl-0">
              <Button
                variant="ghost"
                class="justify-start"
                onclick={() => (app.selectedProductId = product.id)}
              >
                <img
                  src={product.url || `${base}/images/cube.png`}
                  class="w-6 min-w-6 aspect-square"
                  alt={product.name}
                />
                {product.name}
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Input
                class="w-20"
                type="number"
                inputmode="numeric"
                bind:value={evalProductQuantities[i]}
              />
            </Table.Cell>
            <Table.Cell class="text-right"
              >{evalProductQuantities[i] *
                (app.productData.find((p) => p.id === product.id)?.time || 0)} hrs</Table.Cell
            >
            <Table.Cell class="text-right"
              >${(
                evalProductQuantities[i] *
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
</div>
