import { useEffect, useState } from 'react'
import Data from '../../../../data/blogs.json'

export default function Blogs() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const [blogsData, setBlogsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      
      setSelectedValues((prevValues) => {
        if (prevValues.includes(value)) {
          return [...prevValues.filter((v) => v !== value)];
        } else {
          return [...prevValues, value];
        }
      });

      const updatedData = blogsData?.map(blogData => {
        if (blogData.value === value) {
          return { ...blogData, isSelected: true };
        }
        return blogData;
      });
      
      console.log(updatedData);
    };

    // fetch blogs data from json
    useEffect(() => {
        setIsLoading(true);
        fetch(`blogs.json`)
            .then(response => response.json())
            .then(blogData => {
                setBlogsData(blogData);
                setIsLoading(false);
            })
            .catch(error => console.log('Error fetching data:', error));
    }, []);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (!blogsData) {
        return <div>No data found</div>;
    }

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
                {(isOpen && blogsData.length > 0) && (
                    <div className="absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {
                            blogsData.map(blogData => (
                            <label className="block py-2 px-4 text-sm text-gray-700">
                                <input type="checkbox" name="options" value={blogData?.value} checked={selectedValues.includes(`${blogData?.value}`)} onChange={handleCheckboxChange} />
                                {blogData?.title}
                            </label>))
                        }
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
