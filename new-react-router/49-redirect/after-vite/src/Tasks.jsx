import { useSelector, useDispatch } from 'react-redux';
import { createTask } from './dl/store';
import {
  Outlet,
  NavLink,
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

export function TasksPage() {
  const location = useLocation();

  return (
    <>
    {location.state && <div className="error">
      {location.state}
    </div>
      }
    <div className="tasks-page">
      <div className="left">
        <TasksList />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
    </>
  );
}

export function TasksList() {
  const tasks = useSelector(state => state.tasks.tasks);

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
  const tasks = useSelector(state => state.tasks.tasks);
  const task = tasks.find(t => String(t.id) === String(id));

  if (!task) {
    return <Navigate to="../new" state={`Sorry task ${id} not found`} />
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const textInput = form.querySelector('input[type="text"]');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const action = dispatch(createTask(textInput.value, checkbox.checked));

    // navigate to the new task
    const { id } = action.payload;
    console.log(action);
    navigate(`../${id}`, { state: "Task created OK" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Text:
        <input type="text" />
      </label>
      <input type="checkbox" /><label>Done</label>
      <button>Create</button>
    </form>
  );
}

