<script>
  import { log } from "console";

  export let value = false;
</script>

<div class="">
  <h1>Chess made with Svelte</h1>
  <button
    on:click={() => {
      value = true;
    }}>Start New Game</button
  >
</div>

<style type="text/scss">
  div {
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

    h1 {
      padding: 0 20px 0 20px;
    }
    button {
      padding: 0 20px 0 20px;
      margin: 0 0 10px 0;
      max-width: 10rem;
    }
  }
</style>
