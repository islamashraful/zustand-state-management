import React, { useContext } from "react";

interface Task {
  id: number;
  task: string;
}

interface ContextType {
  tasks: Task[];
}

const TasksContext = React.createContext<ContextType>({} as ContextType);

const App = () => {
  return (
    <TasksContext.Provider value={{ tasks: [{ id: 1, task: "Task 1" }] }}>
      <Navbar />
      <Home />
    </TasksContext.Provider>
  );
};

const Navbar = () => {
  const { tasks } = useContext(TasksContext);

  return <p>Total Tasks {tasks.length}</p>;
};

const Home = () => <TaskList />;

const TaskList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>
  );
};

export default App;
