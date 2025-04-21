<script lang="ts">
  import { setAppContext } from "$lib/components/app/app.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import ProductCard from "$lib/components/app/product-card.svelte";
  import ProductListCard from "$lib/components/app/product-list-card.svelte";
  import GoalsCard from "$lib/components/app/goals-card.svelte";
  import ReportCard from "$lib/components/app/report-card.svelte";
  import Toolbar from "$lib/components/app/toolbar.svelte";

  const app = setAppContext();
  const isMobile = new IsMobile();
</script>

{#if isMobile.current}
  <div class="h-full flex items-center justify-center">
    <p class="text-lg text-center">Implement mobile 😭</p>
  </div>
{:else}
  <div class="flex">
    <Toolbar />
    <ProductListCard class="w-64 h-min" />

    {#if app.evaluateMode}
      <GoalsCard class="h-min"/>
      <ReportCard  class="h-min"/>
    {:else}
      <ProductCard product={app.selectedProduct} class="h-min"/>
    {/if}
  </div>
{/if}
