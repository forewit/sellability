<script lang="ts">
  import ProductList from "$lib/components/app/product-list.svelte";
  import * as Card from "$lib/components/ui/card/index.js";

</script>

  <Card.Root class="h-min m-2">
    <Card.Content>
      <ProductList />
    </Card.Content>
  </Card.Root>
