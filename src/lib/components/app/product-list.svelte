<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Plus, ChartLine } from "lucide-svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";

  const app = getAppContext();

  let { class: className = "" } = $props();

  function newProduct() {
    const id = app.newProduct();
    //app.selectedProductId = id;
  }
</script>

<div class={cn("min-w-[250px]",className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/cube.png" class="w-8" alt="goals icon" />
      Products
    </Card.Title>
  </Card.Header>
  <Card.Content class="px-0">
    <div class="flex flex-col gap-2">
      {#each app.products as product}
        <div class="relative flex items-center gap-4 h-10">
          <Checkbox id={product.id} />
          <Button
            variant="ghost"
            class={cn(
              "justify-start w-full",
              app.selectedProductId === product.id && "ring-2 ring-secondary"
            )}
            onclick={() => (app.selectedProductId = product.id)}
          >
          <img src={product.url || `${base}/images/cube.png`} class="w-6" alt={product.name} />
          {product.name}
          </Button>
        </div>
      {/each}
    </div>
  </Card.Content>
  <Card.Footer class="p-0">
    <Button onclick={newProduct}><Plus />New Product</Button>
  </Card.Footer>
</div>