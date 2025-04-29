'use client';

import { useState } from 'react';
import { FiArrowUp, FiArrowDown, FiMoreVertical, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import CustomerDemographics from '@/components/CustomerDemographics';
import RecentOrders from '@/components/RecentOrders';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30days');

  const metrics = [
    {
      title: 'Unique Visitors',
      value: '24,589',
      change: '+12.5%',
      isPositive: true
    },
    {
      title: 'Total Pageviews',
      value: '156,789',
      change: '+8.2%',
      isPositive: true
    },
    {
      title: 'Bounce Rate',
      value: '42.3%',
      change: '-2.4%',
      isPositive: false
    },
    {
      title: 'Visit Duration',
      value: '3m 42s',
      change: '+15.3%',
      isPositive: true
    }
  ];

  const topChannels = [
    { source: 'Google', visitors: 12500 },
    { source: 'Facebook', visitors: 8200 },
    { source: 'Threads', visitors: 5600 },
    { source: 'Twitter', visitors: 3400 },
  ];

  const topPages = [
    { page: 'Homepage', visitors: 15600 },
    { page: 'Products', visitors: 12400 },
    { page: 'About Us', visitors: 8900 },
    { page: 'Contact', visitors: 5600 },
  ];

  // Sample data for the active users line chart
  const activeUsersData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Active Users',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 20),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const activeUsersOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Sample data for the visitor analytics chart
  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Visitors',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Sample data for acquisition channels
  const acquisitionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Direct',
        data: [1200, 1900, 1500, 2100, 1800, 2400],
        backgroundColor: 'rgba(59, 130, 246, 0.8)', 
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Referral',
        data: [800, 1200, 1000, 1400, 1100, 1600],
        backgroundColor: 'rgba(96, 165, 250, 0.8)',
        borderColor: 'rgb(96, 165, 250)',
        borderWidth: 1,
      },
      {
        label: 'Organic Search',
        data: [1500, 2200, 1800, 2500, 2100, 2800],
        borderColor: 'rgb(147, 197, 253)',
        borderWidth: 1,
      },
      {
        label: 'Social',
        data: [600, 900, 700, 1000, 800, 1200],
        backgroundColor: 'rgba(191, 219, 254, 0.8)', 
        borderColor: 'rgb(191, 219, 254)',
        borderWidth: 1,
      },
    ],
  };

  const acquisitionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Sample data for sessions by device
  const deviceData = {
    labels: ['Desktop', 'Tablet', 'Mobile'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',  
          'rgba(96, 165, 250, 0.8)', 
          'rgba(147, 197, 253, 0.8)', 
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(96, 165, 250)',
          'rgb(147, 197, 253)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const deviceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
    cutout: '70%',
  };

  // Sample data for customer demographics
  const demographicData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        data: [15, 35, 25, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(96, 165, 250, 0.8)',  
          'rgba(147, 197, 253, 0.8)', 
          'rgba(191, 219, 254, 0.8)', 
          'rgba(219, 234, 254, 0.8)', 
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(96, 165, 250)',
          'rgb(147, 197, 253)',
          'rgb(191, 219, 254)',
          'rgb(219, 234, 254)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const demographicOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
    cutout: '70%',
  };
  const timeRanges = [
    { label: '24 Hours', value: '24hours' },
    { label: '7 Days', value: '7days' },
    { label: '30 Days', value: '30days' },
    { label: '12 Months', value: '12months' },
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center text-sm ${
                metric.isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.isPositive ? (
                  <FiArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <FiArrowDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {metric.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.title}
            </p>
          </div>
        ))}
      </div>

      {/* Visitor Analytics Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Visitor Analytics</h2>
          <div className="flex space-x-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  timeRange === range.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[400px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Channels Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Top Channels</h2>
          <div className="space-y-4">
            {topChannels.map((channel, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">{channel.source}</span>
                <span className="font-semibold text-gray-800 dark:text-white">{channel.visitors.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Top Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">{page.page}</span>
                <span className="font-semibold text-gray-800 dark:text-white">{page.visitors.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Users Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Active Users</h2>
          <div className="h-[200px] mb-4">
            <Line data={activeUsersData} options={activeUsersOptions} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Daily</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">1,234</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Weekly</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">8,642</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Monthly</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">34,567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acquisition Channels and Device Sessions Charts */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Acquisition Channels Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Acquisition Channels</h2>
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    timeRange === range.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px]">
            <Bar data={acquisitionData} options={acquisitionOptions} />
          </div>
        </div>

        {/* Device Sessions Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Sessions by Device</h2>
          <div className="h-[300px]">
            <Doughnut data={deviceData} options={deviceOptions} />
          </div>
        </div>
      </div>

      {/* Customer Demographics and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <CustomerDemographics />
        <RecentOrders />
      </div>
    </div>
  );
} 