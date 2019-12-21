import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Username from './username';

const App = (props) => (
  <Provider store={store}>
    <div className='app'>
      <Username />      
      <Username />      
      <Username />      
      <p>Hello World</p>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
