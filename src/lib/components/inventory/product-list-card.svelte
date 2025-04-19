<script lang="ts">
  import { getInventoryContext } from "$lib/components/inventory/inventory.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Plus } from "lucide-svelte";
  import { base } from "$app/paths";

  const inventory = getInventoryContext();

  let { selectedProducts = $bindable([]) as string[] } = $props();

  function selectProduct(e: MouseEvent, id: string) {
    selectedProducts.push(id);
  }
</script>

<Card.Root>
  <Card.Content>
    <div class="flex flex-col gap-2">
      {#each inventory.products as product}
        <Button variant="outline" onclick={(e) => selectProduct(e, product.id)}>
          <img src={`${base}/images/cube.png`} class="size-6" alt={product.name} />
          {product.name}
        </Button>
      {/each}
    </div>
  </Card.Content>
  <Card.Footer>
    <Button onclick={inventory.newProduct}><Plus />Add Product</Button>
  </Card.Footer>
</Card.Root>
