// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wRj9KXUfzltl5WNA3zEbtf4dXXEvnzg",
  authDomain: "a-news-portal.firebaseapp.com",
  projectId: "a-news-portal",
  storageBucket: "a-news-portal.appspot.com",
  messagingSenderId: "896062884958",
  appId: "1:896062884958:web:3fd1d46aac700bde4178cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
