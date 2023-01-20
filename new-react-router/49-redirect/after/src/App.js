import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './dl/store';
import { TasksPage, NewTask, ViewTask } from './Tasks';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>Welcome To React Router</h1>
        <nav>
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={<TasksPage />}>
            <Route index element={<p>I'm The Index</p>} />
            <Route path="new" element={<NewTask />} />
            <Route path=":id" element={<ViewTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
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
