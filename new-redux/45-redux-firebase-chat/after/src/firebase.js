// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyARj9PQS5D7d3Gexz7C5Pztv6QhkMX4P_I",
  authDomain: "react-demo-redux-chat-yay.firebaseapp.com",
  projectId: "react-demo-redux-chat-yay",
  storageBucket: "react-demo-redux-chat-yay.appspot.com",
  messagingSenderId: "977300402669",
  appId: "1:977300402669:web:93bdd2bb4736f8f5bfb7e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
