<script lang="ts">
  import "./safeareas.css";
  import { onMount, type Snippet } from "svelte";


  function updateSafeAreas() {
    if (!screen) throw new Error("Cannot update safe areas: screen is not defined");

    const root = document.documentElement;
    root.style.setProperty("--safe-area-top", "env(safe-area-inset-top)");
    root.style.setProperty("--safe-area-left", "env(safe-area-inset-left)");
    root.style.setProperty("--safe-area-right", "env(safe-area-inset-right)");
    root.style.setProperty("--safe-area-bottom", "env(safe-area-inset-bottom)");
    /*
    switch (screen.orientation.type) {
      case "portrait-primary":
        root.style.setProperty("--safe-area-top", "env(safe-area-inset-top)");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty("--safe-area-right", "0px");
        root.style.setProperty("--safe-area-bottom", "env(safe-area-inset-bottom)");
        break;
      case "landscape-primary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "env(safe-area-inset-left)");
        root.style.setProperty("--safe-area-right", "0px");
        root.style.setProperty("--safe-area-bottom", "env(safe-area-inset-bottom)"); // Added line
        break;
      case "landscape-secondary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty("--safe-area-right", "env(safe-area-inset-right)");
        
        break;
    }
        */
  }

  onMount(() => {
    screen.orientation.addEventListener("change", updateSafeAreas);
    updateSafeAreas();
    return () => {
      screen.orientation.removeEventListener("change", updateSafeAreas);
    };
  });
</script>

