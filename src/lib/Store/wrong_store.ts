import { writable } from 'svelte/store';
import type { wrongI } from '$lib/Interface/wrong_interface';

const wrong: wrongI[] = [];

const wrongStore = writable(wrong);

export default wrongStore;
