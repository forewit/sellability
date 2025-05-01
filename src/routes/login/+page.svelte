<script>
  import { getAppContext } from "$lib/app/app.svelte";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import AuthForm from "$lib/components/firebase/AuthForm.svelte";

  const app = getAppContext();

  function redirect() {
    if (app.authRedirect === base+"/login/") app.authRedirect = base+"/";
    goto(app.authRedirect);
  }
</script>


<div class="h-svh grid items-center p-3">
  <AuthForm onSuccessfulLogin={redirect} />
</div>