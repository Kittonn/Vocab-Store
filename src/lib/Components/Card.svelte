<script>
	import Exercise from '$lib/Components/Exercise/Exercise.svelte';
	import Result from '$lib/Components/Exercise/Result.svelte';
	import vocabStore from '$lib/Store/vocab_store';
	let item = 0;
	let finish = false;
	const add_item = () => {
		item++;
		if (item === $vocabStore.length) {
			finish = true;
		}
	};
</script>

<div class="bg-white text-white text-center  w-[350px]   shadow-md p-6 rounded-2xl">
	{#if finish === true}
		<Result
			on:restart={() => {
				finish = false;
				item = 0;
			}}
		/>
	{:else}
		<Exercise on:add_item={add_item} currItem={item} allitem={$vocabStore.length} vocabObject={$vocabStore[item]} />
	{/if}
</div>
