import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { collection, query, onSnapshot, getFirestore, orderBy } from "firebase/firestore";
import app from '../firebase';
import { setMessages } from '../dl/slices/messages';

export default function FirebaseListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getFirestore(app);

    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // doc.id
        const msg = doc.data();
        messages.push({ id: doc.id, from: msg.from, text: msg.text });
      });

      dispatch(setMessages(messages));
    });

    return unsubscribe;
  }, []);
  return <></>;
}

