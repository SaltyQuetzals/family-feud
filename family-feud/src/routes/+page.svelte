<script lang="ts">
	import Answer from '$lib/components/Answer.svelte';
</script>

<div class="container">
	<div class="answers">
		<Answer rank={1} answer={"Tommy Gabbagool"} surveyCount={3} />
		<Answer rank={2} />
		<Answer rank={3} />
        <Answer rank={4} answer={"Tommy Gabbagool"} surveyCount={3} />
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
        height: 100vh;
	}
	.answers {
		display: grid;
		row-gap: 8rem;
        width: 100%;
	}
</style>
