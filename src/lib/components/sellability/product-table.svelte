<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";

  import Stars from "$lib/components/ratings/stars.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "../../app/app.svelte";
  import { SquarePen, Trash2 } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";

  let { class: className = "" } = $props();

  const app = getAppContext();

  let dialogOpen = $state(false);
</script>

<div class={cn("", className)}>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head colspan={2}>Product</Table.Head>
        <Table.Head class="">Price</Table.Head>
        <Table.Head class="text-right">Expenses</Table.Head>
        <Table.Head class="text-right">Time</Table.Head>
        <Table.Head></Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each app.products as product, i}
        <Table.Row class="cursor-pointer" onclick={() => (app.selectedProductId = product.id)}>
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
            <Input inputmode="decimal" type="number" class="w-16" bind:value={product.price} onclick={(e) => e.stopPropagation()}/>
          </Table.Cell>
          <Table.Cell class="text-right">
            ${app.productData[product.id].expenses || 0}
          </Table.Cell>
          <Table.Cell class="text-right">
            {app.productData[product.id].time || 0} hrs
          </Table.Cell>
          <Table.Cell class="flex gap-2 justify-end pl-0">
            <Button size="sm" variant="secondary" onclick={() => (app.selectedProductId = product.id)}><SquarePen /></Button>
            <Dialog.Root bind:open={dialogOpen}>
              <Dialog.Trigger onclick={(e) => e.stopPropagation()}
                ><Button size="sm" variant="destructive"><Trash2/></Button></Dialog.Trigger
              >
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
                  <Dialog.Description>
                    This action cannot be undone. This will permanently delete your product.
                  </Dialog.Description>
                </Dialog.Header>
                <Dialog.Footer>
                  <Button
                    variant="destructive"
                    onclick={() => {
                      app.deleteProduct(product.id);
                      dialogOpen = false;
                    }}>Yes, delete</Button
                  >
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Root>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
