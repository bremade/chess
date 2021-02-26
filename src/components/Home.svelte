<script>
  import chessStore from "../engine/chessstore.js";

  const startPosition =
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  let fen = "";
</script>

<div class="init">
  <h1>Chess made with Svelte</h1>
  <button
    on:click={() => {
      try {
        chessStore.init(startPosition);
      } catch (e) {
        alert(e.message);
        throw e;
      }
    }}>Start New Game</button
  >
  <div class="fenStart">
    <h2>Start with given FEN</h2>
    <input id="fen" type="text" placeholder={startPosition} bind:value={fen} />
    <button
      on:click={() => {
        try {
          chessStore.init(fen);
        } catch (e) {
          alert(e.message);
          throw e;
        }
      }}>Start From FEN</button
    >
  </div>
</div>

<style type="text/scss">
  @import "../styles/vars";
  div.init {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 5px black solid;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: $font-stack;
    h1 {
      padding: 0 20px 0 20px;
    }
    button {
      padding: 5px;
      max-width: 10rem;
      border: 1px black solid;
      border-radius: 5px;
    }
    div.fenStart {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      input {
        width: 100%;
      }
      button {
        margin: 10px 0;
      }
    }
  }
</style>
