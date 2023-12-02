import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import { RootState } from "../../state/store";
import { Task } from "../../types";
import TaskItem from "./TaskItem";
import "./taskStyle.css";
import FooterTasks from "./FooterTask";

function ListTasks() {
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
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
      <FooterTasks />
    </div>
  );
}

export default ListTasks;
