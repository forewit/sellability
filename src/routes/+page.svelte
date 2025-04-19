<script lang="ts">
  import { setInventoryContext, type Product } from "$lib/state/inventory.svelte";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import {
    Box,
    Trash2,
    TriangleAlert,
    CheckCheck,
    Plus,
    MessageCircleWarning,
  } from "lucide-svelte";

  const inventory = setInventoryContext();
  let mode: "edit" | "compare" = "edit";
  let selectedProducts: string[] = []; // list of IDs

  // — Details state —
  let laborTime = $state<number>(0); // hrs per unit
  let price = $state<number>(0); // $ per unit
  let expenses = $state([
    { name: "Materials ($)", value: "0" },
    { name: "Average Shipping ($)", value: "0" },
  ]);
  let otherExpense = $state("");
  function addOtherExpense() {
    expenses.push({ name: otherExpense, value: "0" });
    otherExpense = "";
  }

  // — Goals & constraints —
  let desiredMonthlyProfit = $state<number>(0); // $
  let desiredTimeWeekly = $state<number>(0); // hrs

  // — Derived values —
  let totalExpenses = $derived(expenses.reduce((sum, e) => sum + Number(e.value), 0));
  let profitPerUnit = $derived(price - totalExpenses);
  let unitsNeeded = $derived.by(() =>
    profitPerUnit > 0 ? Math.ceil(desiredMonthlyProfit / profitPerUnit) : NaN
  );
  let totalTimeNeeded = $derived.by(() => unitsNeeded * laborTime);
  let hoursPerWeek = $derived(Math.ceil(totalTimeNeeded / 4));
  let viabilityColor = $derived.by(() => {
    const metProfit = profitPerUnit > 0;
    const metTime = totalTimeNeeded <= desiredTimeWeekly * 4;
    if (metProfit && metTime) return "green";
    if (metProfit || metTime) return "yellow";
    return "red";
  });
</script>

{#snippet ProductCard(product: Product)}
  <Card.Root class="m-2 ml-1">
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
              onclick={() => expenses.splice(i, 1)}
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
        <Input id="laborTime" type="number" bind:value={laborTime} placeholder="0" />
      </div>

      <div>
        <Label for="price">Unit Price ($)</Label>
        <Input id="price" type="number" bind:value={price} placeholder="0" />
      </div>
    </Card.Content>
    <Card.Footer class="justify-end">
      <Button variant="destructive" onclick={() => inventory.deleteProduct(product.id)}
        >Delete</Button
      >
    </Card.Footer>
  </Card.Root>
{/snippet}

<Card.Root class="m-">
  <Card.Content></Card.Content>
</Card.Root>
<Resizable.PaneGroup direction="horizontal">
  <Resizable.Pane class="min-w-[100px]">
    <Card.Root class="m-2 mr-1">
      <Card.Content>
        {#each inventory.products as product, i}
          <Label class="flex">
            <Checkbox />
            {product.name || "new product"}
          </Label>
        {/each}
        <Button onclick={inventory.newProduct}><Plus />New Product</Button>
      </Card.Content>
    </Card.Root>
  </Resizable.Pane>
  <Resizable.Handle class="bg-transparent" />

  <Resizable.Pane class="min-w-[400px]">
    <!-- Product -->
    {#if mode === "edit"}
      {@render ProductCard({})}
    {/if}

    <!-- Goals & Summary -->
    <Card.Root class="m-2 ml-1">
      <Card.Header>
        <Card.Title class="flex gap-2 items-center">
          <img src="{base}/images/pie.png" class="w-8" alt="goals icon" />
          Goals
        </Card.Title>
      </Card.Header>

      <Card.Content class="flex flex-col gap-4">
        <div>
          <Label>Desired monthly profit ($)</Label>
          <Input type="number" bind:value={desiredMonthlyProfit} placeholder="0" />
        </div>
        <div>
          <Label>Desired time per week (hrs)</Label>
          <Input type="number" bind:value={desiredTimeWeekly} placeholder="0" />
        </div>
      </Card.Content>
    </Card.Root>

    <Card.Root class="m-2 ml-1">
      <Card.Header>
        <Card.Title class="flex gap-2 items-center">
          <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
          Summary
        </Card.Title>
      </Card.Header>
      <Card.Content class="grid grid-cols-3 gap-4">
        <!-- Units to sell -->
        <div class="p-3 rounded-xl bg-blue-50 text-center">
          <div class="text-sm font-semibold">Units / mo</div>
          <div class="text-2xl">{unitsNeeded}</div>
        </div>

        <!-- Work time needed -->
        <div class="p-3 rounded-xl bg-purple-50 text-center">
          <div class="text-sm font-semibold">Hours / wk</div>
          <div class="text-2xl">{hoursPerWeek}</div>
        </div>

        <!-- Viability -->
        <div
          class="p-3 rounded-xl text-center"
          class:bg-red-500={viabilityColor === "red"}
          class:bg-yellow-500={viabilityColor === "yellow"}
          class:bg-green-500={viabilityColor === "green"}
        >
          <div class="text-sm font-semibold">Viability</div>
          <div class="grid place-items-center pt-2">
            {#if viabilityColor === "red"}
              <TriangleAlert />
            {:else if viabilityColor === "yellow"}
              <MessageCircleWarning />
            {:else if viabilityColor === "green"}
              <CheckCheck />
            {/if}
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </Resizable.Pane>
</Resizable.PaneGroup>
