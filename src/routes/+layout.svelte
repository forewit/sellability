<script lang="ts">
  import { getAppContext } from "$lib/state/app.svelte";
  import "../app.css";
  let { children } = $props();

  const app = getAppContext();
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>

{@render children?.()}

