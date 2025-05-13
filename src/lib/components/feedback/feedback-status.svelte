<script lang="ts">
  import type { Feedback } from "$lib/app/app.svelte";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { cn } from "$lib/utils";
  import { Terminal } from "lucide-svelte";
  import { Angry, Meh, Laugh, MessageCircle } from "lucide-svelte";

  let { class: className = "", data }: { class?: string; data: Feedback } = $props();
</script>

<Alert.Root
  class={cn(
    className
  )}
>
  {#if data.sentiment === 0}
    <MessageCircle class="size-4" />
  {:else if data.sentiment === 1}
    <Angry class="size-4 stroke-red-500" />
  {:else if data.sentiment === 2}
    <Meh class="size-4 stroke-yellow-600" />
  {:else if data.sentiment === 3}
    <Laugh class="size-4 stroke-green-500" />
  {/if}
  <Alert.Title>{data.summary}</Alert.Title>
  <Alert.Description>{data.description}</Alert.Description>
</Alert.Root>
