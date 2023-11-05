import useTasksStore from "./tasks/store";

const Navbar = () => {
  const tasks = useTasksStore((s) => s.tasks);

  console.log("Navbar rendered!");

  return <p>Total Tasks {tasks.length}</p>;
};

export default Navbar;
