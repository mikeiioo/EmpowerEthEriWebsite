
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const { t } = useLanguage();

  // Updated carousel images using provided uploads
  const carouselImages = [
    {
      src: "/lovable-uploads/7754fcfd-44a8-4205-bd02-8e7c54d39c9e.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/434f3934-db86-4be1-9504-bbde560c3030.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/d7638d8b-6b0f-4630-bd45-956c85476903.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/4e68cbd2-22b5-4493-a2f8-0d991144ee9c.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/fe38124c-0961-431b-b384-a39660448d05.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/e569157b-0a6e-459f-882e-779d010f636f.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/db799310-ba94-49cd-a0fe-93ac07dea3bf.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/f6b8403e-46f5-4dc8-aa45-67da8ca97d10.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/ab256424-971f-4efc-b462-cd676759e655.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
    {
      src: "/lovable-uploads/618ff5d7-b258-496d-809c-1183c8e3918f.png",
      alt: "ALT TEXT HERE",
      caption: "CAPTION HERE"
    },
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
              <span className="drop-shadow-lg">EmpowerEthEri</span>
            </h1>
            <div className="font-bold text-lg md:text-2xl text-gray-700 mb-6">
              <span>Bringing Academic and Career Empowerment to the Habesha Diaspora</span>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src="/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png"
                alt="EmpowerEthEri Logo"
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
              <h2 className="text-3xl font-bold mb-8 text-center event-blue">Our Impact</h2>
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </section>

        {/* Mission Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 event-blue">Our Mission</h2>
                <p className="text-lg mb-8 text-gray-700">
                  EmpowerEthEri is a nonprofit mentorship program dedicated to connecting young Eritrean and Ethiopian people within the Metro Atlanta community to mentors who can guide them through college applications, career development, and navigating adulthood.
                </p>
                <div className="mt-8">
                  <a 
                    href="/about" 
                    className="inline-block px-6 py-3 bg-etheri-blue text-white font-medium rounded-md hover:bg-etheri-lightBlue transition-all"
                  >
                    Learn More About Us
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
                <p className="text-white">Youth Mentored</p>
              </div>
              <div className="p-8 rounded-lg text-center bg-red-500 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">25</div>
                <p className="text-white">Active Mentors</p>
              </div>
              <div className="p-8 rounded-lg text-center bg-blue-500 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">20+</div>
                <p className="text-white">schools across the country</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="rainbow-card rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 event-blue">Ready to Get Involved?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                Whether you're looking for a mentor or want to share your knowledge with the next generation,
                we have a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/directory" 
                  className="px-6 py-3 bg-etheri-blue text-white font-medium rounded-md hover:bg-etheri-lightBlue transition-all"
                >
                  Find a Mentor
                </a>
                <a 
                  href="/directory" 
                  className="px-6 py-3 bg-etheri-yellow text-gray-800 font-medium rounded-md hover:bg-opacity-90 transition-all"
                >
                  Become a Mentor
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

