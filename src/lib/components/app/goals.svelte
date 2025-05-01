<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { base } from "$app/paths";
  import { getAppContext } from "./app.svelte";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import Heart from "../custom/heart.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  let { class: className = "" } = $props();

  const app = getAppContext();

  let maxHoursPerDay = $state(16);
  let timespanDaysString = $state("5");
  let timespanDays = $derived(parseInt(timespanDaysString));
</script>

<div class={cn("flex flex-col gap-8", className)}>
  <div class="flex justify-center">
    <Tabs.Root bind:value={timespanDaysString}>
      <Tabs.List>
        <Tabs.Trigger value="1">Daily</Tabs.Trigger>
        <Tabs.Trigger value="5">Weekly</Tabs.Trigger>
        <Tabs.Trigger value="20">Monthly</Tabs.Trigger>
        <Tabs.Trigger value="240">Yearly</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </div>

  <div>
    <div class="font-medium text-lg text-center">
      Profit <span class="ml-2 text-sm font-normal">($ over {timespanDaysString} business days)</span>
    </div>
    <div class="flex gap-4 justify-center items-center mt-4">
      <div class="relative">
        <Input
          id="profit-target-input"
          type="number"
          inputmode="decimal"
          min={app.profitGoals[1]}
          bind:value={app.profitGoals[0]}
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
          inputmode="decimal"
          bind:value={app.profitGoals[1]}
          class="w-24 border-yellow-600 text-yellow-600"
          max={app.profitGoals[0]}
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

  <div class="flex flex-col gap-4">
    <div class="font-medium text-lg text-center">
      Time <span class="ml-2 text-sm font-normal"
        >(hours over {timespanDaysString} business days)</span
      >
    </div>
    <div class="flex gap-4 justify-center items-center">
      <div class="relative">
        <Input
          id="time-target-input"
          type="number"
          min={0}
          max={app.timeGoals[1]}
          inputmode="decimal"
          bind:value={app.timeGoals[0]}
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
          bind:value={app.timeGoals[1]}
          inputmode="decimal"
          class="w-24 border-yellow-600 text-yellow-600"
          max={80}
          min={app.timeGoals[0]}
          step={1}
        />
        <Label
          for="time-max-input"
          class="text-yellow-600 text-xs p-1 bg-background absolute -top-3 left-1 rounded leading-none"
          >Max</Label
        >
      </div>
    </div>
    <Slider
      class={cn(
        "my-4",
        "[&>span>span]:bg-gradient-to-r [&>span>span]:from-green-500 [&>span>span]:to-yellow-400",
        "[&>span:nth-child(2)]:bg-green-500 [&>span:nth-child(2)]:w-4 [&>span:nth-child(2)]:h-8 [&>span:nth-child(2)]:border",
        "[&>span:nth-child(3)]:bg-yellow-400 [&>span:nth-child(3)]:w-4 [&>span:nth-child(3)]:h-6 [&>span:nth-child(3)]:border"
      )}
      type="multiple"
      bind:value={app.timeGoals}
      inputmode="decimal"
      max={timespanDays * maxHoursPerDay}
      min={0}
      step={1}
    />
    
  </div>
</div>
