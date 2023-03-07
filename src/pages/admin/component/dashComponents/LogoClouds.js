import { useEffect, useState } from "react"

export default function LogoClouds() {
    const [items, setitems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true);
        fetch(`data/blogs.json`)
            .then(res=>res.json())
            .then(data=>{
                setitems(data);
                setIsLoading(false);
            })
            .then(error=>console.log('error:', error));
    },[]);
    function handleCheckboxChange (event) {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked){setSelectedItems([...selectedItems, value])}
        else {setSelectedItems(selectedItems.filter(item => item !== value))}
    }

  return (
    <div className="bg-gray-600">
        {isLoading && <div>Loading...</div> }
        <div>
            <div className="flex justify-between">
                <h1>Logo clouds</h1>
                <div className="relative inline-block">
                    <button onClick={()=>setIsOpen(!isOpen)} className="py-2 px-4 bg-blue-500">
                        Select items
                    </button>
                    {isOpen && items && <div className="absolute z-10 top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {items.map(item=>(
                            <label key={item.id} className="block py-2 px-4 text-sm text-gray-700">
                                <input type="checkbox" name="options" value={item?.value} checked={selectedItems.includes(item?.value)} onChange={handleCheckboxChange} />
                                {item.title}
                            </label>
                        ))}
                    </div>}
                </div>
            </div>
            <div>
                {items.filter(item => selectedItems.includes(item.value)).map(item=>(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}
