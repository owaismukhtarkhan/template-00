import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  readTime: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, readTime, date }) => {
  return (
    <div className="max-w-sm flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-64 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-medium text-black mb-2">{title}</h2>
        <div className="mb-4">
          <span className="text-xl font-semibold text-black">Read More</span>
          <div className="h-[1px] bg-black mt-1 w-28" />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="8" stroke="black" strokeWidth="2"/>
              <path d="M9 4v5h4" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="text-sm font-light text-black">{readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="18" height="16" rx="2" stroke="black" strokeWidth="2"/>
              <path d="M2 8h18" stroke="black" strokeWidth="2"/>
              <path d="M7 12h8" stroke="black" strokeWidth="2"/>
              <path d="M7 16h5" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="text-sm font-medium text-black">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="text-center w-full max-w-lg mx-auto">
      <h1 className="text-3xl font-medium text-black mb-3">Our Blogs</h1>
      <p className="text-lg font-medium text-gray-600">
        Find a bright ideal to suit your taste with our great selection
      </p>
    </div>
  );
};

const ViewAllButton: React.FC = () => {
  return (
    <Link href="/blog">
      <div className="relative w-32 h-12 cursor-pointer group">
        <p className="text-lg font-medium text-black text-center">View All Post</p>
        <div className="absolute bottom-0 left-1.5 w-28 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0" />
      </div>
    </Link>
  );
};

const OurBlogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <BlogCard imageUrl="/coffee-keyboard.png" title="Going all-in with millennial design" readTime="5 min" date="12th Oct 2022" />
        <BlogCard imageUrl="/glass-laptop.png" title="Going all-in with millennial design" readTime="5 min" date="12th Oct 2022" />
        <BlogCard imageUrl="/laptop-mouse.png" title="Going all-in with millennial design" readTime="5 min" date="12th Oct 2022" />
      </div>
      <div className="flex justify-center mt-8">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default OurBlogs;
