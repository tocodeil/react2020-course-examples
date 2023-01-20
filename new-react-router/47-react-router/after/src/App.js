import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Cool Web App</h1>
        <nav>
          <h2>Navigate with a</h2>
          <a href="/">Home page</a>
          <a href="/about">About page</a>
          <a href="/contact">Contact page</a>
        </nav>

        <nav>
          <h2>Navigate with Link</h2>
          <Link to="/">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/contact">Contact Page</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>Written By Ynon Perek</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <p>Home page</p>
}

function About() {
  return <p>About page</p>
}

function Contact() {
  return <p>Leave us a message</p>
}





















export default App;
