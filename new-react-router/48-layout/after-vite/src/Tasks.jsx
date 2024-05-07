import { Outlet, useParams, Link, NavLink } from 'react-router-dom';

const tasks = [
  { id: 1, text: 'a first task', done: false },
  { id: 2, text: 'write code', done: true },
  { id: 3, text: 'learn react', done: true },
  { id: 4, text: 'fix code', done: false },
];

// /tasks/new
// /tasks/12

export function TasksPage() {
  return (
    <div className='tasks-page'>
      <div className='left'>
        <TasksList />
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </div>
  );
}

export function ViewTask() {
  const { id } = useParams();
  const task = tasks.find(t => t.id === Number(id));
  return (
    <div className="task-view">
      <p><b>Task:</b> {task.text}</p>
      <p><b>Done:</b> {JSON.stringify(task.done)}</p>
    </div>
  );

}

export function NewTask() {
  return (
    <form>
      <div>
        <label>
          Text:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Done
        </label>
      </div>
      <div>
        <button>Create</button>
      </div>
    </form>
  );
}

export function TasksList() {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input type="checkbox" checked={task.done} />
          <NavLink to={String(task.id)}>{task.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}













