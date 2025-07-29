import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAYMtn2UDhZF9suTGZaUt2-gUt61ijIYB0",
  authDomain: "movie-mvp-3aca8.firebaseapp.com",
  projectId: "movie-mvp-3aca8",
  storageBucket: "movie-mvp-3aca8.firebasestorage.app",
  messagingSenderId: "723624871995",
  appId: "1:723624871995:web:a80f74a11d2f64a8da741e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);