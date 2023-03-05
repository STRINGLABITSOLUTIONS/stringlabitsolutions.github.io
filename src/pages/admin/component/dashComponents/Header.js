import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between m-auto p-2'>
        <h1>Dashboard</h1>
        <div className='flex space-x-6'>
            <h1>User Name</h1>
            <div className='bg-purple-300 rounded-full ring-4 ring-green-500 w-6 h-6'></div>
            <div className='font-bold text-xl'>⁝</div>
        </div>
    </div>
  )
}
