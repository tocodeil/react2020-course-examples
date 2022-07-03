import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome To React Router</h1>
      <nav>
        <h2>Navigation with &lt;Link/&gt; Component</h2>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/contact">Contact Page</Link>
      </nav>
      <nav>
        <h2>Navigation with &lt;a/&gt; Tag</h2>
        <a href="/">Home Page</a>
        <a href="/about">About Page</a>
        <a href="/contact">Contact Page</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (<p>Home Page</p>);
}

function About() {
  return (<p>About Page</p>);
}

function Contact() {
  return (<p>Contact Page</p>);
}



export default App;
