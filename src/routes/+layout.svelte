<script lang="ts">
  import "../app.css";
  import { setAppContext } from "$lib/components/app/app.svelte";
  import Toolbar from "$lib/components/app/toolbar.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import Product from "$lib/components/app/product.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

  let { children } = $props();

  const app = setAppContext();

  let productSheetOpen = $derived(!!app.selectedProduct);
  function onOpenChange(open: boolean) {
    if (!open) app.selectedProductId = "";
  }
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>

<div class="fixed inset-0 bg-red-50 overflow-y-auto">
  {@render children?.()}
  <Toolbar class="fixed bottom-6 left-6" />

  <Sheet.Root open={productSheetOpen} {onOpenChange} >
    <Sheet.Content class="p-0" hideCloseButton>
      <ScrollArea class="h-full" type="scroll">
        <Product product={app.selectedProduct} class="p-6" />
      </ScrollArea>
    </Sheet.Content>
  </Sheet.Root>
</div>
