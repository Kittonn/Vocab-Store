import { writable } from 'svelte/store';
import type { wrongI } from '$lib/Interfaces/wrong_interface';

const list: wrongI[] = [];

const wrong_store = writable(list);

export default wrong_store;
