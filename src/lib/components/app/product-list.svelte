<script lang="ts">
  import { cn } from "$lib/utils";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";

  const app = getAppContext();

  let { selectedIds = $bindable([]) as string[], class: className = "" } = $props();

  function newProduct() {
    const id = app.newProduct();
  }

  let productsSelectedStatus: Record<string, boolean> = $state({});

  $effect(() => {
    selectedIds = app.products
      .filter((product) => productsSelectedStatus[product.id])
      .map((product) => product.id);
  });
</script>

<div class={cn("h-min min-w-[250px]", className)}>
    <div class="flex flex-col gap-2">
      {#each app.products as product, i}
        <div class="relative flex items-center gap-4 h-10">
          <Checkbox
            id={product.id}
            onCheckedChange={(checked) => (productsSelectedStatus[product.id] = checked)}
          />
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
</div>
