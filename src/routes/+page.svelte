<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import Plus from "lucide-svelte/icons/plus";
  import Trash from "lucide-svelte/icons/trash-2";

  let expenses = $state([
    { name: "Materials", value: "" },
    { name: "Labor", value: "" },
  ]);

  let otherExpense = $state("");

  const addOtherExpense = () => {
    expenses.push({ name: otherExpense, value: "" });
    otherExpense = "";
  };
</script>

<div class="h-screen w-full">
  <Resizable.PaneGroup direction="horizontal">
    <Resizable.Pane>
      <Card.Root class="m-2 mr-1">
        <Card.Header>
          <Card.Title class="flex gap-2 place-items-center">
            <img src="/images/cube.png" class="w-8" alt="product icon" />
            Details
          </Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col gap-2">
          <div>
            <Label for="image">Image</Label>
            <Input id="image" type="file" />
          </div>
          <div>
            <Label for="name">Name</Label>
            <Input id="name" placeholder="Name" />
          </div>
          <div>
            <Label for="details">Description</Label>
            <Textarea id="details" placeholder="Enter details here..." />
          </div>

          {#each expenses as expense, i}
            <div>
              <Label for={expense.name + i} class="justify-self-start w-full">{expense.name}</Label>
              <div class="grid grid-cols-[1fr,auto] gap-2 items-center">
                <Input id={expense.name + i} bind:value={expense.value} />
                <Button
                  variant="ghost"
                  class="p-2 h-min justify-self-end opacity-20 hover:opacity-100"
                  onclick={() => expenses.splice(i, 1)}
                >
                  <Trash />
                </Button>
              </div>
            </div>
          {/each}
          <div>
            <Label for="add-expense">Add Expense</Label>
            <form class="grid grid-cols-[8rem,auto,1fr]">
              <Input placeholder="Other" bind:value={otherExpense} />

              <Button
                variant="ghost"
                onclick={addOtherExpense}
                disabled={otherExpense.length === 0}
                type="submit"
              >
                <Plus />
              </Button>
            </form>
          </div>
        </Card.Content>

        <Card.Footer>
          <Button>Submit</Button>
        </Card.Footer>
      </Card.Root>
    </Resizable.Pane>
    <Resizable.Handle class="bg-transparent" />
    <Resizable.Pane>
      <Card.Root class="m-2 ml-1">
        <Card.Header>
          <Card.Title class="flex gap-2 place-items-center">
            <img src="/images/pie.png" class="w-8" alt="product icon" />
            Goals
          </Card.Title>
        </Card.Header>
        <Card.Content>
          <p>Info about your goals!</p>
        </Card.Content>
        <Card.Footer>
          <Button>Submit</Button>
        </Card.Footer>
      </Card.Root>
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
