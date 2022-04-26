import { writable } from 'svelte/store';
import type { vocabI } from '$lib/Interfaces/vocab_interface';
const vocab_list: vocabI[] = [];

const vocab_store = writable(vocab_list);

export default vocab_store;
