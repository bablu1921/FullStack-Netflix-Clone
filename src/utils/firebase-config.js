import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA9eJaQGtT5zFUHqFt017W4dpW7ujYxG-A",
  authDomain: "react-netflix-clone-dc8c3.firebaseapp.com",
  projectId: "react-netflix-clone-dc8c3",
  storageBucket: "react-netflix-clone-dc8c3.appspot.com",
  messagingSenderId: "713522336860",
  appId: "1:713522336860:web:14e0d7a5d9eaa513dbc299",
  measurementId: "G-HK0ESPXXF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);