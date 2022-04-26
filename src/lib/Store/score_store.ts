import { writable } from 'svelte/store';

type dataT = { score: number; item: number };

const data:dataT = { score: 0, item: 0 };

const score_store = writable(data);

export default score_store;
