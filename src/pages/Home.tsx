
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const { t } = useLanguage();

  // Carousel images with direct paths to uploaded images
  const carouselImages = [
    {
      src: "/lovable-uploads/84170efc-7566-46ca-a93b-e1783794d464.png",
      alt: "Questbridge",
      caption: "Ruth had all of the nessescary componenets for a great application, it was with the help she recieved that she could piece it together."
    },
    {
      src: "/lovable-uploads/dcce0fd1-7cfb-47d6-8508-eebc4751417f.png",
      alt: "Emory '29",
      caption: "Blain stood out with her acomplishments and with guidance from her mentor, she learned how to translate his experiences into a compelling story that resonated with college admissions officers."
    },
    {
      src: "/lovable-uploads/e8613ed8-d7ba-426e-8931-98304d291dde.png",
      alt: "University of Georgia student celebrating",
      caption: "Kebron learned how center her around her interests, making her an excellent cadidate for her major"
    },
    {
      src: "/lovable-uploads/2c93f941-214b-4452-9a34-6b2af88b309c.png",
      alt: "Student with University of Georgia shirt",
      caption: "Haset struggled to find the schools she wanted to apply to, but with her mentor's help was able to research the perfect places to apply!"
    },
    {
      src: "/lovable-uploads/dd3a813c-e5e0-4a5d-ae30-fc72418afefc.png",
      alt: "Student celebrating Augusta University acceptance",
      caption: "Ruhama was able to find out what major best suited her talents, and how to succceed early in her career in the industry."
    },
    {
      src: "/lovable-uploads/b5df13fe-a6be-44ec-9114-17baeb08ed6a.png",
      alt: "Student with University of Pennsylvania gear",
      caption: "Liyah was able to properly communicate with the alumni who interviewed her, leading to her acceptance at her dream school."
    },
    {
      src: "/lovable-uploads/0f5a10a6-d500-4b6e-b21f-3bdc71cc859d.png",
      alt: "Student in University of Georgia shirt",
      caption: "Selam is an upcoming mentor wanting to give back and help more students get into their dream school like how EmpowerEthEri helped her."
    },
    {
      src: "/lovable-uploads/e3020200-c1fa-4113-8b78-4efe04851b50.png",
      alt: "Student representing Vanderbilt University",
      caption: "Yafet was able to find his theme within his application from the help he recieved from his mentor."
    },
    {
      src: "/lovable-uploads/63bda0c0-7864-4572-8b1a-e8f899854efb.png",
      alt: "Student in Georgia Tech gear",
      caption: "Agne was able to showcase how he would make a huge impact on campus with the extracurriculars he completed"
    },
    {
      src: "/lovable-uploads/6828ceea-2cee-49d6-808a-cf9c8f37c86a.png",
      alt: "Student representing University of Miami",
      caption: "Yabsira was accepted to the University of Miami with a FULL-RIDE scholarship, through the support he recieved from his mentor."
    }
  ];

  return (
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="font-bold event-blue mb-4"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              <span className="drop-shadow-lg">{t('empowerEthEri')}</span>
            </h1>
            <div className="font-bold text-lg md:text-2xl text-gray-700 mb-6">
              <span>{t('homeTagline')}</span>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src="/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png"
                alt="EmpowerEthEri Logo - Official organization emblem"
                className="w-56 h-56 md:w-[18rem] md:h-[18rem] mx-auto rounded-full object-cover shadow-xl animate-slide-fade-in-up"
                style={{ aspectRatio: 1 }}
              />
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center event-blue">
                {t('impactTitle')}
              </h2>
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </section>

        {/* Mission Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 event-blue">{t('ourMission')}</h2>
                <p className="text-lg mb-8 text-gray-700">
                  {t('ourMissionDescription')}
                </p>
                <div className="mt-8">
                  <a 
                    href="/about" 
                    className="inline-block px-6 py-3 bg-etheri-blue text-white font-medium rounded-md hover:bg-etheri-lightBlue transition-all"
                  >
                    {t('learnMoreAboutUs')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg text-center bg-green-500 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-white">{t('youthMentored')}</p>
              </div>
              <div className="p-8 rounded-lg text-center bg-red-500 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-white">{t('activeMentors')}</p>
              </div>
              <div className="p-8 rounded-lg text-center bg-blue-500 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">20+</div>
                <p className="text-white">{t('schoolsAcrossCountry')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="rainbow-card rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 event-blue">{t('readyToGetInvolved')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                {t('readyToGetInvolvedDescription')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-etheri-blue text-white font-medium rounded-md hover:bg-etheri-lightBlue transition-all"
                >
                  Become a Mentee
                </a>
                <a 
                  href="/directory" 
                  className="px-6 py-3 bg-etheri-yellow text-gray-800 font-medium rounded-md hover:bg-opacity-90 transition-all"
                >
                  Find a Mentor
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
