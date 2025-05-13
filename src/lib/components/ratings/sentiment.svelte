<script lang="ts">
  // credit: https://uiverse.io/amikambs/dangerous-impala-17
  import { cn } from "$lib/utils";
  import { Angry, Meh, Laugh } from "lucide-svelte";

  let { class: className = "", value = $bindable(0), disabled = false } = $props();
</script>

<form
  class={cn(
    "flex justify-center items-center px-3 gap-2 bg-muted  rounded-full",
    "focus-within:[&:has(:focus-visible)]:ring-ring focus-within:[&:has(:focus-visible)]:outline-none focus-within:[&:has(:focus-visible)]:ring-2 focus-within:[&:has(:focus-visible)]:ring-offset-4",
    className
  )}
>
  <label for="super-happy" class="relative group">
    <input
      type="radio"
      name="rating"
      id="super-happy"
      value={3}
      tabindex="0"
      class="absolute opacity-0 w-full h-full cursor-pointer peer"
      bind:group={value}
      onclick={() => {
        if (value == 3) value = 0;
      }}
      {disabled}
    />
    <Laugh
      class="opacity-30 peer-checked:opacity-100 group-hover:opacity-100 group-hover:stroke-green-500 peer-checked:stroke-green-500"
    />
  </label>

  <label for="neutral" class="relative group">
    <input
      type="radio"
      name="rating"
      id="neutral"
      value={2}
      class="absolute opacity-0 w-full h-full cursor-pointer peer"
      bind:group={value}
      onclick={() => {
        if (value == 2) value = 0;
      }}
      {disabled}
    />
    <Meh
      class="opacity-30 peer-checked:opacity-100 group-hover:opacity-100 group-hover:stroke-yellow-500 peer-checked:stroke-yellow-500"
    />
  </label>

  <label for="super-sad" class="relative group">
    <input
      type="radio"
      name="rating"
      id="super-sad"
      value={1}
      class="absolute opacity-0 w-full h-full cursor-pointer peer"
      bind:group={value}
      {disabled}
      onclick={() => {
        if (value == 1) value = 0;
      }}
    />
    <Angry
      class="opacity-30 peer-checked:opacity-100 group-hover:opacity-100 group-hover:stroke-red-500 peer-checked:stroke-red-500 "
    />
  </label>
</form>
