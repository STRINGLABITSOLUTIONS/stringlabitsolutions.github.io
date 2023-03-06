import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Product() {
  const products = [
    {
      id: uuidv4(),
      image:
        'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'BONIK - Inventory Management System: Model Pharmecy',
      description:
        'To increase your performance and productivity for your model pharmecy "BONIK" will be your perfect choise',
      link: '#',
      date: 'Aug 27 2022',
    },
    {
      id: uuidv4(),
      image:
        'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'BHUJON - Restaurant Management System: Offline Services',
      description:
        'To increase your performance and productivity for your model pharmecy "BHUJON" will be your perfect choise',
      link: '#',
      date: 'Feb 08 2023',
    },
  ];

  return (
    <div className='py-16'>
      <div className='xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='m-auto text-center lg:w-8/12 xl:w-7/12 mt-10 mb-10'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            Our top ranked products.
          </h2>
        </div>
        <div className='grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12'>
          {products?.map(({ id, image, title, description, link, date }) => (
            <div className='group space-y-6' key={id}>
              <img
                src={image ?? '404'}
                alt='art cover'
                loading='lazy'
                width='1000'
                height='667'
                className='h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl'
              />
              <h3 className='text-3xl font-semibold text-gray-800 dark:text-white'>
                {title ?? 'No Title'}
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                {description ?? 'No Description'}
              </p>
              <div className='flex gap-6 items-center'>
                <Link
                  to={link ?? '404'}
                  className='-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800'>
                  <span className='block font-semibold text-base text-gray-600 dark:text-gray-200'>
                    View Demo.
                  </span>
                </Link>
                <span className='w-max block font-light text-gray-500 sm:mt-0'>
                  {date ?? 'Jan 01 1900'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
