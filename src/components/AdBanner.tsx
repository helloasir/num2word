import React from 'react';

interface AdBannerProps {
  position: 'top' | 'bottom';
}

export default function AdBanner({ position }: AdBannerProps) {
  return (
    <div className={`w-full bg-gray-100 dark:bg-gray-700 p-4 text-center ${position === 'top' ? 'mb-4' : 'mt-4'}`}>
      <div className="container mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <p className="text-gray-600 dark:text-gray-300">Advertisement Space</p>
        </div>
      </div>
    </div>
  );
}