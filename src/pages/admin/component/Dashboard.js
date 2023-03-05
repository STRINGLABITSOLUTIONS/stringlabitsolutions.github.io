import React from 'react'
import Header from './dashComponents/Header'
import Products from './dashComponents/Products'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      {/* --------Header-------- */}
      <div className='col-span-12'>
        <Header/>
      </div>
      {/* --------Products-------- */}
      <div className='col-span-8'>
        <Products/>
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
