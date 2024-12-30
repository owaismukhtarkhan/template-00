import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSectionProps {
  items?: CartItem[];
}

const CartSection: React.FC<CartSectionProps> = ({ 
  items = [{
    id: 1,
    name: 'Asgaard sofa',
    price: 250000.00,
    quantity: 1,
    image: '/Asgaard-sofa-1.png'
  }]
}) => {
  return (
    <div className="w-full max-w-[1440px] min-h-[525px] bg-[#FFF9F3] mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1240px] mx-auto">
        {/* Cart Items Table */}
        <div className="flex-grow">
          <div className="bg-[#FFF9F3] rounded-t-lg">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[#FFF9F3] font-poppins text-base font-medium">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
          </div>
          
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-4 items-center p-4 bg-white">
              <div className="flex items-center gap-4">
                <Image 
                  src={item.image}
                  alt={item.name}
                  width={106}
                  height={106}
                  className="rounded-lg"
                />
                <span className="text-[#9F9F9F] font-poppins">{item.name}</span>
              </div>
              <div className="text-[#9F9F9F] font-poppins">
                Rs. {item.price.toFixed(2)}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-poppins">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </span>
                <button className="p-2">
                  <Image 
                    src="/Bin.png"
                    alt="delete"
                    width={28}
                    height={28}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-[393px] bg-[#FFF9F3] p-6 rounded-lg">
          <h2 className="text-3xl font-semibold font-poppins mb-8">Cart Totals</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="font-poppins font-medium">Subtotal</span>
              <span className="text-[#9F9F9F] font-poppins">
                Rs. 250,000.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-poppins font-medium">Total</span>
              <span className="text-[#B88E2F] font-poppins font-medium">
                Rs. 250,000.00
              </span>
            </div>
          </div>

          <Link href="/checkout">
            <button className="w-full bg-white border-2 border-black rounded-lg py-4 px-6 font-poppins hover:bg-black hover:text-white transition-colors">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
