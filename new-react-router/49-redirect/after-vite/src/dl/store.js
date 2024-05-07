import { configureStore, createSlice, nanoid, createAction } from '@reduxjs/toolkit';

export const createTask = createAction('tasks/create', (text, done) => {
  return {
    payload: {
      id: nanoid(),
      text,
      done,
    },
  };
});

const tasks = createSlice({
  name: 'tasks',
  initialState: { tasks: [
    { id: 1, text: 'write 50 words', done: false },
    { id: 2, text: 'read react code', done: true },
  ] },

  extraReducers: (builder) => {
    builder.addCase(createTask, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});


export default configureStore({
  reducer: {
    tasks: tasks.reducer,
  },
})


