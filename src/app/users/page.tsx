"use client";

import React, { useEffect, useState, useRef } from "react";
import UserList from "@/components/UserList";
import { getAllUsers } from "@/services/userService";

type UserListType = {
  id: string;
  login: string;
  type: "User" | "Admin";
  site_admin: boolean;
  avatar_url: string;
  html_url: string;
};

const Page = () => {
  const [users, setUsers] = useState<UserListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [since, setSince] = useState(0);
  const [page, setPage] = useState(12);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const getInitialUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllUsers(since, page);
      setUsers((prevUsers) => [...prevUsers, ...response?.data]);
    } catch (error) {
      console.error("Error to get my users", error);  
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialUsers();
  }, [page]);

useEffect(() => {
  if (!sentinelRef.current) return;

  const intersectionObserver = new IntersectionObserver((entries) => {
          console.log("Estamos observando", entries);
      
    if (entries.some((entry) => entry.isIntersecting)) {
      console.log("Elemento está visível...");
      setPage((currentPageInsideState) => currentPageInsideState + 1)
    }
  });

  
  const currentSentinel = sentinelRef.current
  intersectionObserver.observe(currentSentinel)

   return () => {
    if (currentSentinel) intersectionObserver.unobserve(currentSentinel);
    intersectionObserver.disconnect();
  };
}, [users]);


  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Lista de Usuários do GitHub - {page}
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Carregando usuários...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserList
              key={user.id}
              avatar_url={user.avatar_url}
              id={user.id}
              type={user.type}
              login={user.login}
              html_url={user.html_url}
              site_admin={user.site_admin}
            />
          ))}
          <div ref={sentinelRef} className="bg-red-700 p-2" />
        </div>
      )}
    </main>
  );
};

export default Page;
