<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { base } from "$app/paths";
  import { getAppContext, type Goals, type Scenario } from "$lib/app/app.svelte";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import Heart from "../ratings/heart.svelte";
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  let { class: className = "", data: goals = $bindable()}: {class?: string, data: Goals} = $props();

  const app = getAppContext();

  let maxHoursPerDay = $state(16);
  let timespanDaysString = $state("5");

  function updateTimespan(days: string) {
    // update profit and time goals
    const oldDays = goals.timespanDays;
    const newDays = parseInt(days);
    const multiplier = newDays / oldDays;

    goals.time.targetHours *= multiplier;
    goals.time.maxHours *= multiplier;
    goals.profit.target *= multiplier;
    goals.profit.min *= multiplier;
    goals.timespanDays = newDays;
  }
</script>

<div class={cn("flex flex-col gap-8", className)}>
  <div class="flex justify-center">
    <Tabs.Root value={goals.timespanDays.toString()} onValueChange={updateTimespan}>
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
      Profit <span class="ml-2 text-sm font-normal"
        >($ over {timespanDaysString} business days)</span
      >
    </div>
    <div class="flex gap-4 justify-center items-center mt-4">
      <div class="relative">
        <Input
          id="profit-target-input"
          type="number"
          inputmode="decimal"
          min={goals.profit.min}
          bind:value={goals.profit.target}
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
          bind:value={goals.profit.min}
          class="w-24 border-yellow-600 text-yellow-600"
          max={goals.profit.target}
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
          max={goals.time.maxHours}
          inputmode="decimal"
          bind:value={goals.time.targetHours}
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
          bind:value={goals.time.maxHours}
          inputmode="decimal"
          class="w-24 border-yellow-600 text-yellow-600"
          max={goals.timespanDays * maxHoursPerDay}
          min={goals.time.targetHours}
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
      value={[goals.time.targetHours, goals.time.maxHours]}
      onValueChange={(detail) => {
        goals.time.targetHours = detail[0];
        goals.time.maxHours = detail[1];
      }}
      inputmode="decimal"
      max={goals.timespanDays * maxHoursPerDay}
      min={0}
      step={1}
    />
  </div>
</div>
