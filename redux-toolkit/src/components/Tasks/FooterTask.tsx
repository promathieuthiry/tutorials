import { useSelector } from "react-redux";
import "./footerTaskStyle.css";
import { RootState } from "../../state/store";

function FooterTasks() {
  const tasks = useSelector((state: RootState) => state.list.tasks);

  const completed = tasks.filter((task) => task.done).length;
  const total = tasks.length;
  return (
    <div className="footer_tasks_container">
      <p className="footer_tasks_title">
        ✅ Completed: {completed}/{total}
      </p>
    </div>
  );
}

export default FooterTasks;
