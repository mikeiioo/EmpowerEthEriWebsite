import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const About = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1')
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2')
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3')
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4')
    },
    {
      question: t('faqQuestion5'),
      answer: t('faqAnswer5')
    }
  ];

  // Updated to replace the bottom right image with the new graduation photo
  const photoStackImages = [
    "/lovable-uploads/89518ad1-c573-46d1-ad48-a9356b22120a.png",
    "/lovable-uploads/69f79bd1-810a-4751-bccf-f5522a706cee.png",
    "/lovable-uploads/30ed17ba-64b0-4487-8ad2-51223a7eb08c.png",
    "/lovable-uploads/f25f31dd-68f9-4442-a825-68e302205a6d.png",
    "/lovable-uploads/0b896cc9-9884-4ca9-9f6a-7e706434b40a.png"
  ];

  return (
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 event-blue font-fredoka">
                {t('aboutUs')}
              </h1>
            </div>
          </div>
        </section>

        {/* Vision Statement with PhotoGrid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Vision Statement - Left Side */}
              <div className="text-left mb-12 max-w-md">
                <div className="rainbow-card rounded-lg p-8">
                  <h2 className="text-4xl font-bold mb-6 text-red-600 font-fredoka">
                    {t('ourVision')}
                  </h2>
                  <h3 className="text-3xl font-bold mb-4 event-blue font-fredoka">
                    {t('visionStatement')}
                  </h3>
                </div>
              </div>

              {/* Waffle PhotoGrid - Right Side */}
              <div className="flex-shrink-0 lg:ml-auto">
                <div className="flex flex-col items-center space-y-6">
                  {/* Top row - 3 photos */}
                  <div className="flex space-x-6">
                    {photoStackImages.slice(0, 3).map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:z-10 w-64 h-64"
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
                  {/* Bottom row - 2 photos centered between top ones */}
                  <div className="flex space-x-6" style={{ marginLeft: '6rem' }}>
                    {photoStackImages.slice(3, 5).map((image, index) => (
                      <div
                        key={index + 3}
                        className="rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:z-10 w-64 h-64"
                        style={{
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                          zIndex: index % 2 === 0 ? 2 : 1
                        }}
                      >
                        <img
                          src={image}
                          alt={`Photo ${index + 4}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
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
                    {t('missionDescription')}
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
                  <h3 className="text-xl font-semibold mb-3 event-blue">{t('collegeAdmissions')}</h3>
                  <p className="text-gray-700">
                    {t('collegeAdmissionsDesc')}
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">{t('scholarshipSupport')}</h3>
                  <p className="text-gray-700">
                    {t('scholarshipSupportDesc')}
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">{t('careerGuidance')}</h3>
                  <p className="text-gray-700">
                    {t('careerGuidanceDesc')}
                  </p>
                </div>
                <div className="rainbow-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 event-blue">{t('expandingHabeshaNetwork')}</h3>
                  <p className="text-gray-700">
                    {t('expandingHabeshaNetworkDesc')}
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
                  {t('faqTitle')}
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
