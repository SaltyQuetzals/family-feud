<script lang="ts">
	export let revealed = false;
	export let rank: number;
	export let answer: string = "";
	export let surveyCount: number = 0;
</script>

<div class="answer" class:revealed on:click={() => revealed = !revealed}>
	<div class="face front">{rank}</div>
	<div class="face top">
		<span>{answer}</span>
		<span>{surveyCount}</span>
	</div>
</div>

<style>
	.answer {
        width: 100%;
        height: 100%;
        padding: 32px;
		transform-style: preserve-3d;
        transition: all .3s ease-in;
	}
	.face {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		position: absolute;
		backface-visibility: inherit;
		font-size: 60px;
		color: #000;
	}
	.front {
		background: rgba(90, 90, 90, 1);
		transform: translateZ(50px);
	}
	.top {
		background: rgba(210, 210, 0, 1);
		transform: rotateX(90deg) translateZ(50px);
	}

    .revealed {
        transform: rotate3d(1, 0, 0, -90deg);
    }
</style>
