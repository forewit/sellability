<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Scenario from "$lib/components/app/scenario.svelte";
  import { base } from "$app/paths";
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>


<div class="grid md:grid-cols-[1fr,3fr] gap-8 p-6">
  <Card.Root class="h-min">
    <Card.Content>
      <Goals class="max-w-[250px]" />
    </Card.Content>
  </Card.Root>

  <Card.Root class="h-min">
    <Card.Content>
      <Scenario />
    </Card.Content>
  </Card.Root>
</div>
<div class="grid md:grid-cols-[1fr,1fr] gap-8 p-6">
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
