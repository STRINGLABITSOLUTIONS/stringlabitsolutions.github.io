import React from 'react';

export default function Testimonials() {
  return (
    <section className='p-2 bg-gray-600'>
      <div>Testimonials</div>
      <div className='p-2 rounded-lg'>
        <ul>
          <li className='mt-3 py-2 px-2 bg-gray-500 rounded-lg'>
            <div className='flex w-full space-x-4'>
              <div className='w-8 h-8 bg-gray-400 rounded-full ring-1'></div>
              <h1>Mr. Name</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates temporibus repellendus eaque! Tempore iure voluptatibus
              exercitationem numquam.
            </p>
          </li>
          <li className='mt-3 py-2 px-2 bg-gray-500 rounded-lg'>
            <div className='flex w-full space-x-4'>
              <div className='w-8 h-8 bg-gray-400 rounded-full ring-1'></div>
              <h1>Mr. Name</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates temporibus repellendus eaque! Tempore iure voluptatibus
              exercitationem numquam.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
