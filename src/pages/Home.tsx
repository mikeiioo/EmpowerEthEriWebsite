
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const { t } = useLanguage();

  // Sample images for the carousel - you can replace these with your own images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      alt: "Young person mentoring",
      caption: "Empowering the next generation through mentorship"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      alt: "Learning together",
      caption: "Building skills for tomorrow's challenges"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      alt: "Digital literacy",
      caption: "Bridging the digital divide in our community"
    }
  ];

  return (
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 event-blue">
              {t('tagline')}
            </h1>
            <div className="mt-8 flex justify-center">
              <img 
                src="/lovable-uploads/3136d750-e6e8-4eab-a410-4e320fef8135.png" 
                alt="EmpowerEtheri Logo" 
                className="w-64 h-64 md:w-80 md:h-80 mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
                  EmpowerEtheri is dedicated to connecting young Eritrean and Ethiopian people with mentors
                  who can guide them through education, career development, and cultural identity.
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
              <div className="rainbow-card p-8 rounded-lg text-center">
                <div className="text-4xl font-bold event-blue mb-2">100+</div>
                <p className="text-gray-600">Youth Mentored</p>
              </div>
              <div className="rainbow-card p-8 rounded-lg text-center">
                <div className="text-4xl font-bold event-blue mb-2">30+</div>
                <p className="text-gray-600">Active Mentors</p>
              </div>
              <div className="rainbow-card p-8 rounded-lg text-center">
                <div className="text-4xl font-bold event-blue mb-2">15+</div>
                <p className="text-gray-600">Partner Organizations</p>
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
