import React from 'react';
import ReactDOM from 'react-dom';
import { MyForm } from './pages';
import { Page1, Page2 } from './hello_container';

const App = () => {

  return (
    <div>
      <Page1 />
      <MyForm />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
