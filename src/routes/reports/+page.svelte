<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Report from "$lib/components/app/report.svelte";
  import ProductList from "$lib/components/app/product-list.svelte";

  let selectedIds: string[] = $state([]);
</script>

<div class="grid md:grid-cols-[1fr,3fr] gap-8 p-6">
  <div class="grid gap-8">
     <Card.Root class="h-min">
    <Card.Content>
      <Goals class="max-w-[250px]" />
    </Card.Content>
  </Card.Root>
  <Card.Root class="h-min">
    <Card.Content>
      <ProductList bind:selectedIds/>
    </Card.Content>
  </Card.Root>
  </div>
 
  <Card.Root class="h-min">
    <Card.Content>
      <Report  bind:selectedIds/>
    </Card.Content>
  </Card.Root>
</div>
