<script lang="ts">
	import Header from '$lib/Components/Header.svelte';
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
	import type { vocabI } from '$lib/Interfaces/vocab_interface';

	let vocab = '';
	let answer = '';
	let a = '';
	let b = '';
	let c = '';
	let d = '';

	const handleSubmit = async () => {
		console.log(vocab, answer, a, b, c, d);
		try {
			let new_vocab: vocabI = { vocab: vocab, answer: answer, a: a, b: b, c: c, d: d };
			await addDoc(collection(db, 'vocab'), new_vocab);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="text-center">
	<Header />
</div>
<div class="bg-white text-black   w-[350px]   shadow-md p-6 rounded-2xl">
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label class="text-lg" for="">Vocabulary</label>
			<input
				bind:value={vocab}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">Answer</label>
			<input
				bind:value={answer}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg  m-3 ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">A</label>
			<input
				bind:value={a}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">B</label>
			<input
				bind:value={b}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg m-3 ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">C</label>
			<input
				bind:value={c}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">D</label>
			<input
				bind:value={d}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg m-3 ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div class="flex justify-center items-center">
			<button class="bg-green py-1 px-3   text-lg text-white rounded-lg text-semibold"
				>Submit</button
			>
		</div>
	</form>
</div>
