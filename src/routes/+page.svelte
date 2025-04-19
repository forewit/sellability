<script lang="ts">
  import { setInventoryContext, type Product } from "$lib/components/inventory/inventory.svelte";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import {
    TriangleAlert,
    CheckCheck,
    Plus,
    MessageCircleWarning,
  } from "lucide-svelte";
  import ProductCard from "$lib/components/inventory/product-card.svelte";
  import ProductListCard from "$lib/components/inventory/product-list-card.svelte";

  const inventory = setInventoryContext();

  let selectedProducts: string[] = $state([]);

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

<Card.Root class="m-2 block">
  <Card.Content></Card.Content>
</Card.Root>

<div>
  <Resizable.PaneGroup direction="horizontal">
    <Resizable.Pane class="min-w-[100px]">
      <ProductListCard bind:selectedProducts/>
    </Resizable.Pane>
    <Resizable.Handle class="bg-transparent" />

    <Resizable.Pane class="min-w-[400px]">
      <!-- Product -->
      {#if selectedProducts.length === 1}
        <ProductCard id={selectedProducts[0]} />
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
</div>
