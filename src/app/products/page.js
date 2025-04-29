'use client';

import { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useFavorites } from '@/context/FavoritesContext';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${product.price}</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleFavorite(product)}
                    className={`p-2 ${isFavorite(product.id) ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'} hover:text-red-500`}
                  >
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                    <FiShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 