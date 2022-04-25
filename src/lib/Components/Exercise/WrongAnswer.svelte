<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { wrongI } from '$lib/Interface/wrong_interface';
	export let wrong_obj: wrongI[];
	export let wrong_item: number;

	const dispatch = createEventDispatcher();

	const next = () => {
		if (wrong_item !== wrong_obj.length - 1) {
			wrong_item++;
		}
	};

	const prev = () => {
		if (wrong_item !== 0) {
			wrong_item--;
		}
	};

	const back_home = () => {
		dispatch('back_home');
	};
</script>

<div class="text-black">
	<h1>{wrong_obj[wrong_item].vocab}</h1>
	<p>ถูก {wrong_obj[wrong_item].answer}</p>
	<p>เลือก {wrong_obj[wrong_item].choose}</p>
	<button on:click={prev}>ก่อนหน้า</button>
	<button on:click={next}>ถัดไป</button>
	<button on:click={back_home}>กลับหน้าหลัก</button>
</div>
