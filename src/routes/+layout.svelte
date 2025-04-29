<script lang="ts">
  import "../app.css";
  import { cn } from "$lib/utils";
  import { setAppContext } from "$lib/components/app/app.svelte";
  import Toolbar from "$lib/components/app/toolbar.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import Product from "$lib/components/app/product.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import SafeAreas from "$lib/components/safeareas/safe-areas.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";

  let { children } = $props();

  const app = setAppContext();

  let productSheetOpen = $derived(!!app.selectedProduct);
  function onOpenChange(open: boolean) {
    if (!open) app.selectedProductId = "";
  }

  const isMobile = new IsMobile();
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>

<SafeAreas>
  <!-- main page with toolbar -->
  <div
    class="h-svh w-svw grid relative pl-[var(--safe-area-left)] pr-[var(--safe-area-right)] pt-[var(--safe-area-top)]"
  >
    <ScrollArea type="always">
      <div class="max-w-[1200px] m-auto">

      {@render children?.()}
      </div>
      <div class="h-24"></div>
    </ScrollArea>
    <Toolbar class="flex-row absolute left-1/2 -translate-x-1/2 bottom-5 z-20" />
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
