import './App.css';
import Header from './ui/Header';
import Banner from './ui/Banner';
import MessagesList from './ui/MessagesList';
import NewMessage from './ui/NewMessage';
import FirebaseListener from './utils/FirebaseListener';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <MessagesList />
        <hr />
        <NewMessage />
      </main>
      <FirebaseListener />
    </div>
  );
}

export default App;
