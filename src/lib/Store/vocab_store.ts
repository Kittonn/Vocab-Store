import { writable } from 'svelte/store';
import { vocab } from '$lib/Data/Vocab';

const vocabStore = writable(vocab);

export default vocabStore;
