import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

const App = (props) => (
  <p>Hello World</p>
);

ReactDOM.render(<App />, document.querySelector('main'));
