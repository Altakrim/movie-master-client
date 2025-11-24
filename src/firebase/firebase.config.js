import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";



const firebaseConfig = {
  apiKey: "AIzaSyBzhKSA6BAOB6VhFy0U_6xZvGLtKhC360A",
  authDomain: "movie-master-pro-21d17.firebaseapp.com",
  projectId: "movie-master-pro-21d17",
  storageBucket: "movie-master-pro-21d17.firebasestorage.app",
  messagingSenderId: "566199985298",
  appId: "1:566199985298:web:b18365e707404bb9fc724b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();