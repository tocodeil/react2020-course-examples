import React from 'react';
import ReactDOM from 'react-dom';
// npm install --save-dev react-redux
import { Provider } from 'react-redux';
import Header from './header';
import Banner from './banner';
import store from './redux/store';
import './main.css';

const App = (props) => (
  <Provider store={store}>
   <div>
     <Header />
     <Banner />
   </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
