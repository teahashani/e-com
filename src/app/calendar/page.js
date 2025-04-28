'use client';

import Calendar from '@/components/Calendar';

export default function CalendarPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Calendar</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Calendar />
        </div>
      </div>
    </div>
  );
} 