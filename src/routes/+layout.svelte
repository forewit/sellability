<script lang="ts">
  import "../app.css";
  import { setAppContext } from "$lib/app/app.svelte";
  import Toolbar from "$lib/components/sellability/toolbar.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import Product from "$lib/components/sellability/product.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import SafeAreas from "$lib/components/safeareas/safe-areas.svelte";
  import { setFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import PublishingStatus from "$lib/components/firebase/PublishingStatus.svelte";
import { Loader2 } from "lucide-svelte";

  let { children } = $props();

  const firebase = setFirebaseContext();
  const app = setAppContext();

  let productSheetOpen = $derived(!!app.selectedProduct);

  $effect(() => {
    app.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebase.user && !firebase.isLoading) {
      goto(`${base}/login/`);
    }
  });

  onMount(() => {
    window.addEventListener("beforeunload", (e) => {
      if (firebase.isPublishing) e.preventDefault();
    });

    return () => {
      firebase.destroy();
    };
  });
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>

<SafeAreas />

{#if firebase.isLoading}
  <div class="h-svh w-svw grid place-items-center">
  <Loader2 class="h-4 w-4 animate-spin" />
</div>

{:else if firebase.user}
  <div class="z-10 pointer-events-none fixed bottom-8 right-8">
    <PublishingStatus />
  </div>

  <!-- main page with toolbar -->
  <div
    class="h-screen w-screen grid relative pl-[var(--safe-area-left)] pr-[var(--safe-area-right)]"
  >
    <ScrollArea type="always">
      <div class="max-w-[1200px] m-auto pt-[var(--safe-area-top)]">
        {@render children?.()}
      </div>
      <div class="h-24 pb-[var(--safe-area-bottom)]"></div>
    </ScrollArea>
    <Toolbar class="flex-row fixed left-1/2 -translate-x-1/2 bottom-5 z-20" />
  </div>

  <!-- product editing sheet -->
  <Sheet.Root
    open={productSheetOpen}
    onOpenChange={(open) => {
      if (!open) app.selectedProductId = "";
    }}
  >
    <Sheet.Content
      class="pl-0 pr-[var(--safe-area-right)] pt-[var(--safe-area-top)] pb-[var(--safe-area-bottom)]"
      hideCloseButton
    >
      <ScrollArea class="h-full" type="scroll">
        <Product productId={app.selectedProductId} class="p-6" />
      </ScrollArea>
    </Sheet.Content>
  </Sheet.Root>
{:else}
  {@render children?.()}
{/if}
