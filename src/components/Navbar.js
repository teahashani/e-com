'use client';

import { useState, useEffect } from 'react';
import { 
  FiSearch, 
  FiMoon, 
  FiSun, 
  FiBell, 
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiCheckSquare,
  FiFileText,
  FiGrid,
  FiFolder,
  FiUsers,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
  FiTrendingDown
} from 'react-icons/fi';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monthlyTarget, setMonthlyTarget] = useState(85);
  
  // Mock data 
  const customerCount = 1250;
  const orderCount = 342;

  // Apply dark mode to the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiCalendar, label: 'Calendar', href: '/calendar' },
    { icon: FiUser, label: 'User Profile', href: '/profile' },
    { icon: FiCheckSquare, label: 'Tasks', href: '/tasks' },
    { icon: FiFileText, label: 'Forms', href: '/forms' },
    { icon: FiGrid, label: 'Tables', href: '/tables' },
    { icon: FiFolder, label: 'Pages', href: '/pages' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-8">TailAdmin</h2>
        <nav>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 