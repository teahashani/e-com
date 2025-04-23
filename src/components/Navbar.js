'use client';

import Link from 'next/link';
import { FiHome, FiShoppingBag, FiShoppingCart, FiUsers, FiTarget, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', href: '/', icon: FiHome },
    { label: 'Products', href: '/products', icon: FiShoppingBag },
    { label: 'Cart', href: '/cart', icon: FiShoppingCart },
    { label: 'Customers', href: '/customers', icon: FiUsers },
    { label: 'Target', href: '/target', icon: FiTarget },
    { label: 'Trending', href: '/trending', icon: FiTrendingUp },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-8">TailAdmin</h2>
        <nav>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 