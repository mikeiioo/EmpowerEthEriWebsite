
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const Scholarships = () => {
  const { t } = useLanguage();
  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 event-blue font-fredoka">{t("Scholarships") || "Scholarships"}</h1>
          <p className="mb-10 text-lg text-gray-700">
            Explore scholarships for Eritrean and Ethiopian students. This page will soon feature curated opportunities updated regularly.
          </p>
          <Link
            to="/resources"
            className="inline-block px-6 py-2 mt-3 rounded-full bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition"
          >
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
