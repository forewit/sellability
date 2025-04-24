<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import Stars from "$lib/components/stars/stars.svelte";
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
    Plus,
    SquarePen,
    EllipsisVertical,
  } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";
  import { page } from "$app/state";

  let { class: className = "" } = $props();

  const app = getAppContext();
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/cube.png" class="w-8" alt="goals icon" />
      Products
    </Card.Title>
  </Card.Header>
  <Card.Content class="px-0 pb-0">
    <!-- {#if evalProducts.length > 0} -->
    <!-- eval products -->
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head></Table.Head>
          <Table.Head class="">Name</Table.Head>
          <Table.Head class="">Rank</Table.Head>
          <Table.Head class="text-right">Expenses ($)</Table.Head>
          <Table.Head class="text-right">Time (hrs)</Table.Head>
          <Table.Head class="text-right">Price ($)</Table.Head>
          <Table.Head></Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each app.products as product, i}
          <Table.Row
            onclick={() => {
              app.selectedProductId = product.id;
            }}
          >
            <Table.Cell class="w-12">
              <img
                src={product.url || `${base}/images/cube.png`}
                class="w-6 min-w-6 aspect-square"
                alt={product.name}
              />
              <!-- <Button
                size="sm"
                variant="ghost"
                onclick={() => (app.selectedProductId = product.id)}
              >
                <SquarePen />
              </Button> -->
            </Table.Cell>
            <Table.Cell class="pl-0">
              <Input bind:value={product.name} onclick={(e) => e.stopPropagation()} />
            </Table.Cell>
            <Table.Cell>
              <div
                class="justify-self-start"
                role="cell"
                tabindex="0"
                onkeydown={() => {}}
                onclick={(e) => e.stopPropagation()}
              >
                <Stars bind:value={product.rank} />
              </div>
            </Table.Cell>
            <Table.Cell class="text-right">
              ${app.productData.find((p) => p.id === product.id)?.expenses || 0}
            </Table.Cell>
            <Table.Cell class="text-right">
              {app.productData.find((p) => p.id === product.id)?.time || 0} hrs
            </Table.Cell>
            <Table.Cell class="flex justify-end">
              <Input
                onclick={(e) => e.stopPropagation()}
                inputmode="decimal"
                type="number"
                class="w-16"
                bind:value={product.price}
              />
            </Table.Cell>
            <Table.Cell class="w-12 pr-0 pl-0">
              <Popover.Root>
                <Popover.Trigger
                  class="rounded-lg"
                  onclick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Button size="sm" variant="ghost" disabled>
                    <EllipsisVertical />
                  </Button>
                </Popover.Trigger>
                <Popover.Content align="end" side="bottom" class="w-32 flex flex-col gap-2" trapFocus={false}>
                    <Button
                      size="sm"
                      variant="outline"
                      onclick={() => (app.selectedProductId = product.id)}>Edit</Button
                    >
                    <Button
                      size="sm"
                      variant="destructive"
                      onclick={() => app.deleteProduct(product.id)}>Delete</Button
                    >
                </Popover.Content>
              </Popover.Root>
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>

    <!-- {:else}
      <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if} -->
  </Card.Content>
  <Card.Footer class="p-0 pt-4">
    <Button onclick={app.newProduct}><Plus />New Product</Button>
  </Card.Footer>
</div>
