import React, { useState } from "react";

export default function LogoSetting() {

    const itemsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const data = {
    item1: "Lorem ipsum dolor sit amet",
    item2: "Consectetur adipiscing elit",
    item3: "Sed do eiusmod tempor",
    item4: "Incididunt ut labore et dolore magna aliqua",
    item5: "Ut enim ad minim veniam",
    item6: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    item7: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    item8: "Excepteur sint occaecat cupidatat non proident",
    item9: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    item10: "Lorem ipsum dolor sit amet",
    item11: "Consectetur adipiscing elit",
    item12: "Sed do eiusmod tempor",
    item13: "Sed do eiusmod tempor",
    item14: "Incididunt ut labore et dolore magna aliqua",
    item15: "Ut enim ad minim veniam",
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(data).length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = e => {
        setCurrentPage(Number(e.target.id));
    };

    const renderPageNumbers = pageNumbers.map(number => {
        return (
        <li key={number} id={number} onClick={handleClick} className="border border-purple-600 w-8 text-center rounded-md cursor-pointer">
            {number}
        </li>
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Object.entries(data).slice(indexOfFirstItem, indexOfLastItem);

    const renderTableData = currentItems.map(([key, value]) => {
        return (
        <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
        </tr>
        );
    });
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
        <tbody>{renderTableData}</tbody>
      </table>
        <div class="flex items-center justify-center mx-auto">
            <ul id="page-numbers" className="flex items-center justify-center space-x-5">{renderPageNumbers}</ul>
        </div>
      
    </div>
  )
}
