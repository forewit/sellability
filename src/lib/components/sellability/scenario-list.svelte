<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";
  import { Plus, Rocket } from "lucide-svelte";

  let {class: className = ""} = $props()

  const app = getAppContext();
</script>

<div class="flex flex-wrap gap-4">
  {#each app.scenarios as scenario}
    <Button variant="outline" class={cn(app.selectedScenarioId == scenario.id && "ring-2 ring-primary ring-offset-2")} onclick={() => (app.selectedScenarioId = scenario.id)}>
      <Rocket />
      {scenario.name}
    </Button>
  {/each}

  <Button onclick={() => (app.selectedScenarioId = app.newScenario())}>
    <Plus />
    New Scenario
  </Button>
</div>
