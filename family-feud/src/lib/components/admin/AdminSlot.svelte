<script lang="ts">
	import type { Answer } from '$lib/types';
	export let answer: Answer;
	export let revealed: boolean;
</script>

<div class="flip-card">
	<div class="inner">
		<div class="back">
				<input type="checkbox" on:change id="reveal-checkbox" name="Revealed"/>
				<span class="text">{answer.text.toUpperCase()}</span>
				<span class="survey-count">{answer.surveyCount}</span>
		</div>
	</div>
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
	}

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
	.back {
		background: linear-gradient(180deg, #668fdc 0%, rgba(48, 85, 173, 0.53) 100%);
		display: flex;
		justify-content: space-between;
		justify-items: center;
		background: rgba(48, 85, 173, 0.53);
	}

	.back .text {
		flex: 7;
	}

	.back .survey-count {
		flex: 3;
		max-width: 10%;
		padding: 8px;
	}

    input[type="checkbox"] {
        width: 24px;
        height: 24px;
    }
</style>
