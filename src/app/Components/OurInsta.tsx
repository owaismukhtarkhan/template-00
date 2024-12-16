import React from 'react';
import Image from 'next/image';

interface OurInstaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  instagramUrl?: string;
}

const OurInsta: React.FC<OurInstaProps> = ({
  title = "Our Instagram",
  subtitle = "Follow our store on Instagram",
  buttonText = "Follow Us",
  instagramUrl = "https://instagram.com"
}) => {
  return (
    <div className="relative w-full h-[450px] bg-white overflow-hidden flex items-center justify-center">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <Image 
          src="/Insta-Rectangle-17.png" 
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Content container */}
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Text content */}
        <h2 className="font-poppins font-bold text-[60px] text-black mb-4">
          {title}
        </h2>
        <p className="font-poppins font-normal text-[20px] text-black mb-8">
          {subtitle}
        </p>

        {/* Follow button */}
        <a 
          href={instagramUrl}
          className="inline-block w-[255px] h-[64px] bg-white rounded-full 
                   font-poppins font-normal text-xl text-black text-center leading-[64px]
                   shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default OurInsta;
