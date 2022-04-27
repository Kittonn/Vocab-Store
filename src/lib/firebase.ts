import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyAlvLMeSQLbLXaLjWbVUPgGcbkqYq846LA',
	authDomain: 'vocab-store-kittonn.firebaseapp.com',
	projectId: 'vocab-store-kittonn',
	storageBucket: 'vocab-store-kittonn.appspot.com',
	messagingSenderId: '439712640056',
	appId: '1:439712640056:web:e27c74760e643eaf954acd'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
