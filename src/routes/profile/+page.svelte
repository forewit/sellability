<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { base } from "$app/paths";

  // Shadcn imports
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { LogOut, Home, Sun, Moon } from "lucide-svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Time from "$lib/components/ui/time.svelte";

  const firebase = getFirebaseContext();
  const app = getAppContext();
</script>

<Card.Root class="m-3">
  <Card.Header>
    <Card.Title class="flex gap-3 items-center">
      <img src="{base}/images/profile.png" class="w-8" alt="profile icon" />
      {app.settings.username ? "Hi, " + app.settings.username : "Welcome!"}
    </Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="grid grid-cols-[auto,1fr] items-center gap-6">


      <Label>Email:</Label>
      <div>{firebase.user?.email}</div>

      <Label>Theme:</Label>
      <Select.Root bind:value={app.settings.theme} type="single">
        <Select.Trigger class="w-min flex gap-2">
          <Sun
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          {app.settings.theme.charAt(0).toUpperCase() + app.settings.theme.slice(1)}
        </Select.Trigger>
        <Select.Content align="start">
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </Select.Root>

      <Label for="username">Name:</Label>
      <Input
        id="username"
        bind:value={app.settings.username}
        class="w-full sm:w-64"
        placeholder="Your name"
      />
      <!-- <Label>Background:</Label>
      <Input type="color" bind:value={app.settings.color} class="w-12"/> -->
    </div>
  </Card.Content>
  <Card.Footer>
    <Button variant="destructive" onclick={firebase.logout} size="sm">
      <LogOut class="h-4 w-4" />
      Logout
    </Button>
  </Card.Footer>
</Card.Root>
