import React from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import Blogs from '../component/dashComponents/Blogs';
import Header from '../component/Header';
import Products from '../component/dashComponents/Products';
import Testimonials from '../component/dashComponents/Testimonials';
import LogoClouds from '../component/dashComponents/LogoClouds';

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      {/* --------Header-------- */}
      <div className='col-span-12'>
        <Header />
      </div>
      {/* --------Products-------- */}
      <div className='col-span-7'>
        <Products />
      </div>
      {/* --------Testimonials-------- */}
      <div className='col-span-5'>
        <Testimonials />
      </div>
      {/* --------logo Clouds-------- */}
      <div className='col-span-3'>
        <LogoClouds />
      </div>
      {/* --------Pricing-------- */}
      <div className='text-center bg-gray-600 col-span-3'>
        <div className='flex items-center gap-3'>
          <BiMoneyWithdraw /> Pricing
        </div>
      </div>
      {/* --------Blogs-------- */}
      <div className='col-span-6'>
        <Blogs />
      </div>
    </div>
  );
}
