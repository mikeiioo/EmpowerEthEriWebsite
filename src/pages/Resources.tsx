
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Resources = () => {
  const { t } = useLanguage();

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-10 text-center event-blue font-fredoka">
            {t('navResources')}
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="rainbow-card rounded-lg p-8 text-center">
              <p className="text-lg text-gray-700">
                Resources page content coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
