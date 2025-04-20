
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Profile = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center text-etheri-blue">
          {t('navProfile')}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center text-gray-600">
            Profile page content coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
