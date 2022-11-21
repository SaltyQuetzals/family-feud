<script lang="ts">
	import { CHANNEL_NAME } from '$lib/broadcast-channel/channel';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	import {
		MessageType,
		type HideAnswerMessage,
		type NewQuestionMessage,
		type RefreshPointsMessage,
		type RevealAnswerMessage
	} from '$lib/broadcast-channel/messages';
	import type { Question } from '$lib/types';
	import { onMount } from 'svelte';
	import GameBoard from '$lib/components/GameBoard.svelte';

	let revealed: Set<number> = new Set();
	let question: Question | null = null;
	let files: FileList | undefined = undefined;
	const team1Score = tweened(0, {
		duration: 250,
		easing: linear
	});
	const team2Score = tweened(0, {
		duration: 250,
		easing: linear
	});
	const boardScore = tweened(0, {
		duration: 250,
		easing: linear
	});

	const updateQuestion = () => {
		if (files && files[0]) {
			files[0].text().then((text) => {
				question = JSON.parse(text) as Question;
				revealed = new Set();
				$boardScore = 0;
				postQuestion(question);
			});
		}
	};

	const postQuestion = (q: Question) => {
		const message: NewQuestionMessage = {
			type: MessageType.NEW_QUESTION,
			question: q
		};
		broadcastChannel?.postMessage(message);
	};

	let broadcastChannel: BroadcastChannel | null = null;

	onMount(() => {
		broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
	});

	const postScoreUpdate = () => {
		const message: RefreshPointsMessage = {
			type: MessageType.REFRESH_POINTS,
			boardPoints: $boardScore,
			team1Points: $team1Score,
			team2Points: $team2Score
		};
		broadcastChannel?.postMessage(message);
	};

	const toggleAnswer = (event: CustomEvent<{ answerRank: number }>) => {
		const { answerRank } = event.detail;
		const toggleFunction = revealed.has(answerRank) ? hideAnswer : revealAnswer;
		toggleFunction(answerRank);
		postScoreUpdate();
	};

	const revealAnswer = (answerRank: number) => {
		const newRevealed = new Set(revealed);
		newRevealed.add(answerRank);
		revealed = newRevealed;
		const message: RevealAnswerMessage = {
			type: MessageType.REVEAL_ANSWER,
			answerRank
		};
		broadcastChannel?.postMessage(message);
		$boardScore = $boardScore + question!.answers[answerRank - 1]!.surveyCount;
	};

	const hideAnswer = (answerRank: number) => {
		const newRevealed = new Set(revealed);
		newRevealed.delete(answerRank);
		revealed = newRevealed;
		const message: HideAnswerMessage = {
			type: MessageType.HIDE_ANSWER,
			answerRank
		};
		broadcastChannel?.postMessage(message);
		$boardScore = $boardScore - question!.answers[answerRank - 1]!.surveyCount;
	};

	const assignBoardPointsToTeam = (teamNumber: 1 | 2) => {
		if (teamNumber === 1) {
			$team1Score = $team1Score + $boardScore;
		} else {
			$team2Score = $team2Score + $boardScore;
		}
		$boardScore = 0;
		postScoreUpdate();
	};
</script>

<div class="container">
	<GameBoard {question} {revealed} {team1Score} {team2Score} {boardScore} admin={true} on:admin-toggle={toggleAnswer} />

	<div class="buttons">
		<div>
			<button on:click={() => assignBoardPointsToTeam(1)}>Add Points to Team 1</button>
			<button on:click={() => assignBoardPointsToTeam(2)}>Add Points to Team 2</button>
		</div>
		<input type="file" bind:files on:change={updateQuestion} />
	</div>
</div>

<style>
	.container {
		margin: auto;
	}
	.buttons {
		text-align: center;
		margin: auto;
		margin-top: 1em;
		width: 100%;
	}

	.buttons > div {
		margin: auto;
		display: flex;
		width: 33%;
		justify-content: space-between;
	}

	.buttons button {
		margin: 16px;
	}

	.buttons > input {
		margin-top: 1em;
	}
</style>
