import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../features/tasks/taskSlice";
import CheckboxComplete from "../Checkbox/CheckboxComplete";
import CheckboxInComplete from "../Checkbox/CheckboxIncomplete";
import { RxCross1 } from "react-icons/rx";
import { Task } from "../../types";
import "./taskStyle.css";

interface TaskProps {
  task: Task;
}

function TaskItem({ task }: TaskProps) {
  const dispatch = useDispatch();

  return (
    <div
      className="task_line_text"
      key={task.name}
      onClick={() => dispatch(toggleTask(task))}
    >
      {task.done ? <CheckboxComplete /> : <CheckboxInComplete />}
      <p
        className="task_text"
        style={{
          color: task.done ? "#A8A8B4" : "#575767",
          textDecoration: task?.done ? " line-through" : "",
        }}
      >
        {task.name}
      </p>
      <div className="task_cross">
        <RxCross1
          color={"#575767"}
          onClick={() => dispatch(deleteTask(task.id))}
        />
      </div>
    </div>
  );
}

export default TaskItem;
