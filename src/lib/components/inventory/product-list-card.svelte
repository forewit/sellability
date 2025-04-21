<script lang="ts">
  import { getInventoryContext } from "$lib/components/inventory/inventory.svelte";
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Plus } from "lucide-svelte";
  import { base } from "$app/paths";

  const inventory = getInventoryContext();

  let { selectedProducts = $bindable([]) as string[], class: className = "" } = $props();

  function selectProduct(e: MouseEvent, id: string) {
    selectedProducts = [id];
    //TODO: allow for selecting multiple
  }
</script>

<Card.Root class={className}>
  <Card.Header>
    <div class="flex items-center gap-2">
      <Switch id="evaluate-mode" />
      <Label for="evaluate-mode">Evaluate Mode</Label>
    </div>
  </Card.Header>
  <Card.Content>
    <div class="flex flex-col gap-2">
      {#each inventory.products as product}
        <Button
          variant="outline"
          class={cn(
            "flex justify-start",
            selectedProducts.includes(product.id) && "ring-2 ring-primary"
          )}
          onclick={(e) => selectProduct(e, product.id)}
        >
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
