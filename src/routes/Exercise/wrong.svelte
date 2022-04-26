<script lang="ts">
	import wrong_store from '$lib/Store/wrong_store';
	console.table($wrong_store);
	let item = 0;
	const inc = () => {
		if (item !== $wrong_store.length - 1) {
			item++;
		}
	};

	const dec = () => {
		if (item !== 0) {
			item--;
		}
	};
</script>

<div class="bg-white  text-center  w-[350px]  shadow-md p-6 rounded-2xl text-black">
	{#if $wrong_store.length === 0}
		<h1>ไม่มีข้อมูล :(</h1>
		<a
			class="border-red mt-3 inline-block border-2 py-1 px-3  text-lg hover:bg-red hover:text-white text-red hover: rounded-lg text-semibold"
			href="/Exercise/result">กลับหน้าสรุปผล</a
		>
	{:else}
		<h1 class="text-6xl">{$wrong_store[item].vocab}</h1>
		<div class="text-xl">
			<p class="my-3">✅ ข้อที่ถูก คือ {$wrong_store[item].answer}</p>
			<p>❌ ข้อที่เลือก คือ {$wrong_store[item].choose}</p>
		</div>
		<div class="flex flex-row justify-between items-center">
			<button
				on:click={dec}
				class="my-3 bg-green py-1 px-3  text-lg text-white rounded-lg text-semibold"
				>ก่อนหน้า</button
			>
			<button on:click={inc} class="bg-green py-1 px-3  text-lg text-white rounded-lg text-semibold"
				>ข้อถัดไป</button
			>
		</div>
		<a
			class="border-red inline-block border-2 py-1 px-3  text-lg hover:bg-red hover:text-white text-red hover: rounded-lg text-semibold"
			href="/Exercise/result">กลับหน้าสรุปผล</a
		>
	{/if}
</div>
