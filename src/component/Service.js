import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Service() {
  const services = [
    {
      id: uuidv4(),
      title: 'Website development',
      image:
        'https://tailus.io/sources/blocks/illustrated/preview/images/icons/code.png',
      description:
        'Our team of expert web developers is dedicated to crafting custom websites that are tailored to your unique needs and goals. We specialize in creating responsive, user-friendly sites that provide a seamless experience across all devices.',
      link: '#',
    },
    {
      id: uuidv4(),
      title: 'Web-App development',
      image:
        'https://tailus.io/sources/blocks/illustrated/preview/images/icons/magic.png',
      description:
        'From e-commerce platforms to enterprise software solutions, we have the skills and expertise to create web applications that meet your unique needs. Contact us today to learn more about how we can help you take your business to the next level.',
      link: '#',
    },
    {
      id: uuidv4(),
      title: 'UI/UX design',
      image:
        'https://tailus.io/sources/blocks/illustrated/preview/images/icons/graphic.webp',
      description:
        'Our expert UI/UX designers have years of experience designing intuitive, user-friendly interfaces that drive engagement and conversions. We work closely with our clients to understand their unique brand and business objectives.',
      link: '#',
    },
  ];

  return (
    <div id='product' className='relative py-16'>
      <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
        <div className='m-auto text-center lg:w-8/12 xl:w-7/12 mt-10 mb-10'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            Our best Services. We love to provide the following Services bellow.
          </h2>
        </div>
        <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
          {services?.map(({ id, image, title, description }) => (
            <div
              key={id}
              className='group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none'>
              <img
                className='mx-auto w-24'
                src={image ?? '404'}
                alt='illustration'
                loading='lazy'
              />
              <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                {title ?? 'No Title'}
              </h3>
              <p>{description ?? 'No Description'}</p>
              <button className='relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125'>
                <span className='text-primary'>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
