<script lang="ts">
  import "../app.css";
  import { setAppContext } from "$lib/components/app/app.svelte";
  import Toolbar from "$lib/components/app/toolbar.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import Product from "$lib/components/app/product.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import SafeAreas from "$lib/components/safeareas/safe-areas.svelte";

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

<SafeAreas>
  <!-- main page with toolbar -->
  <div
    class="h-screen bg-red-50 grid grid-rows-[1fr,auto] md:grid-cols-[auto,1fr] pl-[var(--safe-area-left)] pr-[var(--safe-area-right)] pt-[var(--safe-area-top)]"
  >
    <Toolbar
      class="place-self-center flex-row md:flex-col w-min h-min order-2 md:order-1 m-2 mt-0 md:mt-2 md:mr-0"
    />
    <ScrollArea
      class="mb-2 border shadow-sm rounded-lg bg-card order-1 md:order-2"
      style="margin-left: max(0.5rem, var(--safe-area-left)); margin-right: max(0.5rem, var(--safe-area-right)); margin-top: max(0.5rem, var(--safe-area-top));"
      type="scroll"
    >
      {@render children?.()}
    </ScrollArea>
  </div>

  <!-- product editing sheet -->
  <Sheet.Root open={productSheetOpen} {onOpenChange}>
    <Sheet.Content
      class="p-0 pr-[var(--safe-area-right)] pt-[var(--safe-area-top)]"
      hideCloseButton
    >
      <ScrollArea class="h-full" type="scroll">
        <Product product={app.selectedProduct} class="p-6" />
      </ScrollArea>
    </Sheet.Content>
  </Sheet.Root>
</SafeAreas>
