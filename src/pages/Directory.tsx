import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProfileCard from '../components/ProfileCard';

type DirectoryTab = 'mentors' | 'contacts';

const Directory = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<DirectoryTab>('mentors');

  // Sample data - would come from API in real implementation
  const mentors = [
    {
      id: 1,
      name: "John Smith",
      role: "Software Engineer",
      bio: "20+ years experience in software development with expertise in web applications and mentoring junior developers.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Healthcare Professional",
      bio: "Registered nurse with a passion for community health education and preventative care.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Education Specialist",
      bio: "Former school principal focused on educational equity and college preparation for underrepresented students.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Aida Haile",
      role: "Business Consultant",
      bio: "Entrepreneur with experience in starting and scaling small businesses in both the US and East Africa.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Daniel Tekle",
      role: "Legal Advisor",
      bio: "Immigration attorney specializing in asylum cases and family reunification for East African communities.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Rebecca Yohannes",
      role: "Mental Health Counselor",
      bio: "Licensed therapist focused on trauma-informed care for immigrant and refugee populations.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Financial Advisor",
      bio: "Certified financial planner helping first-generation professionals build wealth and financial literacy.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Feven Mekonnen",
      role: "Arts & Culture Advocate",
      bio: "Documentary filmmaker preserving cultural stories and traditional arts from Ethiopia and Eritrea.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 9,
      name: "Thomas Habtom",
      role: "STEM Researcher",
      bio: "Biomedical engineer working on innovative healthcare solutions with experience mentoring students in STEM.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 10,
      name: "Sophia Ahmed",
      role: "Community Organizer",
      bio: "Dedicated to creating spaces for young people to engage with their heritage and build leadership skills.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 11,
      name: "David Kifle",
      role: "Technology Specialist",
      bio: "IT professional focused on digital literacy and closing the technology gap in underserved communities.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 12,
      name: "Hannah Tesfaye",
      role: "Public Health Expert",
      bio: "Epidemiologist working on health education and access to care for immigrant communities.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 13,
      name: "Nathan Girma",
      role: "Engineering Mentor",
      bio: "Civil engineer with experience in infrastructure projects both in the US and East Africa.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 14,
      name: "Rachel Solomon",
      role: "Communications Specialist",
      bio: "Public relations professional helping organizations effectively share their stories and build community connections.",
      imageUrl: "/placeholder.svg",
    },
  ];

  const contacts = [
    {
      id: 1,
      name: "EmpowerEtheri Main Office",
      role: "Administrative Center",
      bio: "Our headquarters for program coordination, mentorship matching, and general inquiries.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Youth Support Hotline",
      role: "Crisis & Resources",
      bio: "24/7 support line for youth in need of immediate assistance or resources.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Mentorship Coordinator",
      role: "Program Management",
      bio: "Contact for questions about the mentorship program, application process, or mentor-mentee matching.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Community Partnerships",
      role: "Organizational Outreach",
      bio: "For organizations interested in partnering with EmpowerEtheri on initiatives or events.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Volunteer Coordinator",
      role: "Volunteer Management",
      bio: "Information about volunteer opportunities and how to get involved with our organization.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-10 text-center event-blue">
            {t('navDirectory')}
          </h1>

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
            {activeTab === 'mentors' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 event-blue">
                  {t('directoryMentors')}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {mentors.map((mentor) => (
                    <ProfileCard
                      key={mentor.id}
                      name={mentor.name}
                      role={mentor.role}
                      bio={mentor.bio}
                      imageUrl={mentor.imageUrl}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 event-blue">
                  {t('directoryContacts')}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {contacts.map((contact) => (
                    <ProfileCard
                      key={contact.id}
                      name={contact.name}
                      role={contact.role}
                      bio={contact.bio}
                      imageUrl={contact.imageUrl}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;