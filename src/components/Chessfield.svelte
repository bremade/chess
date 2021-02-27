<script>
  import { onMount } from "svelte";
  import { chessStore } from "../engine/chessstore.js";
  import { movePiece } from "../engine/chess.js";
  import { fromStore } from "../engine/utils/fen.js";

  import Cell from "./Cell.svelte";
  import Piece from "./Piece.svelte";
  import Fab, { Icon } from "@smui/fab";
  import { toast } from "@zerodevx/svelte-toast";

  $: game = $chessStore.board;
  $: selected = $chessStore.selected;

  const ROW_LABELS = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const COL_LABELS = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let gameSize = 0;

  onMount(() => getGameSize(window.innerWidth, window.innerHeight));

  function getGameSize(width, height) {
    if (width < height) {
      gameSize = width - 200;
    } else {
      gameSize = height - 200;
    }
  }

  function onResize(event) {
    getGameSize(event.target.innerWidth, event.target.innerHeight);
  }

  function exportFen() {
    var fen = fromStore($chessStore);
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "fenExport");
    document.getElementById("fenExport").value = fen;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    toast.push("FEN was copied to clipboard!", {
      theme: {
        "--toastBackground": "#48bb78",
        "--toastProgressBackground": "#2f855a",
      },
    });
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
  {#each Array(8) as _, r}
    <row>
      {#each Array(8) as _, c}
        <Cell
          bind:selected
          position={{ row: r, col: c }}
          piece={{ props: { symbol: game[r][c] }, component: Piece }}
          on:click={() => movePiece(r, c, chessStore)}
        />
      {/each}
    </row>
  {/each}
</chessfield>
<div class="fabPosition">
  <Fab color="secondary" on:click={exportFen}>
    <Icon class="material-icons">file_download</Icon>
  </Fab>
</div>

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
    font-family: $font-stack;
    .rankPos {
      position: absolute;
      display: flex;
      font-size: 0.7rem;
      font-weight: 500;
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
  .fabPosition {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 20px 20px 0;
  }
</style>
