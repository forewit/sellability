<script lang="ts">
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Toggle } from "$lib/components/ui/toggle/index.js";
  import { Settings, CircleUser } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { getAppContext } from "./app.svelte";
  import { base } from "$app/paths";
  import Button from "../ui/button/button.svelte";

  const app = getAppContext();

  let { class: className = "" } = $props();
</script>

<Card.Root class={cn("p-2 h-min max-w-16 flex flex-col gap-1", className)}>
  <Toggle>
    <img src={`${base}/images/cube.png`} class="w-6 min-w-6 aspect-square" alt="products" />
  </Toggle>
  <Toggle>
    <img src={`${base}/images/pie.png`} class="w-6 min-w-6 aspect-square" alt="products" />
  </Toggle>
  <Toggle>
    <img src={`${base}/images/rocket.png`} class="w-6 min-w-6 aspect-square" alt="products" />
  </Toggle>
  <Separator class="my-2"/>
  <div>
    <Button variant="ghost">
        <Settings/>
    </Button>
    <Button variant="ghost">
        <CircleUser/>
    </Button>
  </div>
    
</Card.Root>
