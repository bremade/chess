<script>
    export let source;
    export let side;
</script>

<img src={source} color={side == 'white' ? 'white' : 'black'} alt="Piece - {side}"/>

<style>
	img {
		width: 1rem;
        height: 1rem;
	}
</style>