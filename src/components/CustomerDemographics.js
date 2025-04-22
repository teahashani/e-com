'use client';

import { FiUsers } from 'react-icons/fi';

const CustomerDemographics = () => {
  // Sample data - in a real app, this would come from an API
  const customerData = [
    { country: 'United States', customers: 450 },
    { country: 'United Kingdom', customers: 320 },
    { country: 'Canada', customers: 280 },
    { country: 'Australia', customers: 210 },
    { country: 'Germany', customers: 180 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customer Demographics</h3>
        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
          <FiUsers className="w-5 h-5 text-blue-500 dark:text-blue-300" />
        </div>
      </div>
      
      {/* Map Placeholder - In a real app, you would use a map library like react-simple-maps */}
      <div className="h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Map Visualization</p>
      </div>

      {/* Customer Distribution List */}
      <div className="space-y-3">
        {customerData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">{item.country}</span>
            <div className="flex items-center">
              <span className="text-gray-500 dark:text-gray-400 mr-2">{item.customers}</span>
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${(item.customers / 450) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDemographics; 