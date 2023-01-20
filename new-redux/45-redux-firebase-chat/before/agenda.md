# Redux Firebase Demo

- [x] Intro To Firebase
  - Serverless code
  - Realtime database

- [x] Setup a new firebase project

- [x] Our starter code

- [x] Sending messages

- [x] Receiving messages

- [ ] Your turn - allow delete message


















## Firebase Templates

Imports:
```
import { collection, query, onSnapshot, addDoc, serverTimestamp, getFirestore, orderBy } from "firebase/firestore";
```


Send message:

```
export async function sendMessage(from, text) {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "messages"), {
    from,
    text,
    createdAt: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}
```



Subscribe to messages:

```
function subscribeToMessages() {
  const db = getFirestore(app);

  const q = query(collection(db, "messages"), orderBy("createdAt"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(JSON.stringify(doc.data()));
    });
  });
}

```

