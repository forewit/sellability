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

<!-- main page with toolbar -->
<div
  class="fixed top-0 bottom-0 left-0 right-0 bg-red-50 grid grid-rows-[1fr,auto] md:grid-cols-[auto,1fr]"
  style="margin-left: max(0px, env(safe-area-inset-left)); margin-right: max(0px, env(safe-area-inset-right)); margin-top: max(0px, env(safe-area-inset-top));"
>
  <Toolbar class="flex-row md:flex-col w-min h-min order-2 md:order-1 m-2 mt-0 md:mt-2 md:mr-0" />
  <ScrollArea class="m-2 border shadow-sm rounded-lg bg-card order-1 md:order-2" type="scroll">
    {@render children?.()}
  </ScrollArea>
</div>

<!-- product editing sheet -->
<Sheet.Root open={productSheetOpen} {onOpenChange}>
  <Sheet.Content class="p-0" hideCloseButton>
    <ScrollArea class="h-full" type="scroll">
      <Product product={app.selectedProduct} class="p-6" />
    </ScrollArea>
  </Sheet.Content>
</Sheet.Root>
