import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiShoppingBag, 
  FiUsers, 
  FiSettings, 
  FiBarChart2, 
  FiCalendar,
  FiLogIn,
  FiUserPlus
} from 'react-icons/fi';

export default function VerticalMenu() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Analytics', href: '/analytics', icon: FiBarChart2 },
    { name: 'Products', href: '/products', icon: FiShoppingBag },
    { name: 'Customers', href: '/customers', icon: FiUsers },
    { name: 'Calendar', href: '/calendar', icon: FiCalendar },
    { name: 'Settings', href: '/settings', icon: FiSettings },
  ];

  const authItems = [
    { name: 'Sign In', href: '/signin', icon: FiLogIn },
    { name: 'Register', href: '/register', icon: FiUserPlus },
  ];

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">E-Commerce</h1>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Auth Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-1">
          {authItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
} 