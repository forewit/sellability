<script lang="ts">
  import Input from "$lib/components/ui/input/input.svelte";
  import Sentiment from "$lib/components/ratings/sentiment.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { getAppContext } from "$lib/app/app.svelte";

  const app = getAppContext();

  let summary = $state("");
  let description = $state("");
  let sentiment = $state(0);

  function onsubmit(event: Event) {
    event.preventDefault();

    if (summary && description) {
      app.newFeedback({
        summary,
        description,
        sentiment,
        status: "new",
      });

      summary = "";
      description = "";
      sentiment = 0;
    }
  }
</script>

<form class="flex flex-col gap-4" {onsubmit}>
  <Input placeholder="Summary" bind:value={summary} required />
  <Textarea placeholder="Description" bind:value={description} required />
  <div class="flex justify-between">
    <Sentiment bind:value={sentiment} />
    <Button type="submit" class="w-min">Submit</Button>
  </div>
</form>
