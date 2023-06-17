import { Outlet, useParams, Link, NavLink, useLoaderData, Form } from 'react-router-dom';

// /tasks/new
// /tasks/12

export function TasksPage() {
  const tasks = useLoaderData();

  return (
    <div>
      <h2>Total tasks = {tasks.length}</h2>
    <div className='tasks-page'>
      <div className='left'>
        <TasksList tasks={tasks} />
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </div>
    </div>
  );
}

export function ViewTask() {
  const { id } = useParams();
  const task = useLoaderData();

  return (
    <div className="task-view">
      <p><b>Task:</b> {task.text}</p>
      <p><b>Done:</b> {JSON.stringify(task.done)}</p>
    </div>
  );

}

export function NewTask() {
  return (
    <Form action="/tasks" method="POST">
      <div>
        <label>
          Text:
          <input type="text" name="title" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="done" />
          Done
        </label>
      </div>
      <div>
        <button>Create</button>
      </div>
    </Form>
  );
}

export function TasksList({tasks}) {
  return (
    <ul>      
      <li>
        <NavLink to="new">New Task</NavLink>
      </li> 
      {tasks.map(task => (
        <li key={task.id}>          
          <NavLink to={String(task.id)}>{task.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}












