<script lang="ts">
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Loader2, Terminal } from "lucide-svelte";

  let { onSuccessfulLogin }: { onSuccessfulLogin: () => void } = $props();
  const firebase = getFirebaseContext();
  
  let email = $state("");
  let password = $state("");
  let failedLogin = $state(false);
  let isLoading = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    try {
      failedLogin = false;
      isLoading = true;
      await firebase.login(email, password);
      onSuccessfulLogin();
    } catch (err) {
      console.log("Login failed!");
      failedLogin = true;
    } finally {
      isLoading = false;
    }
  }

  $effect(() => {
    if (firebase.user) {
      onSuccessfulLogin();
    }
  });
</script>

{#if firebase.user}
  <div class="w-full flex justify-center">
    <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
{:else}
  <Card.Root class="w-full max-w-sm mx-auto">
    <Card.Header>
      <Card.Title class="text-center">Login</Card.Title>
      <Card.Description class="text-center">Enter your credentials to sign in</Card.Description>
    </Card.Header>
    <Card.Content>
      <form class="space-y-4" onsubmit={handleSubmit}>
        <div class="space-y-2">
          <Input
            bind:value={email}
            type="email"
            placeholder="Email"
            required
            class="w-full"
          />
        </div>
        <div class="space-y-2">
          <Input
            bind:value={password}
            type="password"
            placeholder="Password"
            required
            class="w-full"
          />
        </div>
        
        {#if failedLogin}
          <Alert.Root variant="destructive" class="py-2">
            <Terminal class="size-4" />
            <Alert.Title>Wrong password!</Alert.Title>
            <Alert.Description>
              Please try again.
            </Alert.Description>
          </Alert.Root>
        {/if}
        
        <Button type="submit" class="w-full" disabled={isLoading}>
          {#if isLoading}
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
          {/if}
          Login
        </Button>
      </form>
    </Card.Content>
  </Card.Root>
{/if}