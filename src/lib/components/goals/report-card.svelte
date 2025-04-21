<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getGoalsContext } from "./goals.svelte";
  import { getInventoryContext } from "$lib/components/inventory/inventory.svelte";
  import { TriangleAlert, CheckCheck, MessageCircleWarning } from "lucide-svelte";

let { class: className = "" } = $props();

  const goals = getGoalsContext();
  const inventory = getInventoryContext();

  let evalProducts = $derived(
    inventory.products.filter(({ id }) => goals.evaluatingProducts.includes(id))
  );

  let unitsNeeded = $state(0);
  let hoursPerWeek = $state(0);
  let viabilityColor = $state("red");

  function removeEvalProduct(id: string) {
    goals.evaluatingProducts = goals.evaluatingProducts.filter(productId => productId !== id);
  }
</script>

<Card.Root class={className}>
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/rocket.png" class="w-8" alt="goals icon" />
      Summary
    </Card.Title>
  </Card.Header>
  <Card.Content>
    {#if evalProducts.length > 0}
    <!-- eval products -->
    <div class="flex gap-2 mb-8">
      {#each evalProducts as product}
        <Button variant="outline" onclick={()=>removeEvalProduct(product.id)}>
          <img src={`${base}/images/cube.png`} class="size-6" alt={product.name} />
          {product.name}
        </Button>
      {/each}
    </div>
    <div class="grid grid-cols-3 gap-4">
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
    </div>
    {:else}

    <div class="text-center p-4">Choose one or more products to evaluate</div>
    {/if}
  </Card.Content>
</Card.Root>
