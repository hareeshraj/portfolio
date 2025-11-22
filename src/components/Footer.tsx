import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Connection Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Get in touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to reach out via email or connect with me on social media
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Email with Copy */}
          <div className="relative min-w-[220px] sm:min-w-[230px]">
            <div
              className={`relative flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border transition-all duration-300 cursor-pointer ${copied
                ? 'border-green-500 dark:border-green-500 ring-2 ring-green-500/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
                }`}
              onMouseEnter={() => setShowCopy(true)}
              onMouseLeave={() => setShowCopy(false)}
              onClick={copyEmail}
            >
              <input
                type="text"
                value={portfolioData.personal.email}
                readOnly
                className="bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 text-sm md:text-base cursor-pointer w-full pr-2"
              />
              {/* Absolutely positioned copy button */}
              <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-200 ${showCopy || copied ? 'opacity-100' : 'opacity-0'}`}>
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded bg-white dark:bg-gray-800 shadow-sm ${copied ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                    }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    copyEmail();
                  }}
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={portfolioData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              aria-label="LeetCode"
            >
              <img src="/images/leetcode.png" className="w-6 h-6" />
            </a>
            {portfolioData.social.instagram && (
              <a
                href={portfolioData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

