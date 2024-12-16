'use client';
import React from 'react';
import Image from 'next/image';

interface FilterProps {
  totalResults?: number;
  currentPage?: number;
  itemsPerPage?: number;
  onViewChange?: (view: 'grid' | 'list') => void;
  onItemsPerPageChange?: (items: number) => void;
  onSortChange?: (sort: string) => void;
  view?: 'grid' | 'list';
}

const Filter: React.FC<FilterProps> = ({
  totalResults = 32,
  currentPage = 1,
  itemsPerPage = 16,
  onViewChange,
  onItemsPerPageChange,
  onSortChange,
  view = 'grid'
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalResults);

  return (
    <div className="w-full bg-[#f9f3f3] h-[100px] px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image 
            src="/Filter-Vector.png" 
            alt="Filter"
            width={24}
            height={24}
          />
          <span className="text-xl font-normal font-['Poppins']">Filter</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onViewChange?.('grid')}
            className={`p-2 rounded-lg ${view === 'grid' ? 'bg-gray-200' : ''}`}
          >
            <Image 
              src="/ci_grid-big-round.png" 
              alt="Grid View"
              width={28}
              height={28}
            />
          </button>
          <button 
            onClick={() => onViewChange?.('list')}
            className={`p-2 rounded-lg ${view === 'list' ? 'bg-gray-200' : ''}`}
          >
            <Image 
              src="/View-Vector.png" 
              alt="List View"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center border-l border-gray-300 pl-8">
        <span className="text-base font-normal font-['Poppins']">
          Showing {startItem}–{endItem} of {totalResults} results
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-normal font-['Poppins']">Show</span>
          <div className="relative">
            <select 
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
              className="appearance-none bg-gray-50 rounded px-4 py-3 pr-8 text-gray-500 font-['Poppins'] focus:outline-none"
            >
              <option value={16}>16</option>
              <option value={32}>32</option>
              <option value={48}>48</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-normal font-['Poppins']">Sort by</span>
          <div className="relative">
            <select 
              onChange={(e) => onSortChange?.(e.target.value)}
              className="appearance-none bg-gray-50 rounded px-4 py-3 pr-8 text-gray-500 font-['Poppins'] min-w-[188px] focus:outline-none"
            >
              <option value="default">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
