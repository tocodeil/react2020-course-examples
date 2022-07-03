// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, query, onSnapshot, addDoc, serverTimestamp, getFirestore, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpeFbZNVkS5UrG8viKv3v1XyLBFtq9_VQ",
  authDomain: "react-redux-chat-cc99d.firebaseapp.com",
  databaseURL: "https://react-redux-chat-cc99d-default-rtdb.firebaseio.com",
  projectId: "react-redux-chat-cc99d",
  storageBucket: "react-redux-chat-cc99d.appspot.com",
  messagingSenderId: "53440237932",
  appId: "1:53440237932:web:1780a664f67ca0d34c6349"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;


async function main() {
  const db = getFirestore(app);

  const q = query(collection(db, "messages"), orderBy("createdAt"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(JSON.stringify(doc.data()));
    });
  });
}

main();

export async function sendMessage(from, text) {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "messages"), {
    from,
    text,
    createdAt: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}

window.sendMessage = sendMessage;
