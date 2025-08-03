'use client';

import React, { useEffect, useState } from 'react';
import UserList from '@/components/UserList';
import { gatAllUsers } from '@/services/userService';


type UserListType = {
    id: string
    login: string;
    avatar_url: string;
    html_url: string;
}


const Page = () => {

  const [users, setUsers] = useState<UserListType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInitialUsers()
  }, [])

  const getInitialUsers = () => {
    setLoading(true)
    try {
        const response = gatAllUsers()
        console.log("response: ", response)
    } catch (error) {
        console.error("Error to get my users", error)
    } finally {
        setLoading(false)
    }
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Lista de Usuários do GitHub
      </h1>
      <UserList />
    </main>
  );    
};

export default Page;
