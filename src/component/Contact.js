import React from 'react';

export default function Contact() {
  return (
    <body
      id='contact'
      className='min-h-fit flex flex-col justify-center bg-white dark:bg-gray-900'>
      <div className='relative sm:py-16'>
        <div
          aria-hidden='true'
          className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0'>
          <div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
          <div className='blur-[106px] h-32 bg-gradient-to-r from-pink-400 to-yellow-300'></div>
        </div>
        <div className='relative xl:container m-auto px-6 text-gray-500 md:px-12'>
          <div className='m-auto space-y-8 sm:w-4/5 md:w-3/5 xl:w-2/5'>
            <div className='p-8 md:py-12'>
              <h2 className='mt-20 mb-8 text-3xl font-bold text-gray-800 dark:text-white'>
                Feel Free to connect String Lab.
              </h2>
              <form action='' className='space-y-8'>
                <div className='space-y-4'>
                  <label
                    htmlFor='username'
                    className='text-gray-600 dark:text-gray-300'>
                    What's your phone number or email ?
                  </label>
                  <div className='relative flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6 absolute left-4 inset-y-0 my-auto'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                      />
                    </svg>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      autocomplete='username'
                      placeholder='Phone number or email'
                      className='focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary'
                    />
                    <div className='absolute right-1'>
                      <button
                        type='submit'
                        className='relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'>
                        <span className='hidden relative text-base font-semibold text-white dark:text-gray-900 sm:block'>
                          Next
                        </span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='relative w-5 h-5 text-white dark:text-gray-900 sm:hidden'>
                          <path
                            fillRule='evenodd'
                            d='M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <p className='border-b border-gray-100 dark:border-gray-700text-gray-500 text-sm pb-6'>
                  By proceeding, you consent to get calls, WhatsApp or SMS
                  messages, including by automated means, from Tailus and its
                  affiliates to the number provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
