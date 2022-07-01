import './App.css';
import _ from 'lodash';

function App() {
  const days = ['Sunday', 'Monday', 'Tuesday'];

  return (
    <div className="App">
      <p>The first day of the week is {_.head(days)}</p>
    </div>
  );
}

export default App;
