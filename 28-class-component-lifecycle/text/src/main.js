import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from './01_component_will_unmount.js';
import Demo2 from './02_component_did_mount.js';
import Demo3 from './03_get_derived_state_from_props.js';
import Demo4 from './04_component_did_update.js';
import Demo5 from './05_component_did_catch.js';

const App = () => {

  return (
    <div>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
