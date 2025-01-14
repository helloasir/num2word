import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">NumWords</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300'
              } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300'
              } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300'
              } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}