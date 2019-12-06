import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Username from './username';
import Messages from './messages';

const App = (props) => (
  <Provider store={store}>
    <div className='app'>
      <Username />      
      <Username />      
      <Username />      
      <Messages />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
