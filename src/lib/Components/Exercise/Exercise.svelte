<script lang="ts">
	import type { vocabI } from '$lib/Interface/vocab_interface';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let allitem: number;
	export let currItem: number;
	export let vocabObject: vocabI;
	const handleClick = () => {
		dispatch('add_item');
	};
</script>

<div class="flex justify-between  items-center">
	<div class="bg-green rounded-lg px-3 py-1">0 คะแนน</div>
	<div class="bg-dark rounded-lg px-3 py-1">{currItem + 1} / {allitem}</div>
</div>
<div class="text-black text-6xl m-5">{vocabObject.vocab}</div>
<div class="flex flex-col justify-center items-center">
	<button
		on:click={handleClick}
		class="bg-yellow rounded-lg  p-2 text-dark w-full text-semibold text-xl">{vocabObject.a}</button
	>
	<button
		on:click={handleClick}
		class="bg-yellow rounded-lg  p-2 text-dark m-3 w-full text-semibold text-xl"
		>{vocabObject.b}</button
	>
	<button
		on:click={handleClick}
		class="bg-yellow rounded-lg  p-2 text-dark w-full text-semibold text-xl">{vocabObject.c}</button
	>
	<button
		on:click={handleClick}
		class="bg-yellow rounded-lg  p-2 text-dark m-3 w-full text-semibold text-xl"
		>{vocabObject.d}</button
	>
</div>
<button class="bg-red py-2 px-4  text-xl rounded-lg text-semibold">ยอมแพ้</button>
