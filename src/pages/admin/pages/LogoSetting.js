import useFetch from '../../../hooks/useFetch';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

export default function LogoSetting() {
    const {isLoading, data, error } = useFetch(`data/logos.json`);
    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(data.length / PER_PAGE);

    isLoading && <div>Loading...</div>;
  
    error && <div>Error from ferthing: {error.message}</div>;
  
    (!data || !data?.length) && <div>No data found</div>;
    
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }
    
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold p-3'>Total Companys : {data.length}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New</button>
        </div>
        <table className="table-fixed w-full text-left m-3">
            <thead className="bg-amber-400">
            <tr>
                <th>Company Name</th>
                <th>Logo</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {currentPageData && currentPageData.map(({id, name, link})=>(
                    <tr key={id} className={`${id % 2 === 0 ? 'bg-gray-800' : 'bg-gray-600'} transform duration-200 hover:scale-[0.99] hover:bg-blue-900 hover:bg-opacity-10`}>
                        <td>{name}</td>
                        <td><img className='h-10' src={link} alt="" loading="lazy"/></td>
                        <td className="px-4 py-2">
                                <div className="flex space-x-1">
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                                </div>
                            </td>
                    </tr>
                ))

                }
            </tbody>
        </table>
        <div>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'flex items-center justify-center space-x-4 mx-auto'}
                activeClassName={'border w-6 h-6 text-center rounded-full'}
            />
        </div>
    </div>
  )
}
