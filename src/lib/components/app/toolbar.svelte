<script lang="ts">
    import { cn } from "$lib/utils";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Toggle } from "$lib/components/ui/toggle/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Plus, ChartLine } from "lucide-svelte";
    import { getAppContext } from "./app.svelte";
  
    const app = getAppContext();
  
    let { class: className = "" } = $props(); 
  </script>
  
  <Card.Root class={cn("p-2 h-min",className)}>
      <Toggle bind:pressed={app.evaluateMode}><ChartLine /></Toggle>
  </Card.Root>
  