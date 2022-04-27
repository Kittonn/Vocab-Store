import { writable } from 'svelte/store';
import type { vocabI } from '$lib/Interfaces/vocab_interface';
const vocab_list: vocabI[] | any = [];

const vocab_store = writable(vocab_list);

export default vocab_store;
