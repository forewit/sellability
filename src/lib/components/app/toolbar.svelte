<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import { Settings, CircleUser } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { base } from "$app/paths";
  import Button from "../ui/button/button.svelte";
  let { class: className = "" } = $props();
</script>

<div class={cn("p-2 h-min flex  gap-1 bg-background rounded-lg shadow-lg", className)}>
  <a href="{base}/">
    <Button class={cn("px-2.5", page.url.pathname === `${base}/` && "bg-muted")} variant="ghost">
      <img src={`${base}/images/cube.png`} class="w-6 min-w-6 aspect-square" alt="products" />
    </Button>
  </a>
  <a href="{base}/reports/">
    <Button
      class={cn("px-2.5", page.url.pathname === `${base}/reports/` && "bg-muted")}
      variant="ghost"
    >
      <img src={`${base}/images/pie.png`} class="w-6 min-w-6 aspect-square" alt="products" />
    </Button>
  </a>
  <!-- <Separator class="my-2" orientation="vertical" />
  <Button class="px-2.5" variant="ghost">
    <Settings />
  </Button>
  <Button class="px-2.5" variant="ghost">
    <CircleUser />
  </Button> -->
</div>
