<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";
  import type { Feedback } from "$lib/app/app.svelte";
  import FeedbackStatus from "./feedback-status.svelte";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { cn } from "$lib/utils";
  import { Angry, Laugh, Meh, MessageCircle, RotateCcw } from "lucide-svelte";
  import Button from "../ui/button/button.svelte";

  let {
    class: className,
    feedbackList = $bindable([]),
  }: { class?: string; feedbackList: Feedback[] } = $props();


  let filteredStatuses: ("new" | "in-progress" | "closed")[] = $state([]);
  let filteredSentiments: string[] = $state([]);


  let filteredFeebackList = $derived.by(()=>{
    return feedbackList.filter((feedback) => {
      if (filteredStatuses.length > 0 && !filteredStatuses.includes(feedback.status)) {
        return false;
      }
      if (filteredSentiments.length > 0 && !filteredSentiments.includes(feedback.sentiment.toString())) {
        return false;
      }
      return true;
    });
  });
</script>

<div class={cn("", className)}>
  <div class="flex gap-2 items-center">
    <Label class="pr-2 text-nowrap">Filter feedback by:</Label>
    <Select.Root type="multiple" bind:value={filteredStatuses} disabled={feedbackList.length === 0}>
      <Select.Trigger class="w-[140px]">Status {filteredStatuses.length > 0 ? `(${filteredStatuses.length})` : ""}</Select.Trigger>
      <Select.Content>
        <Select.Item value="new">
          <div
            class="rounded-full py-0.5 px-3 font-medium text-sm text-blue-800 bg-blue-200/80 shadow h-min"
          >
            Sent
          </div>
        </Select.Item>
        <Select.Item value="in-progress">
          <div
            class="rounded-full py-0.5 px-3 font-medium text-sm text-purple-800 bg-purple-200/80 shadow h-min"
          >
            Under Review
          </div>
        </Select.Item>
        <Select.Item value="closed">
          <div
            class="rounded-full py-0.5 px-3 font-medium text-sm text-green-800 bg-green-200/80 shadow h-min"
          >
            Closed
          </div>
        </Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root type="multiple" bind:value={filteredSentiments} disabled={feedbackList.length === 0}>
      <Select.Trigger class="w-[140px]">Sentiment {filteredSentiments.length > 0 ? `(${filteredSentiments.length})` : ""}</Select.Trigger>
      <Select.Content>
        <Select.Item value="0">
            <p>Not selected</p>
        </Select.Item>
        <Select.Item value="3">
          <Laugh class="size-5 stroke-green-500 mr-1" />
          <p class="text-green-500 font-medium">Positive</p>
        </Select.Item>
        <Select.Item value="2">
          <Meh class="size-5 stroke-yellow-600 mr-1" />
          <p class="text-yellow-600 font-medium">Neutral</p>
        </Select.Item>
        <Select.Item value="1">
          <Angry class="size-5 stroke-red-500 mr-1" />
          <p class="text-red-500 font-medium">Negative</p>
        </Select.Item>
      </Select.Content>
    </Select.Root>
    {#if filteredStatuses.length > 0 || filteredSentiments.length > 0}
    <Button onclick={() => {filteredStatuses = []; filteredSentiments = []}} variant="ghost">
        <RotateCcw class="size-5" />
        Reset
    </Button>
    {/if}
  </div>
  <div class="flex flex-col gap-3 mt-6">
    {#each filteredFeebackList as feedback}
      <FeedbackStatus data={feedback} />
    {/each}
    {#if filteredFeebackList.length === 0 && (filteredStatuses.length > 0 || filteredSentiments.length > 0)}
      <div class="flex items-center justify-center gap-2">
        <p class="text-muted-foreground">No results</p>
      </div>
    {/if}
  </div>
</div>