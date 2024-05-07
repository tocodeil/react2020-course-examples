import app from '../firebase';
import { useSelector } from 'react-redux';
import { collection, addDoc, serverTimestamp, getFirestore } from "firebase/firestore";

async function sendMessage(from, text) {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "messages"), {
    from,
    text,
    createdAt: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}

export default function NewMessage() {
  const username = useSelector(state => state.account.name);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input');
    sendMessage(username, input.value);

    input.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Message Text
        <input type="text" />
      </label>
      <button>Send</button>
    </form>
  );
}

