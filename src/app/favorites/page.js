'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Favorites</h1>
        <div className="text-center py-12">
          <FiHeart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No favorites yet</h2>
          <p className="text-gray-500 dark:text-gray-400">Add some products to your favorites to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={product.image}
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
                    className="p-2 text-red-500 hover:text-red-600"
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