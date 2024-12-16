import Image from "next/image";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  imageWidth: number;
  imageHeight: number;
}

interface TopPicksProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "2:90",
    image: "/Trenton-modular-sofa_3-1.png",
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    imageWidth: 287,
    imageHeight: 287
  },
  {
    id: "2:87",
    image: "/Granite-dining-table-chairs-1.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    imageWidth: 287,
    imageHeight: 287
  },
  {
    id: "2:88",
    image: "/Outdoor-bar-table-stool-1.png",
    title: "Outdoor bar table and stool", 
    price: "Rs. 25,000.00",
    imageWidth: 287,
    imageHeight: 287
  },
  {
    id: "2:89",
    image: "/Plain-console-teak-mirror- 1.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    imageWidth: 287,
    imageHeight: 287
  }
];

const TopPicks = ({ products = defaultProducts }: TopPicksProps) => {
  return (
    <div className="w-[1440px] h-[777px] bg-white p-[55px_100px]">
      <div className="text-center mb-[65px]">
        <h1 className="font-poppins font-medium text-[36px] text-black mb-[24px]">
          Top Picks For You
        </h1>
        <p className="font-poppins font-medium text-[16px] text-[#9F9F9F] max-w-[773px] mx-auto">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>
      
      <div className="flex justify-between gap-[30px] mb-[50px]">
        {products.map((product) => (
          <div key={product.id} className="w-[287px]">
            <div className="w-[287px] h-[287px] mb-[14px] flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={product.imageWidth}
                height={product.imageHeight}
              />
            </div>
            <h3 className="font-poppins font-normal text-[16px] text-black mb-[10px]">
              {product.title}
            </h3>
            <p className="font-poppins font-medium text-[24px] text-black">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center relative">
        <span className="font-poppins font-medium text-[20px] text-black mb-[8px]">
          View More
        </span>
        <div className="w-[115px] h-[2px] bg-black"></div>
      </div>
    </div>
  );
};

export default TopPicks;
