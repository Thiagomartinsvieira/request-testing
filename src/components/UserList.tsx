import Image from 'next/image'
import React from 'react'

type UserListProps = {
  id: string
  login: string
  type: "User" | "Admin"
  site_admin: boolean
  avatar_url: string
  html_url: string
}

const UserList = ({id, avatar_url, login, site_admin, type, html_url}: UserListProps) => {



  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center border border-gray-200">
        <img
          src={avatar_url}
          alt={login}
          className="w-24 h-24 rounded-full mx-auto mb-4"   
        />
        <h2 className="text-xl text-gray-600 font-semibold mb-2">{login}</h2>
        <p className="text-sm text-gray-600 mb-1"><strong>ID:</strong> {id}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Tipo:</strong> {type}</p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Site Admin:</strong> {site_admin ? 'Sim' : 'Não'}
        </p>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Ver perfil no GitHub
        </a>
      </div>
    </div>
  )
}

export default UserList
