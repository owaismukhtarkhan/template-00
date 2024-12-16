import React from 'react';

interface FooterProps {
  address?: string;
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
  address = "400 University Drive Suite 200 Coral Gables, FL 33134 USA",
  copyright = "2022 Meubel House. All rights reverved"
}) => {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="text-gray-500 text-base">
            <p className="whitespace-pre-line">{address}</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-500 font-medium text-lg mb-6">Links</h3>
            <ul className="space-y-4">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-black font-medium hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 font-medium text-lg mb-6">Help</h3>
            <ul className="space-y-4">
              {['Payment Options', 'Returns', 'Privacy Policies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-black font-medium hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-500 font-medium text-lg mb-6">Newsletter</h3>
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-b border-black pb-2 text-sm placeholder-gray-400 focus:outline-none"
                />
                <button className="absolute right-0 bottom-2 text-sm font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-black">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

