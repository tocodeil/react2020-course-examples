import React, { useState, useRef } from 'react';

const MultiSelectAndDeleteList = (props) => {
  const { items } = props;
  const [ visibleItems, setVisibleItems ] = useState(items);  
  const ul = useRef(null);

  function reset() {
    setVisibleItems(items);
  }

  function deleteSelected() {
    const selectedInputs = ul.current.querySelectorAll('input:checked');
    const selectedItems = Array.from(selectedInputs).map(inp => inp.parentElement.textContent);
    setVisibleItems(v => v.filter(x => !selectedItems.includes(x)));
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={deleteSelected}>Delete</button>
      <ul ref={ul}>
        {visibleItems.map(item => (
          <li key={item}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

}


const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five'];
  return (
    <div>
      <MultiSelectAndDeleteList items={items} />
    </div>
  )
};


export default App
