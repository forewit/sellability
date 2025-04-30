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
      class="bg-stone-200 h-screen w-screen grid relative pl-[var(--safe-area-left)] pr-[var(--safe-area-right)]"
    >
      <ScrollArea type="always">
        <div class="max-w-[1200px] m-auto pt-[var(--safe-area-top)]">
          {@render children?.()}
        </div>
        <div class="h-24 pb-[var(--safe-area-bottom)]"></div>
      </ScrollArea>
      <Toolbar class="flex-row absolute left-1/2 -translate-x-1/2 bottom-5 z-20" />
    </div>

  <!-- product editing sheet -->
  <Sheet.Root open={productSheetOpen} {onOpenChange}>
    <Sheet.Content
      class="pl-0 pr-[var(--safe-area-right)] pt-[var(--safe-area-top)] pb-[var(--safe-area-bottom)]"
      hideCloseButton
    >
      <ScrollArea class="h-full" type="scroll">
        <Product product={app.selectedProduct} class="p-6" />
      </ScrollArea>
    </Sheet.Content>
  </Sheet.Root>
</SafeAreas>

<style>
  .background {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
</style>
