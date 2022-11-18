<script lang="ts">
	import { CHANNEL_NAME } from '$lib/broadcast-channel/channel';
	import {
		MessageType,
		type HideAnswerMessage,
		type NewQuestionMessage,
		type RevealAnswerMessage
	} from '$lib/broadcast-channel/messages';
	import AdminBoard from '$lib/components/admin/AdminBoard.svelte';
	import type { Question } from '$lib/types';
	import { onMount } from 'svelte';

	let revealed: Set<number> = new Set();
	let question: Question | null = null;
	let files: FileList | undefined = undefined;
	let team1Score = 0;
	let team2Score = 0;
	let boardScore = 0;

	const postQuestion = (q: Question) => {
		const message: NewQuestionMessage = {
			type: MessageType.NEW_QUESTION,
			question: q
		};
		broadcastChannel?.postMessage(message);
	};

	$: {
		if (files && files[0]) {
			files[0].text().then((text) => {
				question = JSON.parse(text) as Question;
				postQuestion(question);
			});
		}
	}

	let broadcastChannel: BroadcastChannel | null = null;

	onMount(() => {
		broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
	});

	const toggleAnswer = (event: CustomEvent<{ answerRank: number }>) => {
		const { answerRank } = event.detail;
		if (revealed.has(answerRank)) {
			hideAnswer(answerRank);
		} else {
			revealAnswer(answerRank);
		}
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
	};
</script>

<div class="container">
	<AdminBoard
		{question}
		{revealed}
		{team1Score}
		{team2Score}
		{boardScore}
		on:answerToggled={toggleAnswer}
	/>

	<div class="buttons">
		<div>
			<button>Add Points to Team 1</button>
			<button>Add Points to Team 2</button>
		</div>
		<input type="file" bind:files />
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
