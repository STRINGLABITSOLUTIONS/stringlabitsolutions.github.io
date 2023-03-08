import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';

export default function ProjectSetting() {
    const {isLoading, data, error } = useFetch(`data/projects.json`);
    const [expandedRow, setExpandedRow] = useState(null);

    isLoading && <div>Loading...</div>;
  
    error && <div>Error: {error.message}</div>;
  
    (!data || !data?.length) && <div>No data found</div>;

    const handleMoreClick = (id) => {
        if (expandedRow === id) {
        setExpandedRow(null);
        } else {
        setExpandedRow(id);
        }
    };
  return (
    <div>
        <div>
        <table className="table-col w-full">
            <thead>
                <tr>
                <th className="px-4 py-2 text-left w-10">SN</th>
                <th className="px-4 py-2 text-left w-20">Name</th>
                <th className="px-4 py-2 text-left w-72">Title</th>
                <th className="px-4 py-2 text-left w-20">Platform</th>
                <th className="px-4 py-2 text-left w-20">Category</th>
                <th className="px-4 py-2 text-left w-20">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((row, index) => (
                <React.Fragment key={row.id}>
                    <tr className={`${row.id % 2 === 0 ? 'bg-gray-800' : 'bg-gray-600'} transform duration-200 hover:scale-[0.99] hover:bg-blue-900 hover:bg-opacity-10`}>
                        <td className="px-4 py-2">{index+1}</td>
                        <td className="px-4 py-2">{row.name}</td>
                        <td className="px-4 py-2">{row.title}</td>
                        <td className="px-4 py-2">{row.platform}</td>
                        <td className="px-4 py-2">{row.category}</td>
                        <td className="px-4 py-2">
                            <div className="flex space-x-1">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleMoreClick(row.id)}
                            >
                                More
                            </button>
                            </div>
                        </td>
                    </tr>
                    {expandedRow === row.id && (
                    <tr className="w-full bg-gray-500">
                        <td colSpan="4" className="px-4 py-2">
                            <h1>Discription : {row.description}</h1>
                            <h1>Launch Date : {row.date}</h1>
                        </td>
                    </tr>
                    )}
                </React.Fragment>
                ))}
            </tbody>
        </table>

        </div>
    </div>
  )
}
