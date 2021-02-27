<script>
  import Chessfield from './components/Chessfield.svelte';
  import Home from './components/Home.svelte';
  import { chessStore } from './engine/chessstore.js';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  $: inProgress = $chessStore.inProgress;

  const options = {
    duration: 10000,
    reversed: true
  };
</script>

{#if inProgress}
  <Chessfield />
{:else}
  <Home />
{/if}
<div class="toast">
  <SvelteToast class="toast" {options} />
</div>

<style type="text/scss">
  @import "./styles/vars";
  div.toast {
    --toastFont: $font-stack;
  }
</style>
