<script lang="ts">
	import { onDestroy } from 'svelte';
	import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import vocab_store from '$lib/Store/vocab_store';
	import score_store from '$lib/Store/score_store';
	import { goto } from '$app/navigation';
	import wrong_store from '$lib/Store/wrong_store';

	let list: any = [];
	let reload: boolean = true;

	setTimeout(() => {
		reload = !reload;
	}, 2500);

	const unsub = onSnapshot(collection(db, 'vocab'), (querySnapshot) => {
		list = querySnapshot.docs.map((doc) => {
			return { ...doc.data(), id: doc.id };
		});
		score_store.set({ ...$score_store, item: list.length });
		vocab_store.set(list);
	});

	onDestroy(unsub);

	let item = 0;

	const handleClick = (choice: string) => {
		if ($vocab_store[item].answer === $vocab_store[item][choice]) {
			score_store.update((curr) => {
				return { ...curr, score: curr.score + 1 };
			});
		} else {
			wrong_store.update((curr) => {
				let wrong_ans = {
					vocab: $vocab_store[item].vocab,
					choose: $vocab_store[item][choice],
					answer: $vocab_store[item].answer
				};
				return [...curr, wrong_ans];
			});
		}
		setTimeout(() => {
			item++;
		}, 500);

		if (item === $vocab_store.length - 1) {
			goto('/Exercise/result');
		}
	};
</script>

<div class="bg-white text-white text-center  w-[350px]   shadow-md p-6 rounded-2xl">
	{#if reload}
		<div class="text-black">รอสักครู่.....</div>
	{:else}
		<div class="flex justify-between  items-center">
			<div class="bg-green rounded-lg px-3 py-1">{$score_store.score} คะแนน</div>
			<div class="bg-dark rounded-lg px-3 py-1">{item + 1} / {$score_store.item}</div>
		</div>
		<div class="text-black text-6xl m-5">
			{$vocab_store[item]?.vocab === 'undefined' ? '' : $vocab_store[item]?.vocab}
		</div>
		<div class="flex flex-col justify-center items-center">
			<button
				on:click={() => handleClick('a')}
				class="bg-yellow rounded-lg  p-2 text-dark w-full text-semibold text-xl"
				>{$vocab_store[item]?.a}</button
			>
			<button
				on:click={() => handleClick('b')}
				class="bg-yellow rounded-lg  p-2 text-dark m-3 w-full text-semibold text-xl"
				>{$vocab_store[item]?.b}</button
			>
			<button
				on:click={() => handleClick('c')}
				class="bg-yellow rounded-lg  p-2 text-dark w-full text-semibold text-xl"
				>{$vocab_store[item]?.c}</button
			>
			<button
				on:click={() => handleClick('d')}
				class="bg-yellow rounded-lg  p-2 text-dark m-3 w-full text-semibold text-xl"
				>{$vocab_store[item]?.d}</button
			>
		</div>

		<a
			class="bg-red inline-block py-2 px-4  text-xl rounded-lg text-semibold"
			href="/Exercise/result">ยอมแพ้</a
		>
	{/if}
</div>
