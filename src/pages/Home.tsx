import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const { t } = useLanguage();

  // Updated carousel images to use the same three images from the About page
  const carouselImages = [
    {
      src: "/lovable-uploads/89518ad1-c573-46d1-ad48-a9356b22120a.png",
      alt: "EmpowerEthEri community gathering",
      caption: "Building connections within our Habesha community"
    },
    {
      src: "/lovable-uploads/69f79bd1-810a-4751-bccf-f5522a706cee.png",
      alt: "Student academic achievement",
      caption: "Celebrating educational milestones and success"
    },
    {
      src: "/lovable-uploads/30ed17ba-64b0-4487-8ad2-51223a7eb08c.png",
      alt: "Mentor guiding student",
      caption: "One-on-one mentorship making a difference"
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
              <span className="drop-shadow-lg">EmpowerEthEri</span>
            </h1>
            <div className="font-bold text-lg md:text-2xl text-gray-700 mb-6">
              <span>Bringing Academic and Career Empowerment to the Habesha Diaspora</span>
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
                The Impact we have made so far...
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
                <div className="text-4xl font-bold mb-2">25+</div>
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
