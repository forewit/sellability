<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import { Settings, CircleUser } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { base } from "$app/paths";
  import Button from "../ui/button/button.svelte";
  let { class: className = "" } = $props();
</script>

<div class={cn("p-2 h-min flex gap-1 bg-background rounded-lg  border shadow-sm", className)}>
  <Button
    href="{base}/"
    class={cn("h-12 w-14", page.url.pathname === `${base}/` && "bg-muted")}
    variant="ghost"
  >
    <img src={`${base}/images/cube.png`} class="w-8 min-w-8" alt="products" />
  </Button>
  <Button
    class={cn("h-12 w-14", page.url.pathname === `${base}/reports/` && "bg-muted")}
    href="{base}/reports/"
    variant="ghost"
  >
    <img src={`${base}/images/pie.png`} class="w-8 min-w-8" alt="products" />
  </Button>
  <!-- <Separator class="my-2" orientation="vertical" />
  <Button class="px-2.5" variant="ghost">
    <Settings />
  </Button>
  <Button class="px-2.5" variant="ghost">
    <CircleUser />
  </Button> -->
</div>
