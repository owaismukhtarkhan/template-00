import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
}

const NavBar: React.FC<NavBarProps> = ({
  backgroundColor = '#fbebb5',
  textColor = '#000000',
  fontSize = 16,
}) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full h-[100px] fixed top-0 left-0 z-50" style={{ backgroundColor }}>
      <div className="max-w-[1440px] h-full mx-auto px-4 flex items-center justify-between">
        {/* Navigation Links - Center section */}
        <div className="flex-1 flex items-center justify-center gap-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-[Poppins] font-medium text-base hover:text-gray-600 transition-colors"
              style={{ color: textColor, fontSize: `${fontSize}px` }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons - Right section */}
        <div className="hidden md:flex items-center gap-x-6">
        <Link href="/myaccount/">
            <Image src="/account-alert-icon.png" alt="User" width={24} height={24} />
          </Link>
          <Image src="/search-icon.png" alt="Search" width={24} height={24} />
          <Image src="/heart-icon.png" alt="Heart" width={24} height={24} />
          <Image src="/shopping-cart.png" alt="Cart" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;