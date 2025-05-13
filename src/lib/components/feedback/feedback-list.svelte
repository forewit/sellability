<script lang="ts">
  import type { Feedback } from "$lib/app/app.svelte";
  import FeedbackStatus from "./feedback-status.svelte";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { cn } from "$lib/utils";

  let { feedbackList = $bindable([]) }: { feedbackList: Feedback[] } = $props();

  let showArchived = $state(false);
</script>

<div class="p-4  rounded-lg">
  <div class="flex justify-between gap-4">
    <h1 class="text-2xl font-medium">Status</h1>
    <Label class={cn("flex items-center gap-2", !showArchived && "text-muted-foreground")}>
      show archived
      <Switch bind:checked={showArchived} />
    </Label>
  </div>

  <div class="flex flex-col gap-3 mt-6">
    {#each feedbackList as feedback}
    <FeedbackStatus data={feedback} />
  {/each}
  </div>
  
</div>
