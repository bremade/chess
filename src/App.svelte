<script>
  import Chessfield from "./components/Chessfield.svelte";
  import Home from "./components/Home.svelte";

  var inProgress = false;
</script>

{#if inProgress}
  <Chessfield />
{:else}
  <Home bind:value={inProgress} />
{/if}
