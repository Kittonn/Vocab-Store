<script lang="ts">
	import Header from './Header.svelte';
</script>

<div class="text-center">
	<div class="animate-bounce">
		<Header />
	</div>
	<div class="mt-4 flex flex-col items-center justify-center">
		<a
			class=" border-2 border-dark  text-dark mb-5 hover:bg-dark hover:text-white  py-2 rounded-lg px-4 text-lg font-[Kanit]"
			href="/Exercise">กดเพื่อเริ่มเล่น</a
		>
		<a
			class=" border-2 border-dark  text-dark  hover:bg-dark hover:text-white  py-2 rounded-lg px-4 text-lg font-[Kanit]"
			href="/add">เพิ่มคำศัพท์</a
		>
	</div>
</div>
