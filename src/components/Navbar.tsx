
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (showLanguages) setShowLanguages(false);
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const changeLanguage = (lang: 'en' | 'ti' | 'am') => {
    setLanguage(lang);
    setShowLanguages(false);
  };

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navDirectory'), path: '/directory' },
  ];

  return (
    <nav className="relative bg-etheri-blue text-white shadow-md">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png" 
              alt="EmpowerEthEri Logo" 
              className="w-11 h-11 rounded-full object-cover bg-transparent"
            />
            <span className="text-xl font-bold">EmpowerEthEri</span>
          </Link>

          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-noto font-bold text-base px-2 py-1 rounded-full hover:text-etheri-yellow hover:bg-etheri-lightBlue transition-all duration-300 hover:drop-shadow-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguages}
                className="p-2 rounded-full hover:bg-etheri-lightBlue transition-colors flex items-center"
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>

              {/* Language Dropdown */}
              {showLanguages && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-20 overflow-hidden">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'en' ? 'bg-gray-200' : ''}`}
                  >
                    {t('languageEn')}
                  </button>
                  <button
                    onClick={() => changeLanguage('ti')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'ti' ? 'bg-gray-200' : ''}`}
                  >
                    {t('languageTi')}
                  </button>
                  <button
                    onClick={() => changeLanguage('am')}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'am' ? 'bg-gray-200' : ''}`}
                  >
                    {t('languageAm')}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleNav}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-etheri-lightBlue">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md hover:bg-etheri-blue font-noto font-bold text-base transition-all duration-300 hover:drop-shadow-lg"
                onClick={toggleNav}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
