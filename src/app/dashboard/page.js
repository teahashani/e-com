import StatisticsGraph from '@/components/StatisticsGraph';
import CustomerDemographics from '@/components/CustomerDemographics';
import RecentOrders from '@/components/RecentOrders';
import { 
  FiUsers,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
  FiTrendingDown
} from 'react-icons/fi';

export default function DashboardPage() {
  // Mock data - in a real app, this would come from an API
  const customerCount = 1250;
  const orderCount = 342;
  const monthlyTarget = 85;

  return (
    <div className="h-full p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard</h1>
        
        {/* Top Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Customers Box */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Customers</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{customerCount}</h3>
                <div className="flex items-center mt-2 text-green-500">
                  <FiTrendingUp className="mr-1" />
                  <span className="text-sm">12% increase</span>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <FiUsers className="w-8 h-8 text-blue-500 dark:text-blue-300" />
              </div>
            </div>
          </div>
          
          {/* Orders Box */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{orderCount}</h3>
                <div className="flex items-center mt-2 text-green-500">
                  <FiTrendingUp className="mr-1" />
                  <span className="text-sm">8% increase</span>
                </div>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <FiShoppingBag className="w-8 h-8 text-green-500 dark:text-green-300" />
              </div>
            </div>
          </div>
          
          {/* Monthly Target Box */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Target</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{monthlyTarget}%</h3>
                <div className="flex items-center mt-2 text-red-500">
                  <FiTrendingDown className="mr-1" />
                  <span className="text-sm">5% decrease</span>
                </div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <FiTarget className="w-8 h-8 text-purple-500 dark:text-purple-300" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Target you've set for each month</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-purple-500 h-2.5 rounded-full" 
                  style={{ width: `${monthlyTarget}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Graph Section */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <StatisticsGraph />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomerDemographics />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
} 