<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { base } from "$app/paths";
  import * as Card from "$lib/components/ui/card/index.js";

  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { LogOut, Home, Sun, Moon, MessageCircleDashed } from "lucide-svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { resetMode, setMode } from "mode-watcher";
  import Label from "$lib/components/ui/label/label.svelte";
  import FeedbackList from "$lib/components/feedback/feedback-list.svelte";
  import FeedbackButton from "$lib/components/feedback/feedback-button.svelte";
  import Switch from "$lib/components/ui/switch/switch.svelte";

  const firebase = getFirebaseContext();
  const app = getAppContext();
</script>

<Card.Root class="m-3 h-min">
  <Card.Header class="flex flex-row justify-between items-center">
    <Card.Title class="flex gap-3 items-center text-nowrap">
      <img src="{base}/images/profile.png" class="w-8" alt="profile icon" />
      {app.settings.username ? "Hi, " + app.settings.username : "Welcome!"}
    </Card.Title>
    {#if app.settings.feedbackEnabled}
    <FeedbackButton variant="ghost" align="end" sideOffset={10} class="h-min -my-2"/>
    {/if}
  </Card.Header>
  <Card.Content class="grid md:grid-cols-2 grid-flow-row md:grid-flow-col gap-6">
    <div class="grid grid-cols-[100px,1fr] items-center gap-4 h-min">
      <Label>Email:</Label>
      <div>{firebase.user?.email}</div>

      <Label>Theme:</Label>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class={buttonVariants({ variant: "outline", size: "icon" })}>
          <Sun
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item>
          <DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
          <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Label for="username">Name:</Label>
      <Input
        id="username"
        bind:value={app.settings.username}
        class="w-full sm:w-64"
        placeholder="Your name"
      />

      <Label for="feedback-button" class="text-nowrap">Feedback:</Label>
      <Switch id="feedback-button" bind:checked={app.settings.feedbackEnabled} />

      <Button
        class="mt-4 col-span-2 place-self-start"
        variant="destructive"
        onclick={firebase.logout}
        size="sm"
      >
        <LogOut class="h-4 w-4" />
        Logout
      </Button>
    </div>

    {#if app.feedbackList.length > 0 && app.settings.feedbackEnabled}
      <FeedbackList class="w-full" bind:feedbackList={app.feedbackList} />
    {/if}
  </Card.Content>
</Card.Root>