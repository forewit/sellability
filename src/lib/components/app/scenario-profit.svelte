<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";

  let { class: className = "" } = $props();

  const app = getAppContext();
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex items-center gap-2">
      <img src={`${base}/images/profit.png`} class="w-8" alt="" />
      Profit
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">Chart to come</Card.Content>
</div>
