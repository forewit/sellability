<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import type { ChartData } from "./diverging-bar-chart.svelte";
  import Chart from "./diverging-bar-chart.svelte";

  let { class: className = "", timeData = [] }: { class?: string; timeData?: ChartData } = $props(); // Added timeData back to destructuring

  const app = getAppContext();
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex items-center gap-2">
      <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
      Time
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">
    <Chart data={timeData}></Chart>
  </Card.Content>
</div>
