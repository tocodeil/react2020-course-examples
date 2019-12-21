import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Username from './username';
import Messages from './messages';
import SendMessage from './send_message';

const App = (props) => (
  <Provider store={store}>
    <div className='app'>
      <Username />   
      <SendMessage />   
      <Messages />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
