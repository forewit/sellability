<script lang="ts">
  import ProductTable from "$lib/components/app/product-table.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { base } from "$app/paths";
  import Button from "$lib/components/ui/button/button.svelte";
  import { getAppContext } from "$lib/components/app/app.svelte";
  import { Plus } from "lucide-svelte";

  const app = getAppContext();
</script>

<Card.Root class="h-min m-2">
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/cube.png" class="w-8" alt="goals icon" />
      Products
    </Card.Title>
  </Card.Header>
  <Card.Content>
    <ProductTable />
  </Card.Content>
  <Card.Footer>
    <Button onclick={app.newProduct}><Plus />New Product</Button>
  </Card.Footer>
</Card.Root>
