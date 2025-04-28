'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiShoppingBag, FiShoppingCart, FiUsers, FiTarget, FiTrendingUp, FiTrendingDown, FiUser, FiHeart, FiChevronDown, FiChevronUp, FiBarChart2, FiTrendingUp as FiMarketing, FiUsers as FiCRM, FiDollarSign, FiLayout, FiCalendar } from 'react-icons/fi';

const Navbar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const homeSubItems = [
    { label: 'Dashboard', href: '/dashboard', icon: FiLayout },
    { label: 'Analytics', href: '/analytics', icon: FiBarChart2 },
    { label: 'Marketing', href: '/marketing', icon: FiMarketing },
    { label: 'CRM', href: '/crm', icon: FiCRM },
    { label: 'Stocks', href: '/stocks', icon: FiDollarSign },
  ];

  const menuItems = [
    { label: 'Products', href: '/products', icon: FiShoppingBag },
    { label: 'Cart', href: '/cart', icon: FiShoppingCart },
    { label: 'Favorites', href: '/favorites', icon: FiHeart },
    { label: 'Customers', href: '/customers', icon: FiUsers },
    { label: 'Target', href: '/target', icon: FiTarget },
    { label: 'Trending', href: '/trending', icon: FiTrendingUp },
    { label: 'My Account', href: '/account', icon: FiUser },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-8">TailAdmin</h2>
        <nav>
          {/* Home Section with Sub-items */}
          <div className="mb-2">
            <button
              onClick={() => setIsHomeOpen(!isHomeOpen)}
              className="w-full flex items-center justify-between p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <FiHome className="w-5 h-5 mr-3" />
                <span>Home</span>
              </div>
              {isHomeOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
            </button>
            {isHomeOpen && (
              <div className="ml-8 mt-2 space-y-2">
                {homeSubItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Calendar Link */}
          <Link
            href="/calendar"
            className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition-colors"
          >
            <FiCalendar className="w-5 h-5 mr-3" />
            <span>Calendar</span>
          </Link>

          {/* Other Menu Items */}
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