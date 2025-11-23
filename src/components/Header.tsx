import { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import portfolioData from '../data/portfolio.json';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { activeSection, setActiveSection } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: 'home' | 'experience' | 'education' | 'recommendations') => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name - Clickable to return home */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {portfolioData.personal.name.split(' ')[0]}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('experience')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'experience'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick('education')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'education'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              Education
            </button>
            <button
              onClick={() => handleNavClick('recommendations')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'recommendations'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              Recommendations
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('experience')}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-all ${activeSection === 'experience'
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick('education')}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-all ${activeSection === 'education'
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => handleNavClick('recommendations')}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-all ${activeSection === 'recommendations'
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                Recommendations
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

