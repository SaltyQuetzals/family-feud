<script lang="ts">
	import GameBoard from '$lib/components/GameBoard.svelte';
</script>

<div class="backdrop">
	<GameBoard />
</div>

<style>
	.backdrop {
		max-width: 80%;
		margin: auto;
		margin-top: 16em;
		border-radius: 50%;
		border: 5px solid #003c7b;
		padding-top: 2.5em;
		padding-bottom: 5em;
		background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/bgFF.svg') #0c4779;
		/*background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/bgFF.svg') #3a84c3;*/
		background-repeat: repeat;
		background-position: center center;
	}
</style>
