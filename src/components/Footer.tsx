
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Social media links from the contacts data
  const socialLinks = {
    facebook: "https://www.facebook.com/people/Empower-EthEri/pfbid033jiPoC2cZgH864Ms149QFM9ZogdCQRVNxhBvyKFQofdywWXBHV4pHreihx2962Zml/?mibextid=wwXIfr&rdid=V5YSkRyU231yOb1L&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FckteKjgw%2F%3Fmibextid%3DwwXIfr",
    instagram: "https://www.instagram.com/empoweretheri/",
    linkedin: "https://www.linkedin.com/in/empower-etheri-312769360/"
  };

  return (
    <footer className="bg-etheri-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">EmpowerEthEri</h3>
            <p className="text-sm mb-4">
              EST. 2025
            </p>
            <img 
              src="/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png" 
              alt="EmpowerEthEri Logo" 
              className="w-[90px] h-[90px] rounded-full object-cover bg-transparent ml-[25px]"
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
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-sm mb-2">info@empoweretheri.org</p>
            <div className="flex space-x-4 mt-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer"
              >
                <Facebook size={16} />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer"
              >
                <Instagram size={16} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; {currentYear} EmpowerEthEri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
