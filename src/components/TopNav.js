'use client';

import { FiMenu, FiBell, FiSearch, FiSun, FiMoon, FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const TopNav = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <FiMenu className="w-6 h-6" />
          </button>
          <div className="ml-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-80 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/signin"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiLogIn className="h-5 w-5 mr-2" />
            Sign In
          </Link>
          <Link
            href="/register"
            className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <FiUserPlus className="h-5 w-5 mr-2" />
            Register
          </Link>
          <button
            onClick={toggleTheme}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>
          <button className="relative text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <FiBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700 dark:text-gray-300">Tea</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav; 