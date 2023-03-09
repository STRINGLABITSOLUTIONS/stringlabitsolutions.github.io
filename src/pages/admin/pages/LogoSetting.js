import useFetch from '../../../hooks/useFetch';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

export default function LogoSetting() {
    const [currentPage, setCurrentPage] = useState(0);
    const {isLoading, data, error } = useFetch(`data/logos.json`);
    const PER_PAGE = 5;
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
        <h1 className="text-3xl p-8">Table with Pagination</h1>
        <table className="table-fixed w-full text-left m-3">
        <thead className="bg-amber-400">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
            {/* {renderTableData} */}
            {currentPageData && currentPageData.map(({id, name, link})=>(
                <tr key={id}>
                    <td>
                        <h1>{name}</h1>
                    </td>
                    <td>
                        <img className='h-10' src={link} alt="" loading="lazy"/>
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
            containerClassName={'flex space-x-4 mx-auto'}
            activeClassName={'border w-6 h-6 text-center rounded-full'}
        />
        </div>
    </div>
  )
}
