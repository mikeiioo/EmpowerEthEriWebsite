import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const About = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: "What is EmpowerEthEri?",
      answer: "EmpowerEthEri is a mentorship program connecting Eritrean and Ethiopian youth with established professionals for guidance, support, and community building."
    },
    {
      question: "Who can join as a mentee?",
      answer: "Any young person of Eritrean or Ethiopian descent between the ages of 16-25 who is looking for guidance in education, career, or cultural identity."
    },
    {
      question: "How do I become a mentor?",
      answer: "Professionals with at least 5 years of experience in their field can apply through our Directory page. All mentors undergo a background check and training."
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
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 event-blue font-fredoka">
                About
              </h1>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center event-blue">
                  {t('missionStatement')}
                </h2>
                <div className="prose prose-lg mx-auto">
                  <p className="mb-4 text-gray-700">
                    EmpowerEthEri exists to bridge the gap between generations, connecting young Eritrean and 
                    Ethiopian individuals with mentors who can guide them through the complexities of education, 
                    career development, and cultural identity in the diaspora.
                  </p>
                  <p className="text-gray-700">
                    We believe that by fostering these connections, we can help preserve cultural heritage 
                    while empowering the next generation to thrive in their communities and professional lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center event-blue">
                {t('ourGoals')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">College Admissions</h3>
                  <p className="text-gray-700">
                    Guidance and support for navigating the college application process and higher education opportunities.
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">Scholarship Support</h3>
                  <p className="text-gray-700">
                    Assistance in finding and applying for scholarships to make education more accessible and affordable.
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">Career Guidance</h3>
                  <p className="text-gray-700">
                    Connect youth with professionals in diverse fields to explore career paths and build networks.
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">Expanding the Habesha network</h3>
                  <p className="text-gray-700">
                    Building connections within the Habesha community to strengthen cultural bonds and professional relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-4xl font-bold mb-10 text-center event-blue">
                  FAQ
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium event-blue">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
