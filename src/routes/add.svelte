<script>
	import Header from '$lib/Components/Header.svelte';
</script>

<div class="text-center">
	<Header />
</div>
<div class="bg-white text-black   w-[350px]   shadow-md p-6 rounded-2xl">
	<form>
		<div>
			<label class="text-lg" for="">Vocabulary</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg" type="text" />
		</div>
		<div>
			<label class="text-lg" for="">Answer</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg  m-3 ml-2 rounded-lg" type="text" />
		</div>
		<div>
			<label class="text-lg" for="">A</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg" type="text" />
		</div>
		<div>
			<label class="text-lg" for="">B</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg m-3 ml-2 rounded-lg" type="text" />
		</div>
		<div>
			<label class="text-lg" for="">C</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg ml-2 rounded-lg" type="text" />
		</div>
		<div>
			<label class="text-lg" for="">D</label>
			<input class="bg-[#f8f9fa] w-[180px] p-1 text-lg m-3 ml-2 rounded-lg" type="text" />
		</div>
		<div class="flex justify-center items-center">
			<button class="bg-green py-1 px-3   text-lg text-white rounded-lg text-semibold"
				>Submit</button
			>
		</div>
	</form>
</div>
