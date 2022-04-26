<script script lang="ts">
	import Home from '$lib/Components/Home.svelte';
	import { onDestroy } from 'svelte';
	import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
	import { app } from '$lib/firebase';
	import vocab_store from '$lib/Store/vocab_store';

	const db = getFirestore(app);
	let list: any = [];
	const unsub = onSnapshot(collection(db, 'vocab'), (querySnapshot) => {
		list = querySnapshot.docs.map((doc) => {
			return { ...doc.data(), id: doc.id };
		});
		vocab_store.set(list);
	});

	onDestroy(unsub);
</script>

<div class="p-5">
	<Home />
	<!-- {$vocab_store[0].id} -->
</div>
