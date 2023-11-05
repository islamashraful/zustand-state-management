import { useShallow } from "zustand/react/shallow";
import useTasksStore from "./store";

const TaskList = () => {
  const { tasks, removeTask } = useTasksStore(
    useShallow((store) => ({
      tasks: store.tasks,
      addTask: store.addTask,
      removeTask: store.removeTask
    }))
  );

  console.log("TaskList rendered!");

  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>
          {item.task}{" "}
          <button onClick={() => removeTask(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
