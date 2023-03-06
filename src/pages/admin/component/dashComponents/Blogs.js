import { useState } from 'react'
import Data from '../../../../data/blogs.json'

export default function Blogs() {
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
    <div>
        <div className='flex items-center justify-between'>
            <h1>Blogs</h1>
            <div className="relative inline-block">
                <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={()=>setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="true">
                    Select options
                </button>
                {isOpen && (
                    <div className="absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <label className="block py-2 px-4 text-sm text-gray-700">
                            <input type="checkbox" name="options" value="option1" checked={selectedValues.includes('option1')} onChange={handleCheckboxChange} />
                            Option 1
                        </label>
                        <label className="block py-2 px-4 text-sm text-gray-700">
                            <input type="checkbox" name="options" value="option2" checked={selectedValues.includes('option2')} onChange={handleCheckboxChange} />
                            Option 2
                        </label>
                        <label className="block py-2 px-4 text-sm text-gray-700">
                            <input type="checkbox" name="options" value="option3" checked={selectedValues.includes('option3')} onChange={handleCheckboxChange} />
                            Option 3
                        </label>
                    </div>
                )}
            </div>
        </div>
        <div className='p-2'>
            {Data.map(data=>(
                <div key={data.id}className='bg-gray-500 mt-3 y-2' >
                    <h1>{data.title}</h1>
                    <p>{data.author}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
