import React from 'react'
import Header from './dashComponents/Header'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      {/* --------Header-------- */}
      <div className='text-center bg-gray-600 col-span-12 h-10'>
        <Header/>
      </div>
      {/* --------Projects-------- */}
      <div className='text-center bg-gray-600 col-span-8'>
        <div>Projects</div>
      </div>
      {/* --------Testimonials-------- */}
      <div className='text-center bg-gray-600 col-span-4'>
        <div>Testimonials</div>
      </div>
      {/* --------logo Clouds-------- */}
      <div className='text-center bg-gray-600 col-span-3'>
        <div>logo Clouds</div>        
      </div>
      {/* --------Pricing-------- */}
      <div className='text-center bg-gray-600 col-span-3'>
        <div>Pricing</div>
      </div>
      {/* --------Blogs-------- */}
      <div className='text-center bg-gray-600 col-span-6'>
        <div>Blogs</div>
      </div>
    </div>
  )
}
