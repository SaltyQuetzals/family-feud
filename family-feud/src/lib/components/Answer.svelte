<script lang="ts">
	export let revealed = false;
	export let rank: number;
	export let answer: string = 'flippitygibberty';
	export let surveyCount: number = 0;
</script>

<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<p>{rank}</p>
		</div>
		<div class="flip-card-back">
			<span>{answer}</span>
			<span>{surveyCount}</span>
		</div>
	</div>
</div>

<style>
	.flip-card {
		border-style: hidden;
		background-color: transparent;
		width: 100%;
		height: 4rem;
		perspective: 1000px;
		vertical-align: middle;
		font-size: x-large;
		margin-bottom: 8px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateX(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.flip-card-front {
		background-color: #bbb;
		color: black;
	}

	.flip-card-back {
		background-color: #222e36ef;
		color: white;
		transform: rotateX(180deg);
	}
</style>
