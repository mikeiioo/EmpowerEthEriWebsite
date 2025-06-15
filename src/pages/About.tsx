import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center event-blue font-fredoka">
            {t("navAbout")}
          </h1>
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <section className="mb-12">
              <div className="rainbow-card rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 event-blue">Our Mission</h2>
                <p className="text-lg mb-8 text-gray-700">
                  EmpowerEthEri is a nonprofit mentorship program dedicated to connecting young Eritrean and Ethiopian people within the Metro Atlanta community to mentors who can guide them through college applications, career development, and navigating adulthood.
                </p>
              </div>
            </section>

            {/* Our Goals */}
            <section className="mb-12">
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 event-blue">Our Goals</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li className="mb-4">
                    Provide guidance and support to Eritrean and Ethiopian youth in Metro Atlanta.
                  </li>
                  <li className="mb-4">
                    Offer resources and mentorship for college applications and career development.
                  </li>
                  <li className="mb-4">
                    Foster a strong sense of community and cultural identity.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <div className="rainbow-card rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 event-blue">
                  {t("faq")}
                </h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 event-blue">
                    Who can join EmpowerEthEri?
                  </h3>
                  <p className="text-gray-700">
                    Any Eritrean or Ethiopian youth in the Metro Atlanta area
                    seeking mentorship and guidance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 event-blue">
                    How can I become a mentor?
                  </h3>
                  <p className="text-gray-700">
                    If you are passionate about guiding young people and have
                    experience in college applications or career development,
                    we encourage you to apply!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
