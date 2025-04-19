<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Sellability</title>
</svelte:head>
<div class="h-screen bg-red-50">
  {@render children?.()}
</div>



