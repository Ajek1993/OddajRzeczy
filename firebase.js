import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMA0VtDSLnWMYGPw5WzN4WLqIhlYbxS1U",
  authDomain: "oddaj-rzeczy-4d48b.firebaseapp.com",
  projectId: "oddaj-rzeczy-4d48b",
  storageBucket: "oddaj-rzeczy-4d48b.appspot.com",
  messagingSenderId: "1006000157357",
  appId: "1:1006000157357:web:0c829b681b85f35a7b8c24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
