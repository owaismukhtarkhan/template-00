import React from 'react';
import Image from 'next/image';

interface MyAccountProps {
  title?: string;
  homeText?: string;
  myaccountText?: string;
  backgroundImage?: string;
}

const MyAccountImage: React.FC<MyAccountProps> = ({
  title = "MyAccount",
  homeText = "Home",
  myaccountText = "MyAccount",
  backgroundImage = "/Shop-Rectangle-1.png"
}) => {
  return (
    <div className="relative w-full h-[316px] mt-[100px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-4">
          <Image 
            src="/Meubel House_Logos-05.png" 
            alt="Meubel House Logo" 
            width={77}
            height={77}
          />
        </div>
        
        {/* Title */}
        <h1 className="font-poppins font-medium text-5xl text-black mb-2">
          {title}
        </h1>
        
        {/* Navigation */}
        <div className="flex items-center gap-2 font-poppins">
          <span className="font-medium text-base text-black">
            {homeText}
          </span>
          <span className="mx-1">&gt;</span>
          <span className="font-light text-base text-black">
            {myaccountText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyAccountImage;
