'use client';

import UserAccount from '@/components/UserAccount';

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Account</h1>
      <div className="max-w-2xl mx-auto">
        <UserAccount />
      </div>
    </div>
  );
} 