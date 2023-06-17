import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import { TasksPage, NewTask, ViewTask } from './Tasks';

// tasks      => Show only a list of tasks
// tasks/new  => Show a list of tasks on the left side,
//               and a form to create new task to the right
//
// tasks/4    => Show a list of tasks on the left side
//               and the details of task #4 on the right

function Root() {
  return (
    <>
      <h1>Welcome To React Router</h1>
      <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/tasks',
        element: <TasksPage />,
        loader: async () => fetch('http://localhost:4000/tasks'),
        errorElement: <p>Error Loading Data</p>,
        children: [
          {
            path: 'new',
            element: <NewTask />
          },
          {
            path: ':id',
            loader: async ({params}) => fetch(`http://localhost:4000/tasks/${params.id}`),
            element: <ViewTask />
          }
        ]
      }
    ]
  }
]);

const router2 = createBrowserRouter(createRoutesFromElements(
  <Route element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/tasks" element={<TasksPage />}>
      <Route path="new" element={<NewTask />} />
      <Route path=":id" element={<ViewTask />} />
    </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
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
