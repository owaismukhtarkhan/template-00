'use client';
import React from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  image,
  title,
  author,
  date,
  category,
  description,
}) => {
  return (
    <div className="max-w-[820px] w-full mx-auto p-4 bg-white rounded-lg shadow-md mb-8">
      <div className="relative w-full h-[500px] mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="px-4">
        <h2 className="text-3xl font-medium text-black mb-4 font-poppins">
          {title}
        </h2>

        <div className="flex items-center gap-8 mb-4 text-[#9f9f9f] font-poppins">
          <div className="flex items-center gap-2">
            <Image
              src="/admin.png"
              alt="Author"
              width={20}
              height={20}
            />
            <span className="text-base">{author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/date.png"
              alt="Date"
              width={20}
              height={20}
            />
            <span className="text-base">{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/tag.png"
              alt="Category"
              width={24}
              height={24}
            />
            <span className="text-base">{category}</span>
          </div>
        </div>

        <p className="text-[15px] leading-[150%] text-[#9f9f9f] font-poppins text-justify mb-6">
          {description}
        </p>

        <div className="relative">
          <span className="text-base text-black font-poppins cursor-pointer hover:text-gray-700">
            Read more
          </span>
          <div className="absolute bottom-0 left-0 w-[77px] h-[1px] bg-black mt-1" />
        </div>
      </div>
    </div>
  );
};

interface SidebarProps {
  categories?: { name: string; count: number }[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 }
  ]
}) => {
  return (
    <div className="w-full max-w-xs h-auto bg-white p-6 rounded-lg shadow-md">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-medium text-black mb-6 font-['Poppins']">
          Categories
        </h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-[#9f9f9f] font-['Poppins']"
            >
              <span className="text-base">{category.name}</span>
              <span className="text-base">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 3,
  onPageChange = () => {},
}) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-start gap-4 w-[392px] h-[60px]">
      {[1, 2, 3].map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handlePageClick(pageNum)}
          className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center
            ${pageNum === currentPage 
              ? 'bg-[#FFF7E8] text-black' 
              : 'bg-[#FFF9F0] text-black hover:bg-gray-50'
            }
            font-poppins text-[20px] font-normal`}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        className={`w-[98px] h-[60px] rounded-[10px] flex items-center justify-center
          ${currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#FFF9F0] text-black hover:bg-gray-50'
          }
          font-poppins text-[20px] font-light`}
      >
        Next
      </button>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="flex-1">
        <BlogPostCard
          image="/blog-image-01.png"
          title="Going all-in with millennial design"
          author="Admin"
          date="14 Oct 2022"
          category="Wood"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <BlogPostCard
          image="/blog-image-02.png"
          title="Exploring new ways of decorating"
          author="Admin"
          date="14 Oct 2022"
          category="Handmade"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <BlogPostCard
          image="/blog-image-03.png"
          title="Handmade pieces that took time to make"
          author="Admin"
          date="14 Oct 2022"
          category="Wood"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <Pagination />
      </div>
      <div className="w-full md:w-[300px]">
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogSection;
