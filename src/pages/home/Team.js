import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import imageAbid from '../../media/images/member/abid.jpg';
import imagemontasim from '../../media/images/member/montasim.jpg';

export default function Team() {
  const teamMembers = [
    {
      id: uuidv4(),
      name: 'Montasim Mamun',
      designation: 'Co-Founder',
      image: imagemontasim,
      bioLink: '#',
    },
    {
      id: uuidv4(),
      name: 'Abid Hasan',
      designation: 'Co-Founder',
      image: imageAbid,
      bioLink: '#',
    },
  ];

  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto px-6 text-center md:px-12'>
        <div className='mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            String Lab leadership.
          </h2>
          <p className='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12'>
            At String Lab, we believe that leadership is not just a position,
            but a mindset. Our team is led by individuals who are passionate,
            driven, and committed to empowering others to succeed. With a focus
            on collaboration, creativity, and innovation, we strive to inspire
            our clients and team members to reach their full potential.
          </p>
        </div>
        <div className='grid gap-28 py-20 md:grid-cols-2 md:gap-12'>
          {teamMembers?.map(({ id, image, name, designation, bioLink }) => (
            <div
              key={id}
              className='group space-y-8 border-t-4 border-gray-100 dark:border-gray-800'>
              <div className='mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]'>
                <img
                  className='mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]'
                  src={image ?? '404'}
                  alt='leader images'
                  loading='lazy'
                  width='640'
                  height='805'
                />
              </div>
              <div className='space-y-4 text-center'>
                <div>
                  <h4 className='text-2xl text-gray-700 dark:text-white'>
                    {name ?? 'No Name'}
                  </h4>
                  <span className='block text-sm text-gray-500'>
                    {designation ?? 'No Designation'}
                  </span>
                </div>
                <NavLink
                  to={bioLink ?? '404'}
                  className='mx-auto block w-max text-gray-500 p-1 rounded-full hover:ring-1'>
                  View Bio
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
