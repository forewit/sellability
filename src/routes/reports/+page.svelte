<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Scenario from "$lib/components/app/scenario.svelte";
  import { base } from "$app/paths";
  import ScenarioTime from "$lib/components/app/scenario-time.svelte";
  import ScenarioProfit from "$lib/components/app/scenario-profit.svelte";
</script>

<Card.Root class="h-min m-3">
  <Card.Content>
    <Scenario />
  </Card.Content>
</Card.Root>

<div class="grid md:grid-cols-[auto,1fr,auto] gap-3 p-3">
  <Card.Root class="h-min">
    <Card.Content>
      <Goals class="" />
    </Card.Content>
  </Card.Root>

  <Card.Root class="h-min">

    <Card.Content>
      <ScenarioTime />
    </Card.Content>
  </Card.Root>

  <Card.Root class="h-min">
    <Card.Content>
      <ScenarioProfit />
    </Card.Content>
  </Card.Root>
</div>
