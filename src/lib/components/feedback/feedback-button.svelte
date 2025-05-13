<script lang="ts">
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { MessageCircleDashed, MessageCirclePlus, MessageCircleWarning } from "lucide-svelte";
  import Button, { type ButtonProps } from "$lib/components/ui/button/button.svelte";
  import FeedbackForm from "./feedback-form.svelte";
  import { base } from "$app/paths";

  type FeedbackButtonProps = {
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    size?: "sm" | "default";
    sideOffset?: number;
    alignOffset?: number;
  } & Partial<ButtonProps>;

  let { side, align, size = "default", sideOffset = 0, alignOffset = 0, ...restProps }: FeedbackButtonProps = $props();
</script>

<Popover.Root>
  <Popover.Trigger>
    <Button {...restProps}
      ><MessageCirclePlus />
      {size == "sm" ? "" : "Send feedback"}
    </Button>
  </Popover.Trigger>
  <Popover.Content {side} {align} {sideOffset} {alignOffset} >
    <div class="flex items-center gap-2 text-lg font-medium pb-4">
      <MessageCirclePlus class="size-5" />
      Send feedback
    </div>

    <FeedbackForm /></Popover.Content
  >
</Popover.Root>
