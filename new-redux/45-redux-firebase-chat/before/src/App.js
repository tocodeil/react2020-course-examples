import './App.css';
import Header from './ui/Header';
import Banner from './ui/Banner';
import MessagesList from './ui/MessagesList';
import NewMessage from './ui/NewMessage';

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
    </div>
  );
}

export default App;
