<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import Stars from "$lib/components/custom/stars.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import { SquarePen } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";

  let { class: className = "" } = $props();

  const app = getAppContext();
</script>

<div class={cn("", className)}>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head></Table.Head>

        <Table.Head></Table.Head>
        <Table.Head class="">Name</Table.Head>
        <Table.Head class="">Profitability</Table.Head>
        <Table.Head class="">Price ($)</Table.Head>
        <Table.Head class="text-right">Expenses ($)</Table.Head>
        <Table.Head class="text-right">Time (hrs)</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each app.products as product, i}
        <Table.Row>
          <Table.Cell class="w-12 pr-0 pl-0">
            <Button size="sm" variant="ghost" onclick={() => (app.selectedProductId = product.id)}>
              <SquarePen />
            </Button>
          </Table.Cell>
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
            <Input bind:value={product.name} />
          </Table.Cell>
          <Table.Cell>
            <div class="justify-self-start" role="cell" tabindex="-1" onkeydown={() => {}}>
              <Stars size={3} bind:value={product.profitability} />
            </div>
          </Table.Cell>
          <Table.Cell>
            <Input inputmode="decimal" type="number" class="w-16" bind:value={product.price} />
          </Table.Cell>
          <Table.Cell class="text-right">
            ${app.productData[product.id].expenses || 0}
          </Table.Cell>
          <Table.Cell class="text-right">
            {app.productData[product.id].time || 0} hrs
          </Table.Cell>


        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
