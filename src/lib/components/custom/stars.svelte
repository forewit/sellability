<script lang="ts">
  // credit: https://uiverse.io/amikambs/dangerous-impala-17
  import { cn } from "$lib/utils";

  let { class: className = "", value = $bindable(0) } = $props();
</script>

<div
  class={cn(
    "flex flex-row",
    "rounded ring-offset-background focus-within:[&:has(:focus-visible)]:ring-ring focus-within:[&:has(:focus-visible)]:outline-none focus-within:[&:has(:focus-visible)]:ring-2 focus-within:[&:has(:focus-visible)]:ring-offset-4",
    className
  )}
>
  {#each [1,2,3,4,5] as rating}
    <label title="text" class="cursor-pointer text-3xl"
      ><input
        class="appearance-none absolute peer"
        type="radio"
        tabindex="0"
        value={rating == value ? 0 : rating}
        bind:group={value}
      />
      <svg
        viewBox="0 0 576 512"
        height="0.5em"
        xmlns="http://www.w3.org/2000/svg"
        class={cn(
          "fill-gray-500 transition-colors duration-300",
          value >= rating && "fill-amber-500"
        )}
      >
        <path
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
        ></path>
      </svg>
    </label>
  {/each}
</div>
