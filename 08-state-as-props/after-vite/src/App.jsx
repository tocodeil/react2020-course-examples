import { useState } from 'react'
import Counter from './Counter';

const App = () => {
  const [delta, setDelta] = useState(1);

  function handleChangeDelta(e) {
    const newValue = Number(e.target.value);
    setDelta(newValue);
  }

  return (
    <div>
      <label>
        Increase By:
        <input type="number" value={delta} onChange={handleChangeDelta} />
      </label>

      <Counter delta={delta} />
      <Counter delta={delta} />
    </div>
  )
};

export default App
