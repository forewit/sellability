<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import type DataItem from "./chart.svelte";
  import  Chart from "./chart.svelte";


  let { class: className = "" } = $props();

  const app = getAppContext();

  let chartData: DataItem[] = $state([
    { value: 11, sentiment: 3, rating: 0 },
    { value: 2, sentiment: 2, rating: 0 },
    { value: 3, sentiment: 1, rating: 0 },
    { value: 4, sentiment: 0, rating: 0 },
    { value: 5, sentiment: 3, rating: 1 },
    { value: 6, sentiment: 2, rating: 1 },
    { value: 7, sentiment: 1, rating: 1 },
    { value: 8, sentiment: 0, rating: 1 },
    { value: 9, sentiment: 3, rating: 2 },
    { value: 10, sentiment: 2, rating: 2 },
    { value: 11, sentiment: 1, rating: 2 },
    { value: 12, sentiment: 0, rating: 2 },
    { value: 13, sentiment: 3, rating: 3 },
    { value: 14, sentiment: 2, rating: 3 },
    { value: 15, sentiment: 1, rating: 3 },
    { value: 16, sentiment: 0, rating: 3 },
  ]);
</script>

<div class={cn("", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex items-center gap-2">
      <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
      Time
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">
    <Chart data={chartData}></Chart>
  </Card.Content>
</div>
