import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const About = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: "What is EmpowerEthEri?",
      answer: "EmpowerEthEri is a mentorship program connecting Eritrean and Ethiopian youth with established older peers for guidance, support, and community building."
    },
    {
      question: "Who can join as a mentee?",
      answer: "Any young person of Eritrean or Ethiopian descent in high school who is looking for guidance in education, career, or cultural identity."
    },
    {
      question: "How do I become a mentor?",
      answer: "Please contact our main office through our social media or email."
    },
    {
      question: "Is the program free?",
      answer: "Yes, all mentorship services are provided free of charge to ensure accessibility for all youth."
    },
    {
      question: "Where do mentorship sessions take place?",
      answer: "Mentorship can be conducted virtually or in-person depending on location and preferences of the mentor-mentee pair. However there will be many inperson and virtual events with the everyone in the program"
    }
  ];

  // Reduced photo collection with 5 images
  const photoStackImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop"
  ];

  return (
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 event-blue font-fredoka">
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* Vision Statement with PhotoStack */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Vision Statement - Left Side */}
              <div className="text-left mb-12 max-w-md">
                <h2 className="text-4xl font-bold mb-6 event-blue font-fredoka">
                  Our Vision
                </h2>
                <h3 className="text-3xl font-bold mb-4 text-green-600 font-fredoka">
                  EmpowerEthEri hopes to realize a future where every East African high school student in the Metro Atlanta area understands their options for higher education and maximizes their potential.
                </h3>
              </div>

              {/* PhotoGrid - Right Side */}
              <div className="flex-shrink-0 lg:ml-auto">
                <div className="grid grid-cols-3 gap-0 w-[600px]">
                  {photoStackImages.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:z-10 w-44 h-44"
                      style={{
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                        zIndex: index % 2 === 0 ? 2 : 1
                      }}
                    >
                      <img
                        src={image}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
                  {t('missionStatement')}
                </h2>
                <div className="prose prose-lg mx-auto">
                  <p className="mb-4 text-gray-700">
                    EmpowerEthEri aims to maximize higher education opportunities for East African youth by providing information and resources to ensure their success. Our organization utilizes a free mentorship program created by first-generation East African college students and conducts informational events tailored to support academic growth and achievement. When students are fully equipped to succeed during the college application process, we believe this can then empower kids to fulfill their potential—whatever that may look like.
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
