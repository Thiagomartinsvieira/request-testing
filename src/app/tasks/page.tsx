"use client";

import { useTaskStore } from '@/store/useTaskStore';
import { useState } from 'react';

const Page = () => {
  const [task, setTask] = useState('');

  const { tasks } = useTaskStore()

  const handleAddTask = () => {
    if (!task.trim()) return;
    console.log('Adicionar tarefa:', task)
    setTask(''); 
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Lista de tarefas - total {tasks.length}
      </h1>

      <div className="flex justify-center mb-4 gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite sua tarefa"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

    </main>
  );
};

export default Page;
