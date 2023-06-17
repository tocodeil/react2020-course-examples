import {
  Outlet,
  NavLink,
  useParams,
  useLoaderData,
} from "react-router-dom";
import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then(res => res.json())

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
  const task = useLoaderData();  

  return (
    <div>
      <p>{JSON.stringify(task)}</p>
      <p>{task.text}</p>
      <p>Task is {task.done ? "Done" : "Not Done"}</p>
    </div>
  );
}

export function NewTask() {
  return (
    <form>
      <label>Task Text:
        <input type="text" />
      </label>
      <input type="checkbox" /><label>Done</label>
      <button>Create</button>
    </form>
  );
}
