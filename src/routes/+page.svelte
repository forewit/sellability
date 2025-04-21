<script lang="ts">
  import { setInventoryContext, type Product } from "$lib/components/inventory/inventory.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";

  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import ProductCard from "$lib/components/inventory/product-card.svelte";
  import ProductListCard from "$lib/components/inventory/product-list-card.svelte";
  import GoalsCard from "$lib/components/goals/goals-card.svelte";
  import { setGoalsContext } from "$lib/components/goals/goals.svelte";
  import ReportCard from "$lib/components/goals/report-card.svelte";

  const inventory = setInventoryContext();
  const goals = setGoalsContext();
  const isMobile = new IsMobile()

  let selectedProducts: string[] = $state([]);

  $effect(() => {
    goals.evaluatingProducts = selectedProducts;
  });
</script>

{#if isMobile.current}
<div class="h-full flex items-center justify-center">
  <p class="text-lg text-center">Implement mobile 😭</p>
</div>
{:else}
<ProductListCard class="w-64"/>

<!-- <GoalsCard />
<ReportCard />
<ProductCard id={selectedProducts[0]} /> -->
{/if}

