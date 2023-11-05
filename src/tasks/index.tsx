import { useShallow } from "zustand/react/shallow";
import useTasksStore from "./store";
import TaskList from "./TasksList";

const Task = () => {
  const { tasks, addTask, toggleVisible } = useTasksStore(
    useShallow((store) => ({
      toggleVisible: store.toggleVisible,
      tasks: store.tasks,
      addTask: store.addTask
    }))
  );

  console.log("Task component rendered!");

  return (
    <>
      <button
        onClick={() =>
          addTask({ id: Date.now(), task: `Task ${tasks.length + 1}` })
        }
      >
        Add Task
      </button>
      <button onClick={toggleVisible}>Toggle Visible</button>
      <TaskList />
    </>
  );
};

export default Task;
