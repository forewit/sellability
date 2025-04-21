<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { Toggle } from "$lib/components/ui/toggle/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Plus, ChartLine } from "lucide-svelte";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";

  const app = getAppContext();

  let { class: className = "" } = $props(); 

</script>

<Card.Root class={className}>
  <Card.Content>
    <div class="flex flex-col gap-2">
      {#each app.products as product}
        <div class="relative flex items-center gap-2 h-10">
          {#if app.evaluateMode}
            <Checkbox
              id={product.id}
              bind:checked={product.evaluating}
            />
            <Label for={product.id} class="flex items-center gap-2 w-full">
              <img src={`${base}/images/cube.png`} class="size-6" alt={product.name} />
              {product.name}
            </Label>
          {:else}
            <Button
              variant="ghost"
              class={cn(
                "flex justify-start w-full",
                app.selectedProductId === product.id && "ring-2 ring-primary"
              )}
              onclick={() => (app.selectedProductId = product.id)}
            >
              <img src={`${base}/images/cube.png`} class="size-6" alt={product.name} />
              {product.name}
            </Button>
          {/if}
        </div>
      {/each}
    </div>
  </Card.Content>
  <Card.Footer>
    <Button onclick={app.newProduct}><Plus />New Product</Button>
  </Card.Footer>
</Card.Root>
