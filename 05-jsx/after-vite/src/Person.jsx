export default function Person(props) {
  const { name } = props;

  const style = {
    color: 'blue',
    fontSize: '18px',
  }

  if (name.length > 3) {
    style.color = 'red';
  }

  return (
    <div style={style}>
        <h2>Hello {name}</h2>
    </div>
  );
}


