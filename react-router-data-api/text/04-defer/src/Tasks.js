import {
  Outlet,
  NavLink,
  useParams,
  useLoaderData,
  Form,
  Await
} from "react-router-dom";
import { Suspense } from "react";

export function TasksPage() {
  const tasks = useLoaderData();
  return (
    <div>
      <h2>{tasks.length} Tasks:</h2>
      <div className="tasks-page">
        <div className="left">
          <TasksList tasks={tasks} />
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export function TasksList({ tasks = [] }) {

  return (
    <ul>
      <li><NavLink to="new">New Task</NavLink></li>
      {tasks.map(t => (
        <li key={t.id}>
          <NavLink to={String(t.id)}>{t.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export function ViewTask() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p>Loading Task...</p>}>
      <Await
        resolve={data.task}
        errorElement={<p>Error loading task</p>}
      >
        {(task) => (
          <div>
            <p>{JSON.stringify(task)}</p>
            <p>{task.text}</p>
            <p>Task is {task.done ? "Done" : "Not Done"}</p>
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export function NewTask() {
  return (
    <Form action="/tasks" method="POST">
      <label>Task Text:
        <input type="text" name="title" />
      </label>
      <input type="checkbox" name="done" /><label>Done</label>
      <button>Create</button>
    </Form>
  );
}
