<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { wrongI } from '$lib/Interface/wrong_interface';
	const dispatch = createEventDispatcher();
	export let score: number;
	export let allitem: number;
	export let wrongStore: wrongI[];
	const restartClick = () => {
		dispatch('restart');
	};
	const wrongClick = () => {
		console.log(wrongStore);
	};
</script>

<div class="w-full h-0 pb-[56%] relative">
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		src="https://giphy.com/embed/BPJmthQ3YRwD6QqcVD"
		width="100%"
		height="100%"
		style="position:absolute"
		frameBorder="0"
		class="giphy-embed"
		allowFullScreen
	/>
</div>
<div class="text-black">
	<div class="text-5xl font-bold m-3">{score} / {allitem}</div>

	<p>คุณเก่งมากๆแล้ว พยายามสู้ๆต่อไปนะ</p>
</div>
<div class="flex flex-col justify-center items-center">
	<button
		on:click={wrongClick}
		class="border-red border-2 m-3  text-red py-1 px-3 hover:text-white hover:bg-red rounded-lg text-semibold"
		>ดูคำศัพท์ที่ผิด</button
	>
	<button
		on:click={restartClick}
		class="border-green border-2  text-green py-1 px-3 hover:text-white hover:bg-green rounded-lg text-semibold"
		>เริ่มทำข้อสอบใหม่</button
	>
</div>
