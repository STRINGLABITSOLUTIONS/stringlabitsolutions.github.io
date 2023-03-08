import React from 'react'

export default function Header(props) {
  return (
    <div className='flex items-center justify-between m-auto px-6 pt-4'>
        <h1>{props.title}</h1>
        <div className='flex space-x-6'>
            <h1>User Name</h1>
            <div className='bg-purple-300 rounded-full ring-4 ring-green-500 w-6 h-6'></div>
            <button className='font-bold text-xl'>⁝</button>
        </div>
    </div>
  )
}
