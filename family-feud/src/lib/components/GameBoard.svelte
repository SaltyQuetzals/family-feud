<script lang="ts">
	import AnswerSlot from './AnswerSlot.svelte';
	const answers = [0, 0, 0, 0, 0, 0, 0, 0];
	const team1Score = 0;
	const team2Score = 0;
	const boardScore = 0;
	// const answers = [0, 0];
</script>

<div class="container">
	<div class="score" id="board-score">{boardScore}</div>
	<div class="main-row">
		<span class="score" id="team1">{team1Score}</span>
		<div class="answers">
			{#each answers as answer, i}
				<AnswerSlot revealed={false} answer={'Answer Text'} surveyCount={54} rank={i + 1} />
			{/each}
		</div>
		<span class="score" id="team2">{team2Score}</span>
	</div>
</div>

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
