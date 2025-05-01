<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Plus, Rocket } from "lucide-svelte";

  const app = getAppContext();
</script>

<div class="flex gap-4">
  {#each app.scenarios as scenario}
    <Button variant="outline" onclick={() => (app.selectedScenarioId = scenario.id)}>
      <Rocket />
      {scenario.name}
    </Button>
  {/each}

  <Button onclick={() => (app.selectedScenarioId = app.newScenario())}>
    <Plus />
    New Scenario
  </Button>
</div>
