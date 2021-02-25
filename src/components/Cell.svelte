<script>
  export let piece;
  export let selected;
  export let color;
</script>

<cell on:click class="{selected ? 'selected' : ''} {color}">
  {#if piece.component != null}
    <svelte:component this={piece.component} {...piece.props} />
  {/if}
</cell>

<style type="text/scss">
  @import "../styles/vars";
  cell {
    text-align: center;
    width: calc(12.5% + 0.1px);
    transition: all 0.4s ease-out;
  }
  cell.selected {
    background: rgba(238, 255, 0, 0.712);
  }
  cell.light {
    background-color: $light-color;
  }
  cell.dark {
    background-color: $dark-color;
  }
</style>
