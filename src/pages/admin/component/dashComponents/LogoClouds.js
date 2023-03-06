import { useEffect, useState } from 'react'

export default function LogoClouds() {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setitems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    // fetch blogs data from json
    useEffect(() => {
        setIsLoading(true);
        fetch(`data/blogs.json`)
            .then(response => response.json())
            .then(data => {
                setitems(data);
                setIsLoading(false);
            })
            .catch(error => console.log('Error fetching data:', error));
    }, []);
    if (isLoading) {return <div>Loading...</div>;}
    if (!items) {return <div>No data found</div>; }

    function handleCheckboxChange(event) {
        const value = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
          setSelectedItems([...selectedItems, value]);
        } else {
          setSelectedItems(selectedItems.filter(item => item !== value));
        }
      }
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1>Logo Clouds</h1>
            <div className="relative inline-block">
                <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={()=>setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="true">
                    Select options
                </button>
                {(isOpen && items.length > 0) && (
                    <div className="absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {
                            items.map(item => (
                            <label className="block py-2 px-4 text-sm text-gray-700">
                                <input type="checkbox" name="options" value={item?.value} checked={selectedItems.includes(`${item?.value}`)} onChange={handleCheckboxChange} />
                                {item?.title}
                            </label>))
                        }
                    </div>
                )}
            </div>
        </div>
        <div className='p-2'>
            {items.filter(data => selectedItems.includes(data.value)).map(data=>(
                <div key={data.id}className='bg-gray-500 mt-3 y-2' >
                    <h1>{data.title}</h1>
                    <p>{data.author}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
