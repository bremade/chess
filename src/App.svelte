<script>
  import Chessfield from "./components/Chessfield.svelte";
  import Home from "./components/Home.svelte";
  import chessStore from "./engine/chessstore.js";

  $: inProgress = $chessStore.inProgress;
</script>

{#if inProgress}
  <Chessfield />
{:else}
  <Home />
{/if}
