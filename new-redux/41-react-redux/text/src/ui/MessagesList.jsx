export default function MessagesList() {
  const messages = [
    { id: 1, from: 'user1', text: 'Hello World' },
    { id: 2, from: 'user2', text: 'Nice to see you' },
  ];

  return (
    <ul>
      {messages.map(m => (
        <li key={m.id}><b>{m.from}</b> {m.text}</li>
      ))}
    </ul>
  );
}
