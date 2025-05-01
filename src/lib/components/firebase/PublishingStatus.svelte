<script lang="ts">
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { CheckCheck } from "lucide-svelte";

  const firebase = getFirebaseContext();
</script>

{#if !firebase.isLoading}
  {#if firebase.isPublishing}
    <div class="flex items-center justify-center w-6 h-6">
      <span class="w-[90%] aspect-square rounded-full border-2 border-transparent border-r-current animate-spin"></span>
    </div>
  {:else}
    <CheckCheck size="1.2em" />
  {/if}
{/if}