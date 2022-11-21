<script lang="ts">
	import type { Question } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import type { Tweened } from 'svelte/motion';
	import AnswerSlot from './AnswerSlot.svelte';
	const dispatch = createEventDispatcher();
	export let question: Question | null;
	export let team1Score: Tweened<number>;
	export let team2Score: Tweened<number>;
	export let boardScore: Tweened<number>;
	export let admin = false;
	export let revealed: Set<number>;

	const adminToggledRevealState = (answerRank: number) => {
		dispatch('admin-toggle', { answerRank });
	};
</script>

{#if question !== null}
	<div class="container">
		<div class="score" id="board-score">{Math.round($boardScore)}</div>
		<div class="main-row">
			<span class="score" id="team1">{Math.round($team1Score)}</span>
			<div class="answers">
				{#each question.answers as answer, i}
					<AnswerSlot
						revealed={revealed.has(i + 1)}
						{answer}
						rank={i + 1}
						{admin}
						on:change={() => adminToggledRevealState(i + 1)}
					/>
				{/each}
			</div>
			<span class="score" id="team2">{Math.round($team2Score)}</span>
		</div>
	</div>
{/if}

<style>
	.container {
		margin: auto;
		display: flex;
		flex-direction: column;
		max-width: 80%;
	}
	.main-row {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		gap: 1em;
	}
	.score {
		flex: 1;
		display: flex;
		background: linear-gradient(180deg, #668fdc 0%, rgba(48, 85, 173) 100%);
		align-items: center;
		justify-content: center;
		aspect-ratio: 3/2;
		padding: 0.5em;
		font-size: 4em;
		border: 4px solid white;
		box-shadow: inset 0 1px 24px 1px rgba(0, 0, 0, 0.48);
		color: white;
	}
	#team1,
	#team2 {
		width: 100%;
	}

	#board-score {
		width: 2em;
		align-self: center;
		margin-bottom: 0.5em;
	}

	.answers {
		flex: 8;
		box-sizing: border-box;
		background-color: black;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-auto-flow: column;
		gap: 0.5em;
		padding: 0.75em;
		height: 33vh;
	}
</style>
