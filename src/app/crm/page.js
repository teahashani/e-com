'use client';

import React, { useState } from 'react';
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiCheckCircle, FiBriefcase, FiTarget, FiCalendar, FiCheck, FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CRMPage = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Business Analytics Press',
      description: 'Exploring the Future of Data-Driven',
      additional: '+6 more',
      date: 'Wed, 11 Jan',
      time: '9:20 AM',
      type: 'Conference',
      completed: false 
    },
    { 
      id: 2, 
      title: 'Monthly Sales Review',
      description: 'Q1 Performance Analysis',
      additional: 'Team Meeting',
      date: 'Wed, 11 Jan',
      time: '11:30 AM',
      type: 'Meeting',
      completed: false 
    },
    { 
      id: 3, 
      title: 'Client Presentation',
      description: 'New Product Launch Strategy',
      additional: 'With Marketing Team',
      date: 'Wed, 11 Jan',
      time: '2:00 PM',
      type: 'Presentation',
      completed: false 
    },
    { 
      id: 4, 
      title: 'Data Analysis Workshop',
      description: 'Advanced Analytics Training',
      additional: 'For Sales Team',
      date: 'Wed, 11 Jan',
      time: '3:30 PM',
      type: 'Workshop',
      completed: false 
    },
  ]);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const metrics = [
    {
      title: 'Active Deals',
      value: '$245,678',
      change: '+12.5%',
      isPositive: true,
      icon: FiBriefcase,
      description: 'From last month',
      color: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-500 dark:text-blue-300'
    },
    {
      title: 'Total Revenue',
      value: '$1,245,678',
      change: '+8.2%',
      isPositive: true,
      icon: FiDollarSign,
      description: 'Year to date',
      color: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-500 dark:text-green-300'
    },
    {
      title: 'Closed Deals',
      value: '156',
      change: '+15.3%',
      isPositive: true,
      icon: FiCheckCircle,
      description: 'This quarter',
      color: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-500 dark:text-purple-300'
    }
  ];

  // Chart data for monthly statistics
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Average Yearly Profit',
        data: [45000, 52000, 48000, 55000, 60000, 58000, 62000, 65000, 63000, 68000, 70000, 75000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ],
  };

  const chartOptions = {
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
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Revenue targets data
  const revenueTargets = {
    current: 75, // percentage
    marketingSales: 450000,
    totalSales: 850000,
    target: 1000000
  };

  // Sales Categories Donut Chart Data
  const salesCategoriesData = {
    labels: ['Affiliate Program', 'Direct Buy', 'Adsense'],
    datasets: [
      {
        data: [48, 33, 19],
        backgroundColor: [
          'rgb(30, 64, 175)', // Deep blue
          'rgb(59, 130, 246)', // Medium blue
          'rgb(147, 197, 253)', // Light blue
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const recentOrders = [
    {
      id: 'DEAL-001',
      customer: {
        name: 'John Smith',
        email: 'john.smith@email.com'
      },
      product: 'Enterprise CRM Package',
      value: '$12,500',
      closeDate: '2024-01-15',
      status: 'Closed'
    },
    {
      id: 'DEAL-002',
      customer: {
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com'
      },
      product: 'Analytics Dashboard',
      value: '$8,750',
      closeDate: '2024-01-14',
      status: 'In Progress'
    },
    {
      id: 'DEAL-003',
      customer: {
        name: 'Michael Brown',
        email: 'm.brown@email.com'
      },
      product: 'Data Integration Service',
      value: '$15,000',
      closeDate: '2024-01-13',
      status: 'Pending'
    },
    {
      id: 'DEAL-004',
      customer: {
        name: 'Emily Davis',
        email: 'emily.d@email.com'
      },
      product: 'Cloud Storage Solution',
      value: '$6,200',
      closeDate: '2024-01-12',
      status: 'Closed'
    },
    {
      id: 'DEAL-005',
      customer: {
        name: 'Robert Wilson',
        email: 'r.wilson@email.com'
      },
      product: 'Security Suite',
      value: '$9,800',
      closeDate: '2024-01-11',
      status: 'In Progress'
    }
  ];

  const filteredOrders = recentOrders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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

        {/* Statistics and Revenue Targets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Statistics Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Statistics Targets</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Monthly Overview
              </div>
            </div>
            <div className="h-[300px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Revenue Targets */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Revenue Targets</h2>
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <FiTarget className="w-5 h-5 text-purple-500 dark:text-purple-300" />
              </div>
            </div>
            
            {/* Circular Progress */}
            <div className="relative w-58 h-24 mx-auto mb-6">
              <div className="absolute -inset-7 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  {/* Background arc */}
                  <path
                    d="M 10,50 A 40,40 0 0,1 90,50"
                    fill="none"
                    stroke="rgb(229, 231, 235)"
                    strokeWidth="8"
                  />
                  {/* Progress arc */}
                  <path
                    d="M 10,50 A 40,40 0 0,1 90,50"
                    fill="none"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="8"
                    strokeDasharray={`${revenueTargets.current * 1.256} 125.6`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">{revenueTargets.current}%</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                </div>
              </div>
            </div>

            {/* Sales Breakdown */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-500 dark:text-gray-400">Marketing Sales</span>
                  <span className="font-medium text-gray-800 dark:text-white">${revenueTargets.marketingSales.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(revenueTargets.marketingSales / revenueTargets.target) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-500 dark:text-gray-400">Total Sales</span>
                  <span className="font-medium text-gray-800 dark:text-white">${revenueTargets.totalSales.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(revenueTargets.totalSales / revenueTargets.target) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Target</span>
                  <span className="font-medium text-gray-800 dark:text-white">${revenueTargets.target.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Categories and Upcoming Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Sales Categories Donut Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Sales Categories</h2>
            </div>
            <div className="h-[200px]">
              <Doughnut data={salesCategoriesData} options={donutOptions} />
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-800 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Affiliate Program</span>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">2,000 (48%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Direct Buy</span>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">1,000 (33%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Adsense</span>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">510 (19%)</span>
              </div>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Upcoming Schedule</h2>
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <FiCalendar className="w-5 h-5 text-blue-500 dark:text-blue-300" />
              </div>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors mt-1 ${
                        task.completed
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {task.completed && <FiCheck className="w-3 h-3 text-white" />}
                    </button>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                          {task.title}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                          {task.type}
                        </span>
                      </div>
                      <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-600 dark:text-gray-300'}`}>
                        {task.description}
                      </p>
                      <p className="text-xs text-blue-500 dark:text-blue-400 mt-1">
                        {task.additional}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-800 dark:text-white">{task.date}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{task.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Orders</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full sm:w-40 pl-4 pr-10 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="all">All Status</option>
                    <option value="Closed">Closed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700/50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deal ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product/Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deal Value</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Close Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">{order.id}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-800 dark:text-white">{order.customer.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{order.customer.email}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">{order.product}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">{order.value}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">{order.closeDate}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Closed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : order.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMPage; 