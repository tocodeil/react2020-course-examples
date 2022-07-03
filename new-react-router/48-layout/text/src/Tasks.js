import {
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";

const tasks = [
  { id: 1, text: 'write 50 words', done: false },
  { id: 2, text: 'read react code', done: true },
];

export function TasksPage() {
  return (
    <div className="tasks-page">
      <div className="left">
        <TasksList />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}

export function TasksList() {
  return (
    <ul>
      <li><NavLink to="new">New Task</NavLink></li>
      {tasks.map(t => (
        <li key={t.id}><input type="checkbox" checked={t.done} readOnly />
          <NavLink to={String(t.id)}>{t.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export function ViewTask() {
  const { id } = useParams();
  const task = tasks.find(t => String(t.id) === String(id));

  if (!task) {
    return <p>Task {id} not found</p>
  }

  return (
    <div>
      <p>{JSON.stringify(task)}</p>
      <p>{task.text}</p>
      <p>Task is {task.done ? "Done" : "Not Done" }</p>
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
