<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import { CircleUser } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { base } from "$app/paths";
  import Button from "$lib/components/ui/button/button.svelte";
  import { getAppContext } from "$lib/app/app.svelte";
  import FeedbackButton from "../feedback/feedback-button.svelte";
  let { class: className = "" } = $props();

  const app = getAppContext();
</script>

<div
  class={cn(
    "p-2 h-min flex items-center gap-1 bg-background rounded-lg  border shadow-sm",
    className
  )}
>
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
    <img src={`${base}/images/rocket.png`} class="w-8 min-w-8" alt="products" />
  </Button>
  <Button
    class={cn("h-12 w-14", page.url.pathname === `${base}/profile/` && "bg-muted")}
    href="{base}/profile/"
    variant="ghost"
  >
    <img src={`${base}/images/profile.png`} class="w-8 min-w-8" alt="products" />
  </Button>
<!-- 
  {#if app.settings.feedbackEnabled}
    <div class="h-8 mx-2 w-[1px] bg-muted"></div>

    <FeedbackButton
      variant="ghost"
      side="top"
      size="sm"
      class="w-8 min-w-8 hover:bg-transparent"
      alignOffset={20}
      sideOffset={20}
    />
  {/if} -->
</div>
