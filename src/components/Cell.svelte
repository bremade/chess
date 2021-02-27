<script>
  export let position;
  export let color = isLightSquare(position.row, position.col)
    ? "light"
    : "dark";
  export let selected;
  export let piece;

  function isLightSquare(row, col) {
    return (row + col) % 2 === 0;
  }

  function isSelected(sel) {
    return sel.row === position.row && sel.col === position.col;
  }
</script>

<cell on:click class="{isSelected(selected) ? 'hl-' + color : ''} {color}">
  {#if piece.component != undefined}
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
  cell.hl-light {
    background-color: $hl-light-color;
  }
  cell.hl-dark {
    background-color: $hl-dark-color;
  }
</style>
