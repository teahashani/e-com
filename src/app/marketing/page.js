'use client';

import React, { useState } from 'react';
import { FiStar, FiInstagram, FiDollarSign, FiTrendingUp, FiTrendingDown, FiEye, FiActivity, FiUsers, FiRefreshCw, FiArrowUp, FiArrowDown, FiClock, FiFileText } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MarketingPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Today');

  const metrics = [
    {
      title: 'Average Client Rating',
      value: '4.8',
      change: '+12.5%',
      isPositive: true,
      icon: FiStar,
      color: 'bg-gray-100 dark:bg-gray-900',
      iconColor: 'text-gray-500 dark:text-gray-300',
      description: 'Based on 1,234 reviews'
    },
    {
      title: 'Instagram Followers',
      value: '45.2K',
      change: '+8.2%',
      isPositive: true,
      icon: FiInstagram,
      color: 'bg-gray-100 dark:bg-gray-900',
      iconColor: 'text-gray-500 dark:text-gray-300',
      description: 'Total followers'
    },
    {
      title: 'Total Revenue',
      value: '$156,789',
      change: '+15.3%',
      isPositive: true,
      icon: FiDollarSign,
      color: 'bg-gray-100 dark:bg-gray-900',
      iconColor: 'text-gray-500 dark:text-gray-300',
      description: 'Monthly revenue'
    }
  ];

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Impressions & Data Metrics',
        data: [12000, 19000, 15000, 21000, 18000, 24000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Revenue',
        data: [5000, 8000, 6000, 9000, 7000, 10000],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
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

  const trafficStats = [
    {
      title: 'New Subscribers',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: FiUsers,
      timeRanges: {
        Today: 245,
        Week: 1245,
        Month: 4847
      }
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.5%',
      isPositive: false,
      icon: FiRefreshCw,
      timeRanges: {
        Today: 2.8,
        Week: 3.1,
        Month: 3.2
      }
    },
    {
      title: 'Page Bounce Rate',
      value: '42.3%',
      change: '+2.4%',
      isPositive: false,
      icon: FiActivity,
      timeRanges: {
        Today: 45,
        Week: 43,
        Month: 42.3
      }
    },
    {
      title: 'Avg. Session Duration',
      value: '3m 45s',
      change: '+8.2%',
      isPositive: true,
      icon: FiClock,
      timeRanges: {
        Today: '2m 30s',
        Week: '3m 15s',
        Month: '3m 45s'
      }
    },
    {
      title: 'Pages per Session',
      value: '4.2',
      change: '+5.1%',
      isPositive: true,
      icon: FiFileText,
      timeRanges: {
        Today: 3.8,
        Week: 4.0,
        Month: 4.2
      }
    }
  ];

  const timeRanges = ['Today', 'Week', 'Month'];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                </div>
                <span
                  className={`flex items-center text-sm ${
                    metric.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {metric.isPositive ? <FiTrendingUp className="w-4 h-4 mr-1" /> : <FiTrendingDown className="w-4 h-4 mr-1" />}
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
              <p className="text-gray-500 dark:text-gray-400">{metric.title}</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Performance Metrics</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <FiEye className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Impressions & Data</span>
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Revenue</span>
                </div>
              </div>
            </div>
            <div className="h-[400px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Traffic Stats Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 mr-2">
                  <FiActivity className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <h2 className="text-base font-semibold text-gray-800 dark:text-white">Traffic Stats</h2>
              </div>
              <div className="flex space-x-1">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-2 py-1 rounded text-xs ${
                      selectedTimeRange === range
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {trafficStats.map((stat, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm mr-2">
                        <stat.icon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 dark:text-white">{stat.title}</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-base font-bold text-gray-800 dark:text-white mr-2">
                        {stat.timeRanges[selectedTimeRange]}
                        {stat.title.includes('Rate') ? '%' : ''}
                      </span>
                      <span
                        className={`flex items-center text-xs px-1.5 py-0.5 rounded ${
                          stat.isPositive 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}
                      >
                        {stat.isPositive ? <FiArrowUp className="w-2.5 h-2.5 mr-0.5" /> : <FiArrowDown className="w-2.5 h-2.5 mr-0.5" />}
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
                <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <FiRefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage; 