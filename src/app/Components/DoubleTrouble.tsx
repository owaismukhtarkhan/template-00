import React from 'react';

interface DoubleTroubleProps {
  leftImage?: string;
  rightImage?: string;
  leftTitle?: string;
  rightTitle?: string;
}

const DoubleTrouble: React.FC<DoubleTroubleProps> = ({
  leftImage = '/Granite-square-side-table-1.png',
  rightImage = '/Cloud-sofa-three-seater+ottoman_3-1.png',
  leftTitle = 'Side table',
  rightTitle = 'Side table'
}) => {
  return (
    <div className="w-[1440px] h-[672px] bg-[#FAF4F4] flex justify-center items-center">
      <div className="flex justify-between gap-[30px]">
        <div className="relative w-[605px] h-[562px]">
          <div className="w-full h-full overflow-hidden">
            <img 
              src={leftImage} 
              alt="Side table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[52px] left-[106px]">
            <h2 className="font-poppins font-medium text-[36px] leading-[54px] text-black mb-[23px]">
              {leftTitle}
            </h2>
            <div className="relative inline-block">
              <span className="font-poppins font-medium text-[24px] leading-[36px] text-black">
                View More
              </span>
              <div className="absolute bottom-[-2px] left-0 w-[121px] h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        <div className="relative w-[605px] h-[562px]">
          <div className="w-full h-full overflow-hidden">
            <img 
              src={rightImage}
              alt="Side table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[52px] left-[106px]">
            <h2 className="font-poppins font-medium text-[36px] leading-[54px] text-black mb-[23px]">
              {rightTitle}
            </h2>
            <div className="relative inline-block">
              <span className="font-poppins font-medium text-[24px] leading-[36px] text-black">
                View More
              </span>
              <div className="absolute bottom-[-2px] left-0 w-[121px] h-[2px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleTrouble;
