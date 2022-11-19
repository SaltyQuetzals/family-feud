<script lang="ts">
</script>

<div class="flip-card">
	<div class="inner">
		<div class="front" />
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

	.front {
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

	.front {
		background: linear-gradient(180deg, #668fdc 0%, rgba(48, 85, 173, 0.53) 100%);
	}
</style>
