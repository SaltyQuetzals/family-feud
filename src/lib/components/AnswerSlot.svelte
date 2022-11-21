<script lang="ts">
	import type { Answer } from '$lib/types';

	export let revealed = false;
	export let admin = false;
	export let rank: number | null = null;
	export let answer: Answer | null = null;
</script>

<div class="flip-card">
	{#if answer === null}
		<div class="inner">
			<div class="front" />
		</div>
	{:else if admin}
		{#key answer}
			<div class="inner">
				<div class="back" class:admin>
					<input type="checkbox" on:change id="reveal-checkbox" name="Revealed" />
					<span class="text">{answer.text.toUpperCase()}</span>
					<span class="survey-count">{answer.surveyCount}</span>
				</div>
			</div>
		{/key}
	{:else}
		{#key answer}
			<div class="inner" class:revealed>
				<div class="front">
					<span>{rank}</span>
				</div>
				<div class="back">
					<span class="text">{answer.text.toUpperCase()}</span>
					<span class="survey-count">{answer.surveyCount}</span>
				</div>
			</div>
		{/key}
	{/if}
</div>

<style>
	.flip-card {
		border: 2px solid #ffffff;
		background-color: transparent;
		width: 100%;
		height: 100%;
	}

	.inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: flex;
		align-items: center;
		justify-items: center;
		align-content: center;
		justify-content: center;
		font-size: x-large;
		color: white;
	}

	.front span {
		font-weight: 800;

		background: #1a2659;
		border: 2px solid #7491cb;
		border-radius: 50%;
		padding: 0.25em 1em 0.25em 1em;
	}

	.revealed {
		transform: rotateX(180deg);
	}

	.front {
		background: linear-gradient(180deg, #668fdc 0%, rgba(48, 85, 173, 0.53) 100%);
	}

	.back {
		background: linear-gradient(180deg, #668fdc 0%, rgba(48, 85, 173, 0.53) 100%);
		transform: rotateX(180deg);
		display: flex;
		justify-content: space-between;
		justify-items: center;
		background: rgba(48, 85, 173, 0.53);
	}

	.admin {
		transform: none;
	}

	.back .text {
		flex: 7;
	}

	.back .survey-count {
		flex: 3;
		max-width: 10%;
		padding: 8px;
	}
</style>
