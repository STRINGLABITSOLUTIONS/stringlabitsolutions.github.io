import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ModalBlog from '../component/ModalBlog';

export default function BlogSetting() {
    const [showModal, setShoModal] = useState(false);

    const {isLoading, data, error } = useFetch(`data/blogs.json`);

    isLoading && <div>Loading...</div>;
  
    error && <div>Error: {error.message}</div>;
  
    (!data || !data?.length) && <div>No data found</div>;
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold p-3'>Total Blogs : {data.length}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New</button>
        </div>
        <div>
            <table className="table-col w-full">
                <thead>
                    <tr>
                    <th className="px-4 py-2 text-left w-10">SN</th>
                    <th className="px-4 py-2 text-left w-72">Title</th>
                    <th className="px-4 py-2 text-left w-20">Author</th>
                    <th className="px-4 py-2 text-left w-20">Date</th>
                    <th className="px-4 py-2 text-left w-20">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row, index) => (
                        <tr key={row.id} className={`${row.id % 2 === 0 ? 'bg-gray-800' : 'bg-gray-600'} transform duration-200 hover:scale-[0.99] hover:bg-blue-900 hover:bg-opacity-10`}>
                            <td className="px-4 py-2">{index+1}</td>
                            <td className="px-4 py-2">{row.title}</td>
                            <td className="px-4 py-2">{row.author}</td>
                            <td className="px-4 py-2">{row.date}</td>
                            <td className="px-4 py-2">
                                <div className="flex space-x-1">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    View
                                </button>
                                <button
                                    onClick={()=> setShoModal(true)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <ModalBlog onClose={()=>setShoModal(false)} visible={showModal}/>
    </div>
  )
}
