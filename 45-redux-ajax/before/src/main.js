import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import StarwarsCharacter from './starwars_character';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StarwarsCharacter />
        <StarwarsCharacter />
        <StarwarsCharacter />
      </div>
    </Provider>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
