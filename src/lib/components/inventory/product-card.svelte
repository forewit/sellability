<script lang="ts">
  import { getInventoryContext, type Product } from "$lib/components/inventory/inventory.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Trash2, Plus } from "lucide-svelte";

  let { id }: { id: string } = $props();

  const inventory = getInventoryContext();

  let product = inventory.products.find((p) => p.id === id);

  let otherExpense = $state("");
  function addOtherExpense() {
    product?.expenses.push({ name: otherExpense, value: 0 });
    otherExpense = "";
  }
</script>

<Card.Root>
  {#if product}
    <Card.Header>
      <Card.Title class="flex items-center">
        <img src="{base}/images/cube.png" class="w-8" alt="product icon" />
        <Input
          placeholder="Product Name"
          class="border-none text-xl md:text-xl"
          bind:value={product.name}
        />
      </Card.Title>
    </Card.Header>

    <Card.Content class="flex flex-col gap-2">
      <div>
        <Label for="details">Description</Label>
        <Textarea
          id="details"
          placeholder="Enter details here..."
          bind:value={product.description}
        />
      </div>

      {#each product.expenses as expense, i}
        <div>
          <Label for={expense.name + i}>{expense.name}</Label>
          <div class="grid grid-cols-[1fr,auto] gap-2 items-center">
            <Input id={expense.name + i} type="number" bind:value={expense.value} placeholder="0" />
            <Button
              variant="ghost"
              class="p-2 opacity-30 hover:opacity-100"
              onclick={() => product.expenses.splice(i, 1)}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      {/each}

      <div class="w-[200px] pt-2 place-self-end">
        <!-- <Label for="add-expense">Add Expense</Label> -->
        <form class="grid grid-cols-[1fr,auto] gap-2 items-center">
          <Input id="add-expense" placeholder="Add expense" bind:value={otherExpense} />
          <Button
            variant="ghost"
            onclick={addOtherExpense}
            class="p-2"
            disabled={otherExpense.length === 0}
            type="submit"
          >
            <Plus />
          </Button>
        </form>
      </div>

      <div>
        <Label for="laborTime">Labor Time (hrs/unit)</Label>
        <Input id="laborTime" type="number" bind:value={product.laborTime} placeholder="0" />
      </div>

      <div>
        <Label for="price">Unit Price ($)</Label>
        <Input id="price" type="number" bind:value={product.price} placeholder="0" />
      </div>
    </Card.Content>
    <Card.Footer class="justify-end">
      <Button variant="destructive" onclick={() => inventory.deleteProduct(id)}>Delete</Button>
    </Card.Footer>
  {:else}
    <div class="h-24 grid items-center text-center text-sm font-mono">
      <div>Product ID not found: <p class="font-bold">{id}</p></div>
    </div>
  {/if}
</Card.Root>
