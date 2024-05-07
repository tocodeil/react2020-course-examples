import React, { useState } from 'react';
import _ from 'lodash';

function CheckableList(props) {
  const { items, renderItem } = props;
  const [ count, setCount ] = useState(0);

  function reset() {
    setCount(c => c + 1);
  }

  return (
    <>
    <button onClick={reset}>Unselect All</button>
    <ul key={count}>
      {items.map(item => (
        <li key={item}>
          <label>            
            <input type="checkbox" />
            {renderItem(item)}
          </label>
        </li>
      ))}
    </ul>
    </>
  );
}

CheckableList.defaultProps = {
  renderItem: (itemText) => itemText,
}


const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five']);
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow', 'pink']);

  function shuffle() {
    setItems(_.shuffle(items));         
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <CheckableList items={items} />
      <CheckableList items={colors} renderItem={(itemText) => <span style={{color: itemText}}>{itemText}</span>} />
    </div>
  )
};

export default App
