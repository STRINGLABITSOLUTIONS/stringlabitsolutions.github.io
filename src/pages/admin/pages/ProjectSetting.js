import React, { useState } from 'react'

export default function ProjectSetting() {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleMoreClick = (id) => {
        if (expandedRow === id) {
        setExpandedRow(null);
        } else {
        setExpandedRow(id);
        }
    };
    const tableData = [
        { name: 'John Doe', age: 25, gender: 'Male', id: 1, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Jane Doe', age: 22, gender: 'Female', id: 2, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 3, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 4, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 5, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 6, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 7, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 8, moreInfo: 'Lorem ipsum dolor sit amet' },
        { name: 'Bob Smith', age: 30, gender: 'Male', id: 9, moreInfo: 'Lorem ipsum dolor sit amet' },
      ];
  return (
    <div>
        <div>
        <table className="table-auto w-full">
            <thead>
                <tr>
                <th className="px-4 py-2 text-left">SN</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                <React.Fragment key={row.id}>
                    <tr className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-600'} transform duration-200 hover:scale-[0.98] hover:bg-blue-900 hover:bg-opacity-10`}>
                    <td className="px-4 py-2">{index+1}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.age}</td>
                    <td className="px-4 py-2">{row.gender}</td>
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
                    <tr className="bg-gray-500 mx-4 transform duration-200">
                        <td colSpan="4" className="px-4 py-2">
                        {row.moreInfo}
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
