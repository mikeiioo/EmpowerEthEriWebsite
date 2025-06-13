
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-etheri-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">EmpowerEtheri</h3>
            <p className="text-sm mb-4">
              EST. 2025
            </p>
            <img 
              src="/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png" 
              alt="EmpowerEtheri Logo" 
              className="w-16 h-16 rounded-full object-cover bg-transparent"
            />
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-etheri-yellow transition-colors">
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-etheri-yellow transition-colors">
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-sm hover:text-etheri-yellow transition-colors">
                  {t('navDirectory')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm hover:text-etheri-yellow transition-colors">
                  {t('navResources')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-sm mb-2">info@empoweretheri.org</p>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons would go here */}
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <span className="sr-only">Facebook</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <span className="sr-only">Twitter</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <span className="sr-only">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; {currentYear} EmpowerEtheri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
