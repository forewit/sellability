<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Report from "$lib/components/app/report.svelte";
</script>

<Card.Root class="inset-2 absolute">
  <Card.Content>
    <div class="grid md:grid-cols-[1fr,2fr] gap-8">
      <Goals class="max-w-[250px]"/>
      <Report />
    </div>
  </Card.Content>
</Card.Root>
