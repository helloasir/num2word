import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Info className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">About NumWords</h1>
        </div>

        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            NumWords is a powerful number conversion tool that helps you convert numerical digits into their word representations
            in both Indian and US number systems.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Support for both Indian and US number systems</li>
              <li>Real-time conversion</li>
              <li>User-friendly interface</li>
              <li>Dark mode support</li>
              <li>Mobile responsive design</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Number Systems</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Indian System</h3>
                <p>Uses terms like Lakh (1,00,000) and Crore (1,00,00,000)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">US System</h3>
                <p>Uses terms like Million (1,000,000) and Billion (1,000,000,000)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}