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
    {
      id: 15,
      name: "Abraham Desta",
      role: "Academic Advisor",
      bio: "University professor specializing in helping first-generation college students navigate higher education successfully.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 16,
      name: "Meron Kidane",
      role: "Social Worker",
      bio: "Licensed clinical social worker focusing on family services and youth development programs.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 17,
      name: "Samuel Berhe",
      role: "Entrepreneur",
      bio: "Serial entrepreneur with expertise in tech startups and mentoring young business leaders.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 18,
      name: "Hanan Osman",
      role: "Medical Professional",
      bio: "Pediatrician committed to improving healthcare access and outcomes for underserved communities.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 19,
      name: "Yonas Ghebremedhin",
      role: "Research Scientist",
      bio: "PhD researcher in environmental science working on sustainable development projects in East Africa.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 20,
      name: "Senait Woldu",
      role: "Non-Profit Leader",
      bio: "Executive director with 15+ years experience in community development and youth empowerment programs.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 21,
      name: "Biniam Tewolde",
      role: "Data Analyst",
      bio: "Senior data scientist helping organizations make data-driven decisions and mentoring aspiring analysts.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 22,
      name: "Rahel Negash",
      role: "Marketing Professional",
      bio: "Digital marketing strategist with expertise in brand development and social media engagement.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 23,
      name: "Dawit Araya",
      role: "Policy Analyst",
      bio: "Government policy researcher focused on immigration reform and social justice initiatives.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 24,
      name: "Bethlehem Kahsay",
      role: "Graphic Designer",
      bio: "Creative professional specializing in visual storytelling and cultural preservation through design.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 25,
      name: "Tekle Gebremichael",
      role: "Construction Manager",
      bio: "Project manager with expertise in sustainable construction and workforce development programs.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 26,
      name: "Zara Habte",
      role: "Language Interpreter",
      bio: "Certified interpreter and translator helping bridge communication gaps in healthcare and legal settings.",
      imageUrl: "/placeholder.svg",
    },
  ];

  const contacts = [
    {
      id: 1,
      name: "EmpowerEthEri Office",
      role: "Administrative Center",
      bio: "Our headquarters for program coordination, mentorship matching, and general inquiries.",
      imageUrl: "/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png", // updated image
    },
    {
      id: 2,
      name: "Instagram",
      role: "Social Media",
      bio: "Follow us on Instagram for updates, stories, and community highlights.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Facebook",
      role: "Social Network",
      bio: "Connect with us on Facebook for community discussions and event updates.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "LinkedIn",
      role: "Professional Network",
      bio: "Connect with us on LinkedIn for professional networking and career opportunities.",
      imageUrl: "/placeholder.svg",
      link: "https://www.linkedin.com/in/empower-etheri-312769360/",
    },
  ];

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
              Meet the mentors behind EmpowerEthEri and stay connected!
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
                      showSocialIcons={true}
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
                  {contacts.map((contact) =>
                    contact.link ? (
                      <a
                        key={contact.id}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <ProfileCard
                          name={contact.name}
                          role={contact.role}
                          bio={contact.bio}
                          imageUrl={contact.imageUrl}
                          showSocialIcons={false}
                        />
                      </a>
                    ) : (
                      <ProfileCard
                        key={contact.id}
                        name={contact.name}
                        role={contact.role}
                        bio={contact.bio}
                        imageUrl={contact.imageUrl}
                        showSocialIcons={false}
                      />
                    )
                  )}
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
