<script lang="ts">
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Loader2, Mail, Terminal, TriangleAlert } from "lucide-svelte";
  import { base } from "$app/paths";

  let { onSuccessfulLogin }: { onSuccessfulLogin: () => void } = $props();
  const firebase = getFirebaseContext();

  let email = $state("");
  let password = $state("");
  let failedLogin = $state(false);
  let emailSent = $state(false);
  let isLoading = $state(false);
  let forgotPassword = $state(false);

  async function handleLogin(e: SubmitEvent) {
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

  async function handlePasswordReset(e: SubmitEvent) {
    e.preventDefault();
    try {
      emailSent = true;
      isLoading = true;
      await firebase.resetPassword(email);
    } catch (err) {
      console.log("Password reset failed!");
      emailSent = false;
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
    <div
      class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"
    ></div>
  </div>
{:else}
  <Card.Root class="w-full max-w-sm mx-auto">
    <Card.Header class="flex items-center">
      <img src="{base}/images/cube.png" class="w-24" alt="logo" />
      <Card.Title class="text-center">Sellability</Card.Title>
    </Card.Header>
    <Card.Content>
      {#if forgotPassword}
        <form class="flex flex-col gap-4" onsubmit={handlePasswordReset}>
          <Input bind:value={email} type="email" placeholder="Email" required class="w-full" />

          {#if emailSent}
            <Alert.Root class="py-2">
              <Mail class="size-4" />
              <Alert.Title>Email Sent!</Alert.Title>
              <Alert.Description
                >Please check your inbox for the password reset link.</Alert.Description
              >
            </Alert.Root>
          {/if}
          <Button type="submit" class="w-full" disabled={isLoading || emailSent}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            {emailSent ? "Email Sent!" : "Reset Password"}
          </Button>
          <Button
            class="pl-2"
            variant="link"
            onclick={() => {
              forgotPassword = false;
              failedLogin = false;
            }}>Back to sign in</Button
          >
        </form>
      {:else}
        <form class="flex flex-col gap-4" onsubmit={handleLogin}>
          <Input bind:value={email} type="email" placeholder="Email" required class="w-full" />
          <Input
            bind:value={password}
            type="password"
            placeholder="Password"
            required
            class="w-full"
          />

          {#if failedLogin}
            <Alert.Root variant="destructive" class="py-2">
              <TriangleAlert class="size-4" />
              <Alert.Title>Wrong password!</Alert.Title>
              <Alert.Description>Please try again.</Alert.Description>
            </Alert.Root>
          {/if}

          <Button type="submit" class="w-full" disabled={isLoading}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            Login
          </Button>
          <Button
            variant="link"
            onclick={() => {
              forgotPassword = true;
              emailSent = false;
            }}>Forgot password?</Button
          >
        </form>
      {/if}
    </Card.Content>
  </Card.Root>
{/if}
