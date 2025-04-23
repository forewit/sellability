<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Goals from "$lib/components/app/goals.svelte";
  import Report from "$lib/components/app/report.svelte";
</script>

    <div class="grid md:grid-cols-[1fr,3fr] gap-8 p-6">
      <Goals class="max-w-[250px]"/>
      <Report />
    </div>
