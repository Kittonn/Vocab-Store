<script lang="ts">
	import score_store from '$lib/Store/score_store';
</script>

<div class="bg-white text-white text-center  w-[350px]   shadow-md p-6 rounded-2xl">
	<img src="/giphy.gif" alt="" />
	<div class="text-black">
		<div class="text-5xl font-bold m-3">{$score_store.score} / {$score_store.item}</div>
		<p>คุณเก่งมากๆแล้ว พยายามสู้ๆต่อไปนะ</p>
	</div>
	<div class="flex flex-col justify-center items-center">
		<a
			class="border-red border-2 m-3  text-red py-1 px-3 hover:text-white hover:bg-red rounded-lg text-semibold"
			href="/Exercise/wrong">ดูคำศัพท์ที่ผิด</a
		>

		<a
			on:click={() => score_store.set({ ...$score_store, score: 0 })}
			class="border-green border-2  text-green py-1 px-3 hover:text-white hover:bg-green rounded-lg text-semibold"
			href="/Exercise">เริ่มทำข้อสอบใหม่</a
		>

		<a
			on:click={() => score_store.set({ ...$score_store, score: 0 })}
			class="border-yellow border-2  text-yellow py-1 px-3 mt-3 hover:text-white hover:bg-yellow rounded-lg text-semibold"
			href="/">กลับหน้าหลัก</a
		>
	</div>
</div>
