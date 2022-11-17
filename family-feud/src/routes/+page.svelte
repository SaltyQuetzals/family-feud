<script lang="ts">
	import Answer from '$lib/components/Answer.svelte';
</script>

<div class="columns">
	<div>
		<Answer rank={1} answer={"Flippers"} surveyCount={0} />
		<Answer rank={2} />
		<Answer rank={3} />
		<Answer rank={4} />
		<Answer rank={5} />
	</div>
	<div>
		<Answer rank={6} />
		<Answer rank={7} />
		<Answer rank={8} />
		<Answer rank={9} />
		<Answer rank={10} />
	</div>
</div>

<style>
	.columns {
		column-count: 2;
	}
</style>
