import React from 'react'
import Blogs from './dashComponents/Blogs'
import Header from './dashComponents/Header'
import Products from './dashComponents/Products'
import Testimonials from './dashComponents/Testimonials'
import LogoClouds from './dashComponents/LogoClouds'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      {/* --------Header-------- */}
      <div className='col-span-12'>
        <Header/>
      </div>
      {/* --------Products-------- */}
      <div className='col-span-7'>
        <Products/>
      </div>
      {/* --------Testimonials-------- */}
      <div className='col-span-5'>
        <Testimonials/>
      </div>
      {/* --------logo Clouds-------- */}
      <div className='col-span-3'>
        <LogoClouds/>       
      </div>
      {/* --------Pricing-------- */}
      <div className='text-center bg-gray-600 col-span-3'>
        <div>Pricing</div>
      </div>
      {/* --------Blogs-------- */}
      <div className='text-center bg-gray-600 col-span-6'>
        <Blogs/>
      </div>
    </div>
  )
}
