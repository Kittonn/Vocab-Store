<script lang="ts">
	import Exercise from '$lib/Components/Exercise/Exercise.svelte';
	import Result from '$lib/Components/Exercise/Result.svelte';
	import vocabStore from '$lib/Store/vocab_store';
	import wrongStore from '$lib/Store/wrong_store';
	import WrongAnswer from '$lib/Components/Exercise/WrongAnswer.svelte';

	let item = 0;
	let finish = false;
	let show_wrong = false;
	let score = 0;
	let wrong_item = 0;

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
				vocab: $vocabStore[id_select - 1].vocab,
				choose: $vocabStore[id_select - 1][choice_select]
			};
			wrongStore.update((currItem) => {
				return [...currItem, wrongItem];
			});
		}
	};

	const wrong_click = () => {
		show_wrong = true;
		finish = false;
	};

	const back_home = () => {
		show_wrong = false;
		finish = true;
	};
</script>

<div class="bg-white text-white text-center  w-[350px]   shadow-md p-6 rounded-2xl">
	{#if finish === true}
		<Result
			on:wrong={wrong_click}
			wrongStore={$wrongStore}
			{score}
			allitem={$vocabStore.length}
			on:restart={() => {
				finish = false;
				item = 0;
				score = 0;
				wrongStore.set([]);
				show_wrong = false;
			}}
		/>
	{:else if show_wrong === true}
		<WrongAnswer on:back_home={back_home} {wrong_item} wrong_obj={$wrongStore} />
	{:else}
		<Exercise
			on:break={back_home}
			{score}
			on:add_item={add_item}
			currItem={item}
			allitem={$vocabStore.length}
			vocabObject={$vocabStore[item]}
		/>
	{/if}
</div>
