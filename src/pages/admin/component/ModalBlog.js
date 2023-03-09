import React from 'react'
import {CgCloseO} from 'react-icons/cg'

export default function ModalBlog({mData, visible, onClose}) {
    if(!visible) return null;
    function handleOnClose (e){
        if (e.target.id === "container") onClose();
    }
    
  return (
    <div id='containerXXXXX' onClick={handleOnClose} className={`fixed h-screen w-screen inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center`}>
      <div className='relative bg-gray-700 h-4/5 w-5/6 rounded-lg shadow-2xl shadow-yellow-500'>
        <div className='absolute -top-2 -right-2'>
            <CgCloseO onClick={onClose} size={32} className='cursor-pointer text-red-400 hover:scale-110 hover:text-red-500'/>
        </div>
        <div className='flex items-center justify-center mx-auto'>
            <h1 className='text-xl p-3'>Edit Blog: {mData.title}</h1>
        </div>
        <div className='w-56 h-10 bg-black'>
            <p>{mData.title}</p>
        </div>
      </div>
    </div>
  )
}
