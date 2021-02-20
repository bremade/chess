<script>
import { onMount } from 'svelte';

import Cell from './Cell.svelte';

export let rows = [0, 1, 2, 3, 4, 5, 6, 7];
export let cols = [0, 1, 2, 3, 4, 5, 6, 7];
//const ROW_LABELS = ['8', '7', '6', '5', '4', '3', '2', '1'];
//const COL_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//const startPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
let gameSize = 0;

onMount(() => getGameSize(window.innerWidth, window.innerHeight));

function isLightSquare(x, y) {
  console.log((x + y) % 2 === 0);
  return (x + y) % 2 === 0;
}

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
</script>

<svelte:window on:resize={onResize}/>
<chessfield style="width: {gameSize}px; height: {gameSize}px">
			{#each rows as r}
			<row>
					{#each cols as c}
						<Cell color={isLightSquare(r, c) ? 'light' : 'dark'} piece=""/>
					{/each}
			</row>
			{/each}
</chessfield>

<style>
	row {
		display: flex;
		height: 12.5%;
		flex: 0 0 100%;
	}
	chessfield {
		border: 4px black;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-height: 300px;
		min-width: 300px;
	}
</style>