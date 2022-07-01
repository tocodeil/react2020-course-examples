import { useSelector } from 'react-redux';

export default function MessagesList() {
  const messages = useSelector(state => state.messages);

  return (
    <ul>
      {messages.map(m => (
        <li key={m.id}><b>{m.from}</b> {m.text}</li>
      ))}
    </ul>
  );
}
