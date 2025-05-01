<script lang="ts">
    import { getAppContext } from '$lib/app/app.svelte'
    import { getFirebaseContext } from '$lib/firebase/firebase.svelte'
    import { base } from '$app/paths'
    
    // Shadcn imports
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Toggle } from "$lib/components/ui/toggle/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { LogOut, Home } from "lucide-svelte";

    const firebase = getFirebaseContext()
    const app = getAppContext()
</script>

<main class="max-w-3xl mx-auto p-6 space-y-8">
        <Button variant="outline" size="sm" href="{base}/">
                <Home class="h-4 w-4" />
                Home
        </Button>

    <Card.Root>
        <Card.Header>
            <Card.Title>Profile</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-4">
            <div class="space-y-2">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label for="username" class="min-w-24 font-medium">Username:</label>
                    <Input 
                        id="username"
                        bind:value={app.username} 
                        class="w-full sm:w-64"
                        placeholder="nickname"
                    />
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div class="min-w-24 font-medium">Email:</div>
                <div>{firebase.user?.email}</div>
            </div>
            
            <Separator class="my-4" />
            
            <div class="flex justify-end">
                <Button 
                    variant="destructive"
                    onclick={() => firebase.logout()}
                    class="inline-flex items-center gap-2"
                >
                    <LogOut class="h-4 w-4" />
                    Logout
                </Button>
            </div>
        </Card.Content>
    </Card.Root>
</main>