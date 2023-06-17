import './App.css';
import { TasksPage, ViewTask, NewTask } from './Tasks';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  defer,
} from "react-router-dom";

// tasks      => Show only a list of tasks
// tasks/new  => Show a list of tasks on the left side,
//               and a form to create new task to the right
//
// tasks/4    => Show a list of tasks on the left side
//               and the details of task #4 on the right

// createBrowserRouter

function Layout() {
  return (
    <>
      <h1>Welcome To React Router</h1>
      <nav>
        <h2>Navigation with &lt;Link/&gt; Component</h2>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/about">About Page</NavLink>
        <NavLink to="/contact">Contact Page</NavLink>
        <NavLink to="/tasks">Tasks Page</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

const routesObjectSyntax = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/tasks',
        element: <TasksPage />,
        loader: async () => fetch('http://localhost:4000/tasks'),
        action: async ({request}) => {
          const formData = await request.formData();
          return fetch('http://localhost:4000/tasks', {
            body: formData,
            method: 'POST',
          })
        },
        errorElement: <p>Tasks server not available</p>,
        children: [
          { index: true, element: <p>Main Tasks Page</p> },
          { path: 'new', element: <NewTask /> },
          {
            path: ':id',
            element: <ViewTask />,
            loader: async ({params}) => defer({
              task: fetch(`http://localhost:4000/tasks/${params.id}`).then(r => r.json()),
            }),
          },
        ],
      },
    ],
  },
];

const routesJsxSyntax = createRoutesFromChildren(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tasks" element={<TasksPage />}>
      <Route index element={<p>Main Tasks Page</p>} />
      <Route path="new" element={<NewTask />} />
      <Route path=":id" element={<ViewTask />} />
    </Route>
  </Route>);

const router = createBrowserRouter(routesObjectSyntax);






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
