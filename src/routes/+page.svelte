<script lang="ts">
  import ProductTable from "$lib/components/sellability/product-table.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import Button from "$lib/components/ui/button/button.svelte";
  import { getAppContext } from "$lib/app/app.svelte";
  import { Plus } from "lucide-svelte";

  const app = getAppContext();
</script>

<Card.Root class="h-min m-3">
  <Card.Header>
    <Card.Title class="flex gap-3 items-center">
      <img src="{base}/images/cube.png" class="w-8" alt="goals icon" />
      Products
    </Card.Title>
  </Card.Header>
  {#if app.products.length > 0}
  <Card.Content>
    <ProductTable />
  </Card.Content>
  <Card.Footer>
      <Button onclick={()=>{const id=app.newProduct(); app.selectedProductId = id;}}><Plus />New Product</Button>
  </Card.Footer>
  {:else}
  
  <div class="grid place-items-center p-6 pb-10">
    <div class="grid place-items-center gap-6 justify-center">
      <p>Create a product to get started!</p>
      <Button onclick={()=>{const id=app.newProduct(); app.selectedProductId = id;}}><Plus />New Product</Button>
    </div>
  </div>
  {/if}
</Card.Root>
