<script>
  import { onMount } from "svelte";

  import Cell from "./Cell.svelte";
  import Piece from "./Piece.svelte";

  const rows = [0, 1, 2, 3, 4, 5, 6, 7];
  const cols = [0, 1, 2, 3, 4, 5, 6, 7];
  const ROW_LABELS = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const COL_LABELS = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const startPosition =
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  let gameSize = 0;
  let game = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];

  onMount(() => getGameSize(window.innerWidth, window.innerHeight));

  function isLightSquare(x, y) {
    return (x + y) % 2 === 0;
  }

  function getGameSize(width, height) {
    if (width < height) {
      gameSize = width - 200;
    } else {
      gameSize = height - 200;
    }
    console.log(gameSize);
  }

  function onResize(event) {
    getGameSize(event.target.innerWidth, event.target.innerHeight);
  }
</script>

<svelte:window on:resize={onResize} />
<ranks style="width: {gameSize}px; height: {gameSize}px">
  <top class="rankPos rank">
    {#each COL_LABELS as cLabel}
      <div>{cLabel}</div>
    {/each}
  </top>
  <bottom class="rankPos rank">
    {#each COL_LABELS as cLabel}
      <div>{cLabel}</div>
    {/each}
  </bottom>
  <left class="rankPos rank">
    {#each ROW_LABELS as rLabel}
      <div>{rLabel}</div>
    {/each}
  </left>
  <right class="rankPos rank">
    {#each ROW_LABELS as rLabel}
      <div>{rLabel}</div>
    {/each}
  </right>
  <edge class="ul rankPos" />
  <edge class="ur rankPos" />
  <edge class="ll rankPos" />
  <edge class="lr rankPos" />
</ranks>
<chessfield style="width: {gameSize}px; height: {gameSize}px">
  {#each rows as r}
    <row>
      {#each cols as c}
        <Cell
          color={isLightSquare(r, c) ? "light" : "dark"}
          piece={{ props: { symbol: game[r][c] }, component: Piece }}
        />
      {/each}
    </row>
  {/each}
</chessfield>

<style type="text/scss">
  @import "../styles/vars";
  row {
    display: flex;
    height: calc(12.5% + 0.1px);
    width: 100%;
  }
  chessfield {
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
    min-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ranks {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .rankPos {
      position: absolute;
      display: flex;
      font-size: 0.7rem;
      font-weight: 500;
      font-family: $font-stack;
      background-color: $dark-color-alpha;
      color: $light-color;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    div {
      display: flex;
      flex: 1 1 calc(12.5% + 0.1px);
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    top {
      bottom: 100%;
    }
    top.rank {
      height: 1.5rem;
      width: 100%;
    }
    bottom {
      top: 100%;
    }
    bottom.rank {
      height: 1.5rem;
      width: 100%;
    }
    left {
      right: 100%;
    }
    left.rank {
      height: 100%;
      width: 1.5rem;
      flex-flow: column nowrap;
    }
    right {
      left: 100%;
    }
    right.rank {
      height: 100%;
      width: 1.5rem;
      flex-flow: column nowrap;
    }
    edge {
      height: 1.5rem;
      width: 1.5rem;
    }
    edge.ul {
      margin-left: 1.5rem;
      bottom: 100%;
      right: 100%;
    }
    edge.ur {
      margin-right: 1.5rem;
      bottom: 100%;
      left: 100%;
    }
    edge.ll {
      margin-left: 1.5rem;
      top: 100%;
      right: 100%;
    }
    edge.lr {
      margin-right: 1.5rem;
      top: 100%;
      left: 100%;
    }
  }
</style>
