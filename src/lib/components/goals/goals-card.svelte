<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { base } from "$app/paths";
  import { getGoalsContext } from "./goals.svelte";
  import { getInventoryContext } from "../inventory/inventory.svelte";

  const goals = getGoalsContext();
</script>

<Card.Root >
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/pie.png" class="w-8" alt="goals icon" />
      Goals
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-4">
    <div>
      <Label>Desired monthly profit ($)</Label>
      <Input type="number" bind:value={goals.monthlyProfit} placeholder="0" />
    </div>
    <div>
      <Label>Desired time per week (hrs)</Label>
      <Input type="number" bind:value={goals.weeklyLabor} placeholder="0" />
    </div>
  </Card.Content>
</Card.Root>
