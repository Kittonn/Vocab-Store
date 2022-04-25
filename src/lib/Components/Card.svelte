<script lang="ts">
	import Exercise from '$lib/Components/Exercise/Exercise.svelte';
	import Result from '$lib/Components/Exercise/Result.svelte';
	import vocabStore from '$lib/Store/vocab_store';
	import wrongStore from '$lib/Store/wrong_store';

	let item = 0;
	let finish = false;
	let score = 0;

	const add_item = (e: any) => {
		let { id_select, choice_select }: { id_select: number; choice_select: string } = e.detail;
		item++;
		if (item === $vocabStore.length) {
			finish = true;
		}
		if ($vocabStore[id_select - 1][choice_select] === $vocabStore[id_select - 1].answer) {
			score++;
		} else {
			let wrongItem = {
				id: id_select - 1,
				answer: $vocabStore[id_select - 1].answer,
				vocab: $vocabStore[id_select - 1].vocab
			};
			wrongStore.update((currItem) => {
				return [...currItem, wrongItem];
			});
		}
	};
</script>

<div class="bg-white text-white text-center  w-[350px]   shadow-md p-6 rounded-2xl">
	{#if finish === true}
		<Result
			wrongStore={$wrongStore}
			{score}
			allitem={$vocabStore.length}
			on:restart={() => {
				finish = false;
				item = 0;
				score = 0;
				wrongStore.set([]);
			}}
		/>
	{:else}
		<Exercise
			{score}
			on:add_item={add_item}
			currItem={item}
			allitem={$vocabStore.length}
			vocabObject={$vocabStore[item]}
		/>
	{/if}
</div>
