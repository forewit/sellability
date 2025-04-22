<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";

  let { class: className = "" } = $props();

  const app = getAppContext();
</script>

<Card.Root class={cn("min-w-[300px]", className)}>
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/pie.png" class="w-8" alt="goals icon" />
      Goals
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-4">
    <div>
      <Label>Desired monthly profit ($)</Label>
      <!-- <Input type="number" bind:value={app.monthlyProfitGoal} placeholder="0" /> -->
    </div>

    <div>
      <Label>Weekly Time Goals (hrs/wk)</Label>

      <div class="flex flex-col gap-8 mt-4">
        <Slider
            class="[&>span:nth-child(3)]:bg-green-300 [&>span:nth-child(3)]:w-2 [&>span:nth-child(3)]:h-6"
            type="multiple"
            bind:value={app.weeklyLaborGoals}
            max={app.MAX_WEEKLY_HOURS}
            min={0}
            step={1}
          />
        <div class="flex justify-between items-center">
          
          <div class="relative">
            <Input
              type="number"
              id="min-input"
              bind:value={app.weeklyLaborGoals[0]}
              class="w-20"
              placeholder="Min"
              max={app.weeklyLaborGoals[2]}
              min={0}
              step={1}
            />
            <Label
              for="min-input"
              class="text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
              >Min</Label
            >
          </div>

          <div class="relative">
            <Input
              id="max-input"
              type="number"
              bind:value={app.weeklyLaborGoals[2]}
              class="w-20"
              max={app.MAX_WEEKLY_HOURS}
              min={app.weeklyLaborGoals[0]}
              step={1}
            />
            <Label
              for="max-input"
              class="text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
              >Max</Label
            >
          </div>

          <div class="relative">
            <Input
              id="target-input"
              type="number"
              min={app.weeklyLaborGoals[0]}
              max={app.weeklyLaborGoals[2]}
              bind:value={app.weeklyLaborGoals[1]}
              class="w-20 border-green-600 text-green-600"
            />
            <Label
              for="target-input"
              class="text-green-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
              >Target</Label
            >
          </div>
        </div>
          
      </div>
    </div>
  </Card.Content>
</Card.Root>
