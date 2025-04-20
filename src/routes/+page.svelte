<script lang="ts">
  import { setInventoryContext, type Product } from "$lib/components/inventory/inventory.svelte";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import { TriangleAlert, CheckCheck, Plus, MessageCircleWarning, Key } from "lucide-svelte";
  import ProductCard from "$lib/components/inventory/product-card.svelte";
  import ProductListCard from "$lib/components/inventory/product-list-card.svelte";
  import GoalsCard from "$lib/components/goals/goals-card.svelte";
  import { setGoalsContext } from "$lib/components/goals/goals.svelte";
  import ReportCard from "$lib/components/goals/report-card.svelte";

  const inventory = setInventoryContext();
  const goals = setGoalsContext();

  let selectedProducts: string[] = $state([]);

  $effect(() => {
    goals.evaluatingProducts = selectedProducts;
  });





</script>

<Card.Root class="m-2 block">
  <Card.Content></Card.Content>
</Card.Root>

<div>
  <Resizable.PaneGroup direction="horizontal">
    <Resizable.Pane class="min-w-[100px]">
      <ProductListCard bind:selectedProducts />
      <GoalsCard />
      <ReportCard />
    </Resizable.Pane>
    <Resizable.Handle class="bg-transparent" />

    <Resizable.Pane class="min-w-[400px]">
      <ProductCard id={selectedProducts[0]} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
