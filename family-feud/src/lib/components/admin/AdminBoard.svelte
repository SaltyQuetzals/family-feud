<script lang="ts">
	import type { Question } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import BlankSlot from '../BlankSlot.svelte';
	import AdminSlot from './AdminSlot.svelte';
	const dispatch = createEventDispatcher();
	export let question: Question | null;
	export let team1Score: number;
	export let team2Score: number;
	export let boardScore: number;
	export let revealed: Set<number>;

	const toggleRevealed = (answerRank: number) => dispatch('answerToggled', {answerRank});
</script>

{#if question}
	<div class="container">
		<div class="score" id="board-score">{boardScore}</div>
		<div class="main-row">
			<span class="score" id="team1">{team1Score}</span>
			<div class="answers">
				{#each question.answers as answer, i}
					{#if answer !== null}
						<AdminSlot
							revealed={revealed.has(i + 1)}
							{answer}
							on:change={() => toggleRevealed(i+1)}
						/>
					{:else}
						<BlankSlot />
					{/if}
				{/each}
			</div>
			<span class="score" id="team2">{team2Score}</span>
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
