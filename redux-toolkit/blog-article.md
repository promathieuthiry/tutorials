# Mastering Redux Toolkit in Your React Projects: A To-Do List Adventure

## Introduction

Let's dive into creating a To-Do List application using React, TypeScript, and Redux Toolkit. Redux Toolkit is an efficient tool for managing the state in React applications, making it easier and more predictable. We'll learn how to use Redux Toolkit to create a store, dispatch actions, and create reducers. We'll also learn how to use the useSelector and useDispatch hooks to access the state and dispatch actions. By the end of this course, you'll have a solid understanding of how to use Redux Toolkit to manage the state in your React applications. The design is inspired from this great [design](https://www.figma.com/community/file/1150744274711591955) spotted on figma.

![Rss image screenshot](https://raw.githubusercontent.com/promathieuthiry/tutorials/main/redux-toolkit/src/assets/preview-mobile.jpeg)

## Getting Started

### Setting Up Our Project

Let's kick things off by setting up our project. We'll create a new React app using vite with TypeScript support:

```bash
npm create vite@latest
```

Next, we install Redux Toolkit, React-Redux and uuid to generate unique ids for our todos :

```bash
npm install @reduxjs/toolkit react-redux uuid @types/uuid
```

## Building Our To-Do List

### Creating a Slice with Redux Toolkit

A slice in Redux Toolkit is where we define our reducers and actions. First, let's create a folder `features` and inside it we create slice. Then, create another folder `tasks` and inside it, create a file named `taskSlice.ts`.

```typescript
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string;
  name: string;
  done: boolean;
};

export type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [
    {
      id: uuidv4(),
      name: "Go to the Grocery Store",
      done: false,
    },
  ],
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        name: action.payload,
        done: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    // more reducers...
  },
});

export const { addTask } = TasksSlice.actions;

export default TasksSlice.reducer;
```

### Creating a Store with Redux Toolkit

Next, let's create a store using Redux Toolkit. In the `src` folder, create a folder `state` and inside a file named `store.ts`.

```typescript
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    list: tasksReducer,
    // more reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Connecting Our Store to Our App

Now that we have a store, let's connect it to our app. In `main.tsx`, import the Provider component from React-Redux and the store we just created. Then, wrap the App component with the Provider component and pass in the store as a prop.

```typescript
import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Accessing the State with Redux Toolkit

Let's consume the store. In `App.tsx`, import the useSelector hook from React-Redux. Then, call the useSelector hook and pass in a function that returns the state. Finally, assign the return value to a variable.

```typescript
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { Task } from "../../types";

const App = () => {
  const tasks = useSelector((state: RootState) => state.list.tasks);

  return (
    <div>
      {tasks.map((task: Task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};
```

### Dispatching Actions with Redux Toolkit

Now that we have a store, let's dispatch an action. In `App.tsx`, import the `useDispatch` hook from React-Redux and the `addTask action` from our taskSlice. Then, call the useDispatch hook and assign it to a variable. Finally, call the dispatch method on the variable and pass in the `addTask action`.

```typescript
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

const App = () => {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.list.tasks);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask("");
  }

  return (
    <div className="task_wrapper">
      <div className="task_container">
        <form onSubmit={handleSubmit} className="task_form">
          <input
            type="input"
            value={newTask}
            onChange={(event) => setNewTask(event?.target.value)}
            className="form__field"
            placeholder="Add a task"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
            Add a task
          </label>
        </form>
      </div>
      <div>
        {tasks.map((task: Task) => {
          return (
            <div key={task.id}>
              <p>{task.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

### Add Reducers with Redux Toolkit

let's add different reducers. In `taskSlice.ts`, create a new reducer called `toggleTask` and pass in the state and action as parameters. Then, update the state to toggle the task.

```typescript
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types";

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        name: action.payload,
        done: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    toggleTask: (state, action) => {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (selectedTask) selectedTask.done = !selectedTask.done;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = TasksSlice.actions;
```

## Conclusion

And there we have it! We've ventured through the realms of Redux Toolkit, integrating it seamlessly with React and TypeScript. By building a simple yet functional To-Do List app, we've seen firsthand how these technologies blend together to create efficient and beautiful web applications. I hope you've enjoyed this tutorial and learned something new along the way. If you have any questions or comments, please feel free to reach out in the comments below. The repo is [here](https://github.com/promathieuthiry/tutorials/tree/main/redux-toolkit) and the live [website](https://redux-toolkit-topaz.vercel.app/) here.
Happy coding!
