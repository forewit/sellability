<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import { dragHandleZone, dragHandle } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { cn } from "$lib/utils";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import Stars from "$lib/components/ratings/stars.svelte";
  import { base } from "$app/paths";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Trash2, Plus, GripVertical } from "lucide-svelte";
  import Time from "$lib/components/ui/time.svelte";

  let { productId = "", class: className = "" }: { productId?: string; class?: string } = $props();

  const app = getAppContext();

  let timeOption = $state("time");
  let product = $derived(app.products.find((p) => p.id == productId));
  let nameInputRef: HTMLInputElement | null = $state(null);

  function addOtherExpense() {
    if (!product) return;
    app.newExpense(product.id);
  }

  function addOtherTime() {
    if (!product) return;
    app.newTime(product.id);
  }

  function handleDndConsiderExpenses(e: CustomEvent) {
    if (!product) return;
    product.expenses = e.detail.items;
  }
  function handleDndFinalizeExpenses(e: CustomEvent) {
    if (!product) return;
    product.expenses = e.detail.items;
  }

  function handleDndConsiderTime(e: CustomEvent) {
    if (!product) return;
    product.time = e.detail.items;
  }
  function handleDndFinalizeTime(e: CustomEvent) {
    if (!product) return;
    product.time = e.detail.items;
  }

  $effect(() => {
    if (nameInputRef && product && !product.name) {
      nameInputRef.select();
    }
  });
</script>

<div class={cn("h-full grid grid-rows-[auto,1fr,auto] ", className)}>
  {#if product !== undefined}
    <Card.Header class="p-0">
      <Card.Title class="flex items-center gap-2">
        <img src={product.url || `${base}/images/cube.png`} class="w-8" alt={product.name} />
        <Input
          bind:ref={nameInputRef}
          placeholder="Product Name"
          class="py-5 text-xl md:text-xl"
          bind:value={product.name}
        />
      </Card.Title>
    </Card.Header>

    <Card.Content class="flex flex-col gap-4 px-0">
      <div class="flex gap-4 place-self-end items-center">
        <Label>Profitability</Label>
        <Stars size={3} value={app.productData[product.id].profitability} disabled class="mr-2" />
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
                <Input
                  id="price"
                  type="number"
                  inputmode="decimal"
                  bind:value={product.price}
                  placeholder="0"
                />
              </div>
              <!-- <div class="flex flex-col gap-2">
                <Label for="image">Image</Label>
                <Input onchange={handleImageChange} id="image" type="file" accept="image/*" />
              </div> -->
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
          <Accordion.Content class="py-2 px-0">
            {#if product.expenses.length > 0}
              <div class="flex flex-col gap-4">
                <section
                  use:dragHandleZone={{
                    items: product.expenses,
                    flipDurationMs: 200,
                    type: "expenses",
                    dropTargetStyle: {},
                  }}
                  onconsider={handleDndConsiderExpenses}
                  onfinalize={handleDndFinalizeExpenses}
                  class="flex flex-col gap-2 mb-4"
                >
                  {#each product.expenses as expense, i (expense.id)}
                    <div
                      animate:flip={{ duration: 200 }}
                      class="grid grid-cols-[auto,1fr,auto,auto] gap-2 items-center"
                    >
                      <div use:dragHandle>
                        <GripVertical size={16} class="opacity-30" />
                      </div>
                      <Input class="" bind:value={expense.name} placeholder="Expense name" />
                      <Input
                        class="text-right w-24"
                        type="number"
                        inputmode="decimal"
                        min="0"
                        bind:value={expense.value}
                      />
                      <Button
                        variant="ghost"
                        class="p-2 opacity-30 hover:opacity-100"
                        onclick={() => product.expenses.splice(i, 1)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  {/each}
                </section>
              </div>
              {/if}
              <div class="flex justify-end">
                  <Button size="sm" onclick={addOtherExpense}>
                    <Plus />Add Expense
                  </Button>
                </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="time">
          <Accordion.Trigger class="gap-4">
            Time
            <div class="grow"></div>
            <Time value={app.productData[product.id].time} disabled />
          </Accordion.Trigger>
          <Accordion.Content class="px-0 py-2">
            {#if product.time.length > 0}
            <div class="flex flex-col gap-4">
              <section
                use:dragHandleZone={{
                  items: product.time,
                  flipDurationMs: 200,
                  type: "time",
                  dropTargetStyle: {},
                }}
                onconsider={handleDndConsiderTime}
                onfinalize={handleDndFinalizeTime}
                class="flex flex-col gap-2 mb-4"
              >
                {#each product.time as time, i (time.id)}
                  <div
                    animate:flip={{ duration: 200 }}
                    class="grid grid-cols-[auto,1fr,auto,auto] gap-2 items-center"
                  >
                    <div use:dragHandle>
                      <GripVertical size={16} class="opacity-30" />
                    </div>
                    <Input bind:value={time.name} placeholder="Time name" />
                    {#if timeOption == "rating"}
                      <Stars size={3} class="px-4" bind:value={time.rating} />
                    {:else}
                      <Time class="" bind:value={time.value} />
                    {/if}
                    <Button
                      variant="ghost"
                      class="p-2 opacity-30 hover:opacity-100"
                      onclick={() => product.time.splice(i, 1)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                {/each}
              </section>
              
            </div>
            {/if}
            <div class="flex gap-4 justify-between">
                <Tabs.Root bind:value={timeOption}>
                  <Tabs.List>
                    <Tabs.Trigger value="time">Time</Tabs.Trigger>
                    <Tabs.Trigger value="rating">Rating</Tabs.Trigger>
                  </Tabs.List>
                </Tabs.Root>
                <Button size="sm" onclick={addOtherTime}>
                  <Plus />Add Time
                </Button>
              </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Card.Content>

    <!-- Footer -->
    <Card.Footer class="justify-between p-0">
      <Button variant="outline" onclick={() => (app.selectedProductId = "")}>Close</Button>
      <!-- <Dialog.Root>
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
      </Dialog.Root> -->
    </Card.Footer>
  {:else}
    <div class="py-12 text-center p-4"></div>
  {/if}
</div>
