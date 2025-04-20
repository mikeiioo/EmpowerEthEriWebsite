
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  const { t } = useLanguage();

  const founderData = {
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "Jane Doe is a passionate advocate for youth empowerment with over 10 years of experience in education and mentorship. After immigrating from Eritrea to the United States as a child, she dedicated her career to building bridges for other young immigrants.",
    imageUrl: "/placeholder.svg",
  };

  const faqItems = [
    {
      question: "What is EmpowerEtheri?",
      answer: "EmpowerEtheri is a mentorship program connecting Eritrean and Ethiopian youth with established professionals for guidance, support, and community building."
    },
    {
      question: "Who can join as a mentee?",
      answer: "Any young person of Eritrean or Ethiopian descent between the ages of 16-25 who is looking for guidance in education, career, or cultural identity."
    },
    {
      question: "How do I become a mentor?",
      answer: "Professionals with at least 5 years of experience in their field can apply through our Profile page. All mentors undergo a background check and training."
    },
    {
      question: "Is the program free?",
      answer: "Yes, all mentorship services are provided free of charge to ensure accessibility for all youth."
    },
    {
      question: "Where do mentorship sessions take place?",
      answer: "Mentorship can be conducted virtually or in-person depending on location and preferences of the mentor-mentee pair."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-etheri-blue">
            {t('aboutFounder')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <ProfileCard 
              name={founderData.name}
              role={founderData.role}
              bio={founderData.bio}
              imageUrl={founderData.imageUrl}
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-etheri-blue">
              {t('missionStatement')}
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-4">
                EmpowerEtheri exists to bridge the gap between generations, connecting young Eritrean and 
                Ethiopian individuals with mentors who can guide them through the complexities of education, 
                career development, and cultural identity in the diaspora.
              </p>
              <p>
                We believe that by fostering these connections, we can help preserve cultural heritage 
                while empowering the next generation to thrive in their communities and professional lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-etheri-blue">
              {t('ourGoals')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-etheri-green">Education Support</h3>
                <p className="text-gray-700">
                  Provide guidance and resources for academic success from high school through higher education.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-etheri-green">Career Development</h3>
                <p className="text-gray-700">
                  Connect youth with professionals in diverse fields to explore career paths and build networks.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-etheri-green">Cultural Connection</h3>
                <p className="text-gray-700">
                  Foster pride in cultural heritage while navigating multicultural identities.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-etheri-green">Community Building</h3>
                <p className="text-gray-700">
                  Create a supportive network of peers and mentors to strengthen community bonds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-etheri-blue">
              {t('faq')}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
