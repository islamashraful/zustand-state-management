import { create } from "zustand";

interface Task {
  id: number;
  task: string;
}

interface TasksStore {
  tasks: Task[];
  visible: boolean;
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  toggleVisible: () => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  visible: false,
  addTask: (task) => set((store) => ({ tasks: [...store.tasks, task] })),
  removeTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((item) => item.id !== id)
    })),
  toggleVisible: () => set((store) => ({ visible: !store.visible }))
}));

export default useTasksStore;
