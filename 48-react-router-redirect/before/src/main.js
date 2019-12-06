import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './login';
import User from './user';
import store from './redux/store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
