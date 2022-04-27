<script lang="ts">
	import Header from './Header.svelte';
</script>

<div
	class="flex text-dark flex-row absolute top-0 left-0 justify-between w-full py-2 px-3 items-center"
>
	<a target="_blank" href="https://www.github.com/Kittonn">Github</a>
	<a href="/add">เพิ่มคำศัพท์</a>
</div>

<div class="text-center">
	<div class="animate-bounce">
		<Header />
	</div>
	<div class="mt-4 flex flex-col items-center justify-center">
		<a
			class=" border-2 border-dark  text-dark mb-5 hover:bg-dark hover:text-white  py-2 rounded-lg px-4 text-lg font-[Kanit]"
			href="/Exercise">กดเพื่อเริ่มเล่น</a
		>
	</div>
</div>
