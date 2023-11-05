import { useState } from "react";

interface Task {
  id: number;
  task: string;
}

const App = () => {
  const [tasks] = useState<Task[]>([{ id: 1, task: "Task 1" }]);

  return (
    <>
      <Navbar tasks={tasks} />
      <Home tasks={tasks} />
    </>
  );
};

const Navbar = ({ tasks }: { tasks: Task[] }) => (
  <p>Total Tasks {tasks.length}</p>
);

const Home = ({ tasks }: { tasks: Task[] }) => <TaskList tasks={tasks} />;

const TaskList = ({ tasks }: { tasks: Task[] }) => (
  <ul>
    {tasks.map((item) => (
      <li key={item.id}>{item.task}</li>
    ))}
  </ul>
);

export default App;
