import React, { useState } from 'react';
import { numberToWordsUS, numberToWordsIndian } from '../utils/numberToWords';
import { Calculator, Copy, Share2, Bookmark, Check } from 'lucide-react';

export default function Home() {
  const [number, setNumber] = useState<string>('');
  const [indianWords, setIndianWords] = useState<string>('');
  const [usWords, setUsWords] = useState<string>('');
  const [copiedIndian, setCopiedIndian] = useState(false);
  const [copiedUS, setCopiedUS] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleConvert = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num >= 0) {
      setIndianWords(numberToWordsIndian(num));
      setUsWords(numberToWordsUS(num));
    } else {
      setIndianWords('Please enter a valid positive number');
      setUsWords('Please enter a valid positive number');
    }
  };

  const copyToClipboard = async (text: string, type: 'indian' | 'us') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'indian') {
        setCopiedIndian(true);
        setTimeout(() => setCopiedIndian(false), 2000);
      } else {
        setCopiedUS(true);
        setTimeout(() => setCopiedUS(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'NumWords - Number to Words Converter',
      text: 'Convert numbers to words in Indian and US styles!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support native sharing
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
        window.open(shareUrl, '_blank');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleBookmark = () => {
    if (window.sidebar && window.sidebar.addPanel) { // Firefox
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE
      // @ts-ignore
      window.external.AddFavorite(window.location.href, document.title);
    } else { // Modern browsers
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
    setIsBookmarked(true);
    setTimeout(() => setIsBookmarked(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Number to Words Converter</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={handleBookmark}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Bookmark"
            >
              {isBookmarked ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter a number
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                placeholder="Enter a number"
              />
              <button
                onClick={handleConvert}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Convert
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Indian Style</h2>
                <button
                  onClick={() => copyToClipboard(indianWords, 'indian')}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300"
                  title="Copy to clipboard"
                >
                  {copiedIndian ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 capitalize">{indianWords || 'Result will appear here'}</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">US Style</h2>
                <button
                  onClick={() => copyToClipboard(usWords, 'us')}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300"
                  title="Copy to clipboard"
                >
                  {copiedUS ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 capitalize">{usWords || 'Result will appear here'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}