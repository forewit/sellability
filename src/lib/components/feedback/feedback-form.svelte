<script lang="ts">
  import Input from "$lib/components/ui/input/input.svelte";
  import Sentiment from "$lib/components/ratings/sentiment.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { getAppContext } from "$lib/app/app.svelte";
  import { cn } from "$lib/utils";

  const app = getAppContext();

  let { class: className = "", onsubmit: submitCallback = () => {} } = $props();

  let summary = $state("");
  let description = $state("");
  let sentiment = $state(0);

  function onsubmit(e: SubmitEvent) {
    app.newFeedback({
      summary,
      description,
      sentiment,
      status: "under-review",
    });

    summary = "";
    description = "";
    sentiment = 0;

    submitCallback(e);
  }
</script>

<form class={cn("flex flex-col gap-4", className)} {onsubmit}>
  <Input placeholder="Summary" bind:value={summary} required />
  <Textarea placeholder="Description" bind:value={description} required />
  <div class="flex justify-between">
    <Sentiment bind:value={sentiment} />
    <Button type="submit" class="w-min">Submit</Button>
  </div>
</form>
