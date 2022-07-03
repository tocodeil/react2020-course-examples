export default function NewMessage() {

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input');

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

