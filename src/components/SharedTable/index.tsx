import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean; // Option to make columns sortable
  style?: React.CSSProperties; // Optional style property to customize column header styles
};


type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

const SharedTable = <T,>({
  columns,            
  data,              
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full table-auto border rounded-xl">
        <thead className="bg-white border-b">
          <tr className="text-start text-[#6B6B6B]">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`p-2 ${col.accessor === 'actions' ? 'text-center text-xs font-normal mr-10 ' : 
                   col.accessor === 'ID' ? 'font-semibold text-xs' : 'text-xs font-normal'}`}
                style={col.style} // Custom style if passed from columns
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex % 2 === 0 ? 'bg-[#F9F9F9]' : 'bg-white'} border-b h-14`}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-xs text-center text-black">
                  {/* Custom rendering if a render function is provided */}
                  {col.render ? col.render(row[col.accessor], row) : (row[col.accessor] as string)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <label className="text-gray-600 text-sm">Show per page</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            {[10, 20, 30, 40].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">

        <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
        >
          <FaAngleLeft />
        </button>
      

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
        >
          <FaAngleRight />
        </button>
      </span>

        </div>
      </div>
    </div>
  );
};

export default SharedTable;
