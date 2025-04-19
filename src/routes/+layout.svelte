<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>
<div class="fixed inset-0 bg-red-50 overflow-y-auto">
  {@render children?.()}
</div>



