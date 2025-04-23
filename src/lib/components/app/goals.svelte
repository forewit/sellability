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
<div class={cn("min-w-[200px]", className)}>
  <Card.Header class="p-0">
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/pie.png" class="w-8" alt="goals icon" />
      Goals
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col gap-8 px-0 pb-0">
    <div>
      <Label>Profit ($ / month)</Label>
      <div class="flex justify-between items-center mt-4">
        <div class="relative">
          <Input
            id="profit-target-input"
            type="number"
            min={app.monthlyProfitGoal[1]}
            bind:value={app.monthlyProfitGoal[0]}
            class="w-24 border-green-600 text-green-600"
          />
          <Label
            for="profit-target-input"
            class="text-green-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
            >Target</Label
          >
        </div>
        <div class="relative">
          <Input
            id="profit-min-input"
            type="number"
            bind:value={app.monthlyProfitGoal[1]}
            class="w-24 border-yellow-600 text-yellow-600"
            max={app.monthlyProfitGoal[0]}
            min={0}
            step={1}
          />
          <Label
            for="profit-min-input"
            class="text-yellow-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
            >Min</Label
          >
        </div>
      </div>
    </div>

    <div>
      <Label>Time (hours / week)</Label>

      <div class="flex flex-col gap-8 mt-4">
        <Slider
          class={cn(
            "[&>span>span]:bg-gradient-to-r [&>span>span]:from-green-500 [&>span>span]:to-yellow-400",
            "[&>span:nth-child(2)]:bg-green-500 [&>span:nth-child(2)]:w-1.5 [&>span:nth-child(2)]:h-6 [&>span:nth-child(2)]:border",
            "[&>span:nth-child(3)]:bg-yellow-400 [&>span:nth-child(3)]:w-1.5 [&>span:nth-child(3)]:h-4 [&>span:nth-child(3)]:border"
          )}
          type="multiple"
          bind:value={app.weeklyLaborGoals}
          max={app.MAX_WEEKLY_HOURS}
          min={0}
          step={1}
        />
        <div class="flex justify-between items-center">
          <div class="relative">
            <Input
              id="time-target-input"
              type="number"
              min={0}
              max={app.weeklyLaborGoals[1]}
              bind:value={app.weeklyLaborGoals[0]}
              class="w-24 border-green-600 text-green-600"
            />
            <Label
              for="time-target-input"
              class="text-green-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
              >Target</Label
            >
          </div>
          <div class="relative">
            <Input
              id="time-max-input"
              type="number"
              bind:value={app.weeklyLaborGoals[1]}
              class="w-24 border-yellow-600 text-yellow-600"
              max={app.MAX_WEEKLY_HOURS}
              min={app.weeklyLaborGoals[0]}
              step={1}
            />
            <Label
              for="time-max-input"
              class="text-yellow-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
              >Max</Label
            >
          </div>
        </div>
      </div>
    </div>
  </Card.Content>
</div>
