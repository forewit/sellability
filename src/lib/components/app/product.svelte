<script lang="ts">
  import { getAppContext, type Product } from "$lib/components/app/app.svelte";
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import Stars from "$lib/components/custom/stars.svelte";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Trash2, Plus } from "lucide-svelte";
  import Slider from "$lib/components/ui/slider/slider.svelte";
  import Heart from "$lib/components/custom/heart.svelte";

  let { product, class: className = "" }: { product?: Product; class?: string } = $props();

  const app = getAppContext();

  let otherExpense = $state("");
  function addOtherExpense() {
    product?.expenses.push({ name: otherExpense, value: 0 });
    otherExpense = "";
  }

  let otherTime = $state("");
  function addOtherTime() {
    product?.time.push({ name: otherTime, value: 0, rating: 0 });
    otherTime = "";
  }

  function handleImageChange(event: Event) {
    if (!product) return;

    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      // revoke old URL if there was one
      if (product.url) URL.revokeObjectURL(product.url);
      product.url = URL.createObjectURL(file);
    }
  }
</script>

<div class={cn("h-full grid grid-rows-[auto,1fr,auto] ", className)}>
  {#if product !== undefined}
    <Card.Header class="p-0">
      <Card.Title class="flex items-center gap-2">
        <img src={product.url || `${base}/images/cube.png`} class="w-8" alt={product.name} />
        <Input
          placeholder="Product Name"
          class="py-5 text-xl md:text-xl"
          bind:value={product.name}
        />
      </Card.Title>
    </Card.Header>

    <Card.Content class="flex flex-col gap-4 px-0">
      <div class="flex gap-4 place-self-end">
        <Label>Profitability</Label>
        <Stars size={3} bind:value={product.profitability} class="mr-2" />
      </div>

      <Accordion.Root type="single">
        <Accordion.Item value="details">
          <Accordion.Trigger class="gap-4">
            Details

            <div class="grow"></div>
            ${product.price}
          </Accordion.Trigger>
          <Accordion.Content class="p-2">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <Label for="price">Sell Price ($)</Label>
                <Input id="price" type="number" bind:value={product.price} placeholder="0" />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="image">Image</Label>
                <Input onchange={handleImageChange} id="image" type="file" accept="image/*" />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="details">Description</Label>
                <Textarea
                  id="details"
                  placeholder="Enter details here..."
                  bind:value={product.description}
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="expenses">
          <Accordion.Trigger class="gap-4">
            Expenses
            <div class="grow"></div>
            ${app.productData[product.id].expenses}
          </Accordion.Trigger>
          <Accordion.Content class="p-2">
            <div class="flex flex-col gap-2">
              {#each product.expenses as expense, i}
                <div class="flex flex-col gap-2">
                  <Label>{expense.name}</Label>
                  <div class="grid grid-cols-[1fr,auto] gap-2 items-center">
                    <Input type="number" inputmode="decimal" min="0" bind:value={expense.value} />
                    <Button
                      variant="ghost"
                      class="p-2 opacity-30 hover:opacity-100"
                      onclick={() => product.expenses.splice(i, 1)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              {/each}
              <div class="w-[200px] pt-2 place-self-end">
                <form class="grid grid-cols-[1fr,auto] gap-2 items-center">
                  <Input id="add-expense" placeholder="Add expense" bind:value={otherExpense} />
                  <Button
                    variant="ghost"
                    onclick={addOtherExpense}
                    class="p-2"
                    disabled={otherExpense.length === 0}
                    type="submit"
                  >
                    <Plus />
                  </Button>
                </form>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="time">
          <Accordion.Trigger class="gap-4">
            Time
            <div class="grow"></div>
            {app.productData[product.id].time} hrs
          </Accordion.Trigger>
          <Accordion.Content class="p-2">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                {#each product.time as time, i}
                  <div class="flex flex-col gap-2">
                    <Label>{time.name}</Label>
                    <div class="grid grid-cols-[auto,1fr,auto] gap-2 items-center">
                      <Stars size={3} bind:value={time.rating} />
                      <Input type="number" inputmode="decimal" min="0" bind:value={time.value} />
                      <Button
                        variant="ghost"
                        class="p-2 opacity-30 hover:opacity-100"
                        onclick={() => product.time.splice(i, 1)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                {/each}
                <div class="w-[200px] pt-2 place-self-end">
                  <form class="grid grid-cols-[1fr,auto] gap-2 items-center">
                    <Input id="add-time" placeholder="Add time" bind:value={otherTime} />
                    <Button
                      variant="ghost"
                      onclick={addOtherTime}
                      class="p-2"
                      disabled={otherTime.length === 0}
                      type="submit"
                    >
                      <Plus />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Card.Content>

    <!-- Footer -->
    <Card.Footer class="justify-between p-0">
      <Button variant="outline" onclick={() => (app.selectedProductId = "")}>Close</Button>
      <Dialog.Root>
        <Dialog.Trigger><Button variant="destructive">Delete</Button></Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
            <Dialog.Description>
              This action cannot be undone. This will permanently delete your product.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Button variant="destructive" onclick={() => app.deleteProduct(product.id)}
              >Yes, delete</Button
            >
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </Card.Footer>
  {:else}
    <div class="py-12 text-center p-4">Choose a product to edit</div>
  {/if}
</div>
