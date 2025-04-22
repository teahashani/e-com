'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsGraph = () => {
  // Sample data 
  const data = [
    { date: 'Apr 9', sales: 4000, revenue: 2400 },
    { date: 'Apr 10', sales: 3000, revenue: 1398 },
    { date: 'Apr 11', sales: 2000, revenue: 9800 },
    { date: 'Apr 12', sales: 2780, revenue: 3908 },
    { date: 'Apr 13', sales: 1890, revenue: 4800 },
    { date: 'Apr 14', sales: 2390, revenue: 3800 },
    { date: 'Apr 15', sales: 3490, revenue: 4300 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Overview Sales and Revenue</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Apr 9, 2025 - Apr 15, 2025
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsGraph; 