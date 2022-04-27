<script lang="ts">
	import Header from '$lib/Components/Header.svelte';
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
	import type { vocabI } from '$lib/Interfaces/vocab_interface';

	// let vocab = '';
	// let answer = '';
	// let a = '';
	// let b = '';
	// let c = '';
	// let d = '';

	let new_vocab: vocabI = { vocab: '', answer: '', a: '', b: '', c: '', d: '' };

	const handleSubmit = async () => {
		try {
			await addDoc(collection(db, 'vocab'), new_vocab);
		} catch (error) {
			console.log(error);
		}
		new_vocab = { vocab: '', answer: '', a: '', b: '', c: '', d: '' };
	};
</script>

<div class="text-center">
	<Header />
</div>
<div class="bg-white text-black   w-[350px]   shadow-md p-6 rounded-2xl">
	<h1 class="text-center text-xl mb-3">เพิ่มคำศัพท์</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label class="text-lg" for="">Vocabulary</label>
			<input
				bind:value={new_vocab.vocab}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">Answer</label>
			<input
				bind:value={new_vocab.answer}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg  m-3 ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">A</label>
			<input
				bind:value={new_vocab.a}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">B</label>
			<input
				bind:value={new_vocab.b}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg m-3 ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">C</label>
			<input
				bind:value={new_vocab.c}
				class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg"
				type="text"
			/>
		</div>
		<div>
			<label class="text-lg" for="">D</label>
			<input
				bind:value={new_vocab.d}
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
