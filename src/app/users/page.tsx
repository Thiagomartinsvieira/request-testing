'use client';

import React, { useEffect, useState } from 'react';
import UserList from '@/components/UserList';
import { gatAllUsers } from '@/services/userService';


type UserListType = {
  id: string
  login: string
  type: "User" | "Admin"
  site_admin: boolean
  avatar_url: string
  html_url: string
}


const Page = () => {

  const [users, setUsers] = useState<UserListType[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("users: ", users)


  const getInitialUsers = async () => {
    setLoading(true)
    try {
      const reponse = await gatAllUsers()
      setUsers(reponse?.data)
    } catch (error) {
      console.error("Error to get my users", error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getInitialUsers()
  }, [])

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Lista de Usuários do GitHub
      </h1>
      {users.map((user) =>
        <UserList key={user.id} avatar_url={user.avatar_url} id={user.id} type={user.type} login={user.login} html_url={user.html_url} site_admin={user.site_admin} />
      )}
    </main>
  );
};

export default Page;
