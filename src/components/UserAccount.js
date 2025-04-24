'use client';

import { FiUser, FiMapPin, FiPhone, FiMail, FiEdit2, FiInstagram, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const UserAccount = () => {
  const userInfo = {
    name: 'Tea Hashani',
    title: 'Frontend Developer',
    company: 'Timeless Inc.',
    email: 'tea.hashani@example.com',
    phone: '+1 (555) 123-4567',
    social: {
      instagram: 'https://instagram.com/teahashani',
      linkedin: 'https://linkedin.com/in/teahashani',
      twitter: 'https://twitter.com/teahashani',
      github: 'https://github.com/teahashani'
    },
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Banner Section */}
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end space-x-4">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt={userInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{userInfo.name}</h2>
              <p className="text-blue-100">{userInfo.title}</p>
              <p className="text-blue-100">{userInfo.company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex justify-center space-x-6">
          <a href={userInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
            <FiInstagram className="w-6 h-6" />
          </a>
          <a href={userInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href={userInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300">
            <FiTwitter className="w-6 h-6" />
          </a>
          <a href={userInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
            <FiGithub className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account Information</h3>
          <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            <FiEdit2 className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Personal Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FiUser className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{userInfo.name}</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{userInfo.email}</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{userInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Address</h4>
            <div className="flex items-start">
              <FiMapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
              <div className="text-gray-700 dark:text-gray-300">
                <p>{userInfo.address.street}</p>
                <p>{userInfo.address.city}, {userInfo.address.state} {userInfo.address.zipCode}</p>
                <p>{userInfo.address.country}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Edit Profile
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount; 