import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex bg-[#fbebb5] w-full h-[900px] justify-center items-center">
      <div className="flex flex-col items-start mx-8">
        <h1 className="font-poppins font-medium text-[64px] leading-[96px] text-[#000000]">
          Rocket single seater
        </h1>
        <div className="mt-8">
          <button className="font-poppins font-medium text-2xl leading-[36px] text-[#000000] border-b-2 border-[#000000]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="ml-8">
        <Image
          src="/Rocket-single-seater-1.png"
          alt="Rocket single seater"
          width={853}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
