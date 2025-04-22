<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import ProductList from "$lib/components/app/product-list.svelte";
</script>

<Card.Root class="inset-2 absolute">
  <Card.Content>
    <ProductList />
  </Card.Content>
</Card.Root>
