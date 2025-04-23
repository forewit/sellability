<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";

  import Button from "$lib/components/ui/button/button.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import { TriangleAlert, CheckCheck, MessageCircleWarning, Trash2 } from "lucide-svelte";
  import Input from "../ui/input/input.svelte";
  import { cn } from "$lib/utils";

  let { selectedIds = $bindable([]) as string[], class: className = "" } = $props();

  const app = getAppContext();

  let evalProducts = $derived(app.products.filter((p) => selectedIds.includes(p.id)));

  let unitsPerMonth = $state(0);
  let hoursPerWeek = $derived(app.productData.reduce((total, data) => total + data.totalTime, 0));
  let viabilityColor = $state("red");
</script>

<div class={cn("min-w-[220px]", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
      Report
    </Card.Title>
    <Select.Root type="multiple" bind:value={selectedIds}>
      <Select.Trigger>Add products</Select.Trigger>
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
      </Select.Content>
    </Select.Root>
  </Card.Header>
  <Card.Content class="px-0 pb-0">
    {#if evalProducts.length > 0}
      <!-- eval products -->
      <div class="flex flex-col gap-2 mb-8">
        {#each evalProducts as product}
          <div class="relative flex items-center gap-1 h-10">
            <!-- onclick should open a slider to select quantity -->
            <!-- quanity slider should have a lock -->
            <!-- add a auto button that automatically suggests quanities -->
            <Button
              variant="ghost"
              class="justify-start"
            >
              <img
                src={product.url || `${base}/images/cube.png`}
                class="w-6 min-w-6 aspect-square"
                alt={product.name}
              />
              {product.name}
            </Button>
          </div>
        {/each}
      </div>
      <div class="grid grid-cols-2 gap-4">
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
      </div>
    {:else}
      <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if}
  </Card.Content>
</div>
