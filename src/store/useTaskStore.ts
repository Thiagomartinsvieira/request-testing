import { create } from "zustand";

type Task = {
    id: string;
    text: string
}

type TaskStore = {
    tasks: Task[]
}

export const useTaskStore = create<TaskStore>(() => ({
    tasks: [{
        id: '1', text: 'Estudar PHP'
    }]
}))