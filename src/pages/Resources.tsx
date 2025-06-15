
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const resourcesData = [
  {
    key: "scholarships",
    label: "Scholarships",
    description: "Browse scholarships tailored for Eritrean and Ethiopian youth.",
    to: "/resources/scholarships",
  },
  {
    key: "applications",
    label: "Applications",
    description: "Find internship, college, and job application resources.",
    to: "/resources/applications",
  },
  {
    key: "programs",
    label: "Programs",
    description: "Discover mentorship and extracurricular programs.",
    to: "/resources/programs",
  },
  {
    key: "academics",
    label: "Academics",
    description: "Access study guides, tutoring, and academic support links.",
    to: "/resources/academics",
  },
];

const Resources = () => {
  const { t } = useLanguage();

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center event-blue font-fredoka">
            {t("navResources")}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourcesData.map((block) => (
                <Link
                  key={block.key}
                  to={block.to}
                  className="rainbow-card rounded-lg p-8 flex flex-col items-start gap-3 transition-transform hover:scale-105 hover:shadow-xl focus:scale-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary group"
                >
                  <span className="text-2xl font-semibold event-blue font-fredoka group-hover:underline">
                    {block.label}
                  </span>
                  <span className="text-gray-700">{block.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
