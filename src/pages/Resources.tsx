
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const Resources = () => {
  const { t } = useLanguage();

  const resourcesData = [
    {
      key: "applications",
      label: t('applicationsTitle'),
      description: t('applicationsDesc'),
      to: "/resources/applications",
    },
    {
      key: "scholarships",
      label: t('scholarshipsTitle'),
      description: t('scholarshipsDesc'),
      to: "/resources/scholarships",
    },
    {
      key: "academics",
      label: t('academicsTitle'),
      description: t('academicsDesc'),
      to: "/resources/academics",
    },
    {
      key: "programs",
      label: t('programsTitle'),
      description: t('programsDesc'),
      to: "/resources/programs",
    },
  ];

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
