import React, { useState } from 'react';

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prevValues) => {
      if (prevValues.includes(value)) {
        return prevValues.filter((v) => v !== value);
      } else {
        return [...prevValues, value];
      }
    });
    console.log(value);
  };
  return (
    <section className='bg-gray-600 p-3'>
      <div className='flex items-center justify-between'>
        <h1>Products</h1>
        <div className='relative inline-block'>
          <button
            className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup='true'>
            Select Products
          </button>
          {isOpen && (
            <div className='absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              <label className='block py-2 px-4 text-sm text-gray-700'>
                <input
                  type='checkbox'
                  name='options'
                  value='option1'
                  checked={selectedValues.includes('option1')}
                  onChange={handleCheckboxChange}
                />
                Option 1
              </label>
              <label className='block py-2 px-4 text-sm text-gray-700'>
                <input
                  type='checkbox'
                  name='options'
                  value='option2'
                  checked={selectedValues.includes('option2')}
                  onChange={handleCheckboxChange}
                />
                Option 2
              </label>
              <label className='block py-2 px-4 text-sm text-gray-700'>
                <input
                  type='checkbox'
                  name='options'
                  value='option3'
                  checked={selectedValues.includes('option3')}
                  onChange={handleCheckboxChange}
                />
                Option 3
              </label>
            </div>
          )}
        </div>
      </div>
      <div>
        <ul>
          <li className='flex items-center justify-between mt-3 py-2 px-2 bg-gray-500 rounded-lg'>
            <img
              className='w-24 h-14 rounded-lg object-cover'
              src='https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
              alt='bg'
            />
            <h1 className='text-left'>
              BONIK - Inventory Management System: Model Pharmecy
            </h1>
          </li>
          <li className='flex items-center justify-between mt-3 py-2 px-2 bg-gray-500 rounded-lg'>
            <img
              className='w-24 h-14 rounded-lg object-cover'
              src='https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
              alt='bg'
            />
            <h1 className='text-left'>
              BHUJON - Restaurant Management System: Offline Services
            </h1>
          </li>
        </ul>
      </div>
    </section>
  );
}
