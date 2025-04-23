<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Scenario from "$lib/components/app/scenario.svelte";
  import { base } from "$app/paths";
</script>

<Card.Root class="h-min m-3">
  <Card.Content>
    <Scenario />
  </Card.Content>
</Card.Root>

<div class="grid md:grid-cols-[auto,1fr,1fr] gap-3 p-3">
  <Card.Root class="h-min">
    <Card.Content>
      <Goals class="" />
    </Card.Content>
  </Card.Root>

  <Card.Root class="h-min">
    <Card.Header>
      <Card.Title class="flex items-center gap-2">
        <img src={`${base}/images/pie2.png`} class="w-8" alt="" />
        Time
      </Card.Title>
    </Card.Header>
    <Card.Content></Card.Content>
  </Card.Root>

  <Card.Root class="h-min">
    <Card.Header>
      <Card.Title class="flex items-center gap-2">
        <img src={`${base}/images/profit.png`} class="w-8" alt="" />
        Profit
      </Card.Title>
    </Card.Header>
    <Card.Content></Card.Content>
  </Card.Root>
</div>
