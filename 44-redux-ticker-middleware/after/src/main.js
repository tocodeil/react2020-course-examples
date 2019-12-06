import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider, connect } from 'react-redux';

function mapStateToClockProps(state) {
  return { ticks: state.ticks };
}

const Clock = connect(mapStateToClockProps)(function Clock(props) {
  const { ticks } = props;

  return (
    <p>Tick, Tock... {ticks}</p>
  );
});

const App = () => {
  return (
    <Provider store={store}>
      <Clock />
    </Provider>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
