import { create } from 'zustand';

type Task = {
  id: string;
  text: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask(text) {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
    };

    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
}));
