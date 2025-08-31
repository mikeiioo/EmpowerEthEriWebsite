
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import MentorsSection from '../components/directory/MentorsSection';
import ContactsSection from '../components/directory/ContactsSection';

type DirectoryTab = 'mentors' | 'contacts';

const Directory = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<DirectoryTab>('mentors');

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 event-blue font-fredoka">
              {t('navDirectory')}
            </h1>
            <p className="text-lg md:text-xl event-blue font-medium font-fredoka">
              {t('directoryDescription')}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-full">
              <button
                className={`switch-tab ${activeTab === 'mentors' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('mentors')}
              >
                {t('directoryMentors')}
              </button>
              <button
                className={`switch-tab ${activeTab === 'contacts' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('contacts')}
              >
                {t('directoryContacts')}
              </button>
            </div>
          </div>

          {/* Directory Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'mentors' && <MentorsSection />}
            {activeTab === 'contacts' && <ContactsSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
