'use client';

import { useState, useEffect } from 'react';
import { FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const RecentOrders = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        // Transform the product data into order format
        const transformedOrders = data.products.slice(0, 5).map((product, index) => ({
          id: `#${1000 + index}`,
          product: product.title,
          customer: 'Customer ' + (index + 1),
          date: new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }),
          status: ['Processing', 'Shipped', 'Delivered'][Math.floor(Math.random() * 3)],
          amount: `$${product.price}`
        }));
        setOrders(transformedOrders);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, []);

  const filters = ['All', 'Processing', 'Shipped', 'Delivered'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Orders</h3>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <FiFilter />
            <span>Filter</span>
            {showFilters ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            See All
          </button>
        </div>
      </div>

      {/* Filter Dropdown */}
      {showFilters && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400">
              <th className="pb-3">Order ID</th>
              <th className="pb-3 pl-6">Product</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 text-gray-700 dark:text-gray-300">{order.id}</td>
                <td className="py-3 pl-6 text-gray-700 dark:text-gray-300">{order.product}</td>
                <td className="py-3 text-gray-500 dark:text-gray-400">{order.date}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-gray-700 dark:text-gray-300">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders; 