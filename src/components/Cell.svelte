<script>
    export let piece;
    export let selected;
    export let color;
</script>

<cell on:click class="{selected ? 'selected' : ''} {color}">{piece}</cell>

<style>
	cell {
        text-align: center;
        vertical-align: middle;
        font-size: 300%;
        width: 12.5%;
        transition: all .4s ease-out;
	}
    cell.selected {
        background: rgba(238, 255, 0, 0.712);
    }
    cell.light {
        background-color:  white;
    }
    cell.dark {
        background-color: black;
    }
</style>