"use client";
import React from 'react';
import Image from 'next/image';

interface NewArrivalsProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onOrderClick?: () => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({
  imageSrc = '/Asgaard-sofa-1.png',
  title = 'Asgaard sofa',
  subtitle = 'New Arrivals',
  buttonText = 'Order Now',
  onOrderClick = () => console.log('Order clicked'),
}) => {
  return (
    <div className="relative w-[1476px] h-[799px] bg-[#FDF9F5] flex items-center justify-center">
      {/* Image section */}
      <div className="absolute left-0 w-[983px] h-[799px]">
        <Image
          src={imageSrc}
          alt="Asgaard sofa"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content section */}
      <div className="absolute right-[104px] top-[297px] w-[331px]">
        {/* Text content */}
        <div className="flex flex-col items-start gap-4">
          <span className="font-poppins font-medium text-xl text-black">
            {subtitle}
          </span>
          <h1 className="font-poppins font-bold text-4xl text-black">
            {title}
          </h1>
        </div>

        {/* Order button */}
        <div className="mt-8">
          <button
            onClick={onOrderClick}
            className="w-[255px] h-[64px] border border-black font-poppins text-lg hover:bg-black hover:text-white transition-colors duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
