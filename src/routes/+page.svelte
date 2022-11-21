<script lang="ts">
	import { CHANNEL_NAME } from '$lib/broadcast-channel/channel';
	import { MessageType, type Message } from '$lib/broadcast-channel/messages';
	import GameBoard from '$lib/components/GameBoard.svelte';
	import type { Question } from '$lib/types';
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	let revealed: Set<number> = new Set();
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
	let question: Question | null = null;

	let broadcastChannel: BroadcastChannel | null = null;
	onMount(() => {
		broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
		broadcastChannel.onmessage = (event: MessageEvent<Message>) => {
			switch (event.data.type) {
				case MessageType.NEW_QUESTION:
					question = event.data.question;
					revealed = new Set();
					break;
				case MessageType.REVEAL_ANSWER:
					const added = new Set<number>(revealed);
					added.add(event.data.answerRank);
					revealed = added;
					break;
				case MessageType.HIDE_ANSWER:
					const deleted = new Set<number>(revealed);
					deleted.delete(event.data.answerRank);
					revealed = deleted;
					break;
				case MessageType.WRONG_ANSWER:
					break;
				case MessageType.REFRESH_POINTS:
					team1Score.set(event.data.team1Points);
					team2Score.set(event.data.team2Points);
					boardScore.set(event.data.boardPoints);
					break;
				default:
					throw Error('Unknown MessageType received.');
			}
		};
	});
</script>

<div class="backdrop">
	<GameBoard
		{question}
		{revealed}
		team1Score={team1Score}
		team2Score={team2Score}
		boardScore={boardScore}
	/>
</div>

<style>
	.backdrop {
		max-width: 80%;
		margin: auto;
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
