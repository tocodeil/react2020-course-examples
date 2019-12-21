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
  Link,
  withRouter,
} from "react-router-dom";


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Flash />
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


const Flash = withRouter(function Flash(props) {
  const { state } = props.location;

  if (state && state.flash) {
    return <p className='flash'>{state.flash}</p>
  }

  return false;
});














// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
