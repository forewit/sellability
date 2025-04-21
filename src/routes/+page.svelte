<script lang="ts">
  import { setAppContext } from "$lib/components/app/app.svelte";
  import ProductCard from "$lib/components/app/product-card.svelte";
  import ProductListCard from "$lib/components/app/product-list-card.svelte";
  import GoalsCard from "$lib/components/app/goals-card.svelte";
  import ReportCard from "$lib/components/app/report-card.svelte";
  import Toolbar from "$lib/components/app/toolbar.svelte";

  const app = setAppContext();
</script>

<div class="flex md:flex-row flex-col">
  <Toolbar class="w-min" />
  <ProductListCard class="w-64 h-min" />
  <GoalsCard class="h-min" />
  <ReportCard class="h-min" />
  <ProductCard product={app.selectedProduct} class="h-min" />
</div>
