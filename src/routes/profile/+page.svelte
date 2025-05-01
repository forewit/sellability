<script lang="ts">
  import { getAppContext } from "$lib/app/app.svelte";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { base } from "$app/paths";

  // Shadcn imports
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Toggle } from "$lib/components/ui/toggle/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { LogOut, Home } from "lucide-svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import SidebarGroupLabel from "$lib/components/ui/sidebar/sidebar-group-label.svelte";

  const firebase = getFirebaseContext();
  const app = getAppContext();
</script>

<Card.Root class="m-3">
  <Card.Header>
    <Card.Title class="flex gap-2 items-center">
      <img src="{base}/images/profile.png" class="w-8" alt="profile icon" />

      Profile
    </Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="grid grid-cols-[auto,1fr] items-center gap-6">
      <Label for="username">Nickname:</Label>
      <Input
        id="username"
        bind:value={app.settings.username}
        class="w-full sm:w-64"
        placeholder="nickname"
      />

      <Label>Email:</Label>
      <div>{firebase.user?.email}</div>

      <Label>Background:</Label>
      <Input type="color" bind:value={app.settings.color} class="w-12"/>
    </div>
  </Card.Content>
  <Card.Footer>
    <Button variant="destructive" onclick={firebase.logout} size="sm">
      <LogOut class="h-4 w-4" />
      Logout
    </Button>
  </Card.Footer>
</Card.Root>
