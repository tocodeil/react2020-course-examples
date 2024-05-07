import { collection, query, onSnapshot, addDoc, serverTimestamp, getFirestore, orderBy } from "firebase/firestore";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setMessages } from '../dl/slices/messages';
import app from '../firebase';

export default function MessagesListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getFirestore(app);

    const q = query(collection(db, "messages"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        const msg = doc.data();
        messages.push({ id: doc.id, text: msg.text, from: msg.from });
      });
      dispatch(setMessages(messages));
    });

  return unsubscribe;
  }, []);
  return <></>;
}

