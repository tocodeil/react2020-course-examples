import { useSelector } from 'react-redux';
import { sendMessage } from '../firebase';

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

