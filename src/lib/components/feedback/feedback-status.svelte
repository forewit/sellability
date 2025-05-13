<script lang="ts">
  import { getAppContext, type Feedback } from "$lib/app/app.svelte";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  import { cn } from "$lib/utils";
  import { Frown, Meh, Laugh, MessageCircle, EllipsisVertical, Info, Trash2 } from "lucide-svelte";
  import Button from "../ui/button/button.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import Label from "../ui/label/label.svelte";

  let { class: className = "", data }: { class?: string; data: Feedback } = $props();

const app = getAppContext();
</script>

<div class={cn("p-4 rounded-lg border", className)}>
  <div class="flex items-center gap-4 pr-2">

    <Popover.Root>
      <Popover.Trigger>
        <Trash2 class="size-4 stroke-muted-foreground" />
      </Popover.Trigger>
      <Popover.Content class="w-min p-0">
        <Button variant="link" onclick={() => {app.deleteFeedback(data.id)}}>Delete</Button>
      </Popover.Content>
    </Popover.Root>
    <div class="grow">
      <h1 class="grow mb-1 font-medium leading-none tracking-tight">{data.summary}</h1>
      <p class="text-sm">{data.description}</p>
    </div>  
    {#if data.sentiment === 1}
      <Frown class="size-5 min-w-5 min-h-5 stroke-red-500" />
    {:else if data.sentiment === 2}
      <Meh class="size-5 min-w-5 min-h-5 stroke-yellow-600" />
    {:else if data.sentiment === 3}
      <Laugh class="size-5 min-w-5 min-h-5 stroke-green-500" />
    {/if}

    {#if data.status === "under-review"}
      <div
        class="select-none text-nowrap rounded-full py-0.5 px-3 font-medium text-sm text-purple-800 bg-purple-200/80 shadow h-min"
      >
        Under Review
      </div>
    {:else if data.status === "closed"}
      <div
        class="select-none text-nowrap rounded-full py-0.5 px-3 font-medium text-sm text-green-800 bg-green-200/80 shadow h-min"
      >
        Closed
      </div>
    {/if}
  </div>
</div>
