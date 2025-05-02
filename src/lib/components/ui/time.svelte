<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";
  import { RotateCcw } from "lucide-svelte";

  let { value = $bindable(0), class: className = "", increment = 5, disabled = false } = $props();

  let hours = $derived(Math.floor(value / 60));
  let minutes = $derived(value % 60);
</script>

{#if disabled}
  <div class={cn("flex gap-3 justify-end", className)}>
    {#if hours > 0}
      <p>{hours} {hours == 1 ? "hr" : "hrs"}</p>
    {/if}
    {#if minutes > 0 || (minutes <= 0 && hours <=0)}
      <p>{minutes} min</p>
    {/if}
  </div>
{:else}
  <div class={cn("flex items-center gap-1", className)}>
    <Button
      onclick={() => (hours = minutes = 0)}
      variant="ghost"
      class="hover:bg-transparent w-8 h-8 -mr-1 opacity-30"><RotateCcw /></Button
    >
    <Button
      class="w-16"
      variant="outline"
      onclick={() => (value += 60)}
      oncontextmenu={(e) => {
        if (hours > 0) value -= 60;
        e.stopPropagation();
        e.preventDefault();
      }}>{hours} hrs</Button
    >
    <Button
      class="w-16"
      variant="outline"
      onclick={() => {
        if (minutes + increment >= 60) {
          value -= minutes;
        } else {
          value += increment;
        }
      }}
      oncontextmenu={(e) => {
        if (minutes - increment < 0) {
          value += 60 - increment;
        } else {
          value -= increment;
        }
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {minutes} min
    </Button>
  </div>
{/if}
