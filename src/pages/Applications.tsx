
import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const applicationResources = [
  {
    title: "Common App",
    description: "Apply to hundreds of colleges with a single application. Widely used for undergraduate admissions in the US.",
    url: "https://www.commonapp.org/",
    image: "/src/assets/images/common-app-logo.jpg", // Common Application platform official logo
  },
  {
    title: "Coalition for College",
    description: "Helping students streamline their application process and access support.",
    url: "https://www.coalitionforcollegeaccess.org/",
    image: "/src/assets/images/coalition-college-logo.jpg", // Coalition for College platform logo
  },
  {
    title: "Common Black College Application",
    description: "Apply to dozens of HBCUs with one application for one fee.",
    url: "https://commonblackcollegeapp.com/",
    image: "/src/assets/images/cbca-logo.jpg", // Common Black College Application platform logo
  },
  {
    title: "NACAC College Fairs & Resources",
    description: "Guidance, webinars, and application resources for students, parents and counselors.",
    url: "https://www.nacacattend.org/",
    image: "/src/assets/images/nacac-logo.jpg", // National Association for College Admission Counseling logo
  },
  {
    title: "InternshipFinder",
    description: "Discover and search for internship opportunities.",
    url: "https://www.internships.com/",
    image: "/src/assets/images/internship-finder-logo.jpg", // Internships.com platform logo
  },
  {
    title: "Handshake",
    description: "Find jobs and internships for students and new grads.",
    url: "https://joinhandshake.com/",
    image: "/src/assets/images/handshake-logo.jpg", // Handshake career platform logo
  },
  {
    title: "LinkedIn Jobs",
    description: "Job and internship search tool with networking features.",
    url: "https://www.linkedin.com/jobs/",
    image: "/src/assets/images/linkedin-jobs-logo.jpg", // LinkedIn Jobs platform logo
  },
  {
    title: "Indeed",
    description: "Popular job search engine for all experience levels.",
    url: "https://www.indeed.com/",
    image: "/src/assets/images/indeed-logo.jpg", // Indeed job search platform logo
  },
  {
    title: "USAJOBS",
    description: "Federal government jobs and internships.",
    url: "https://www.usajobs.gov/",
    image: "/src/assets/images/usajobs-logo.jpg", // USAJobs federal employment platform logo
  },
  {
    title: "CareerOneStop",
    description: "Explore careers, education, training, and jobs.",
    url: "https://www.careeronestop.org/",
    image: "/src/assets/images/careeronestop-logo.jpg", // CareerOneStop government resource logo
  },
];

const Applications = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    if (!search.trim()) return applicationResources;
    const lower = search.toLowerCase();
    return applicationResources.filter(
      (res) =>
        res.title.toLowerCase().includes(lower) ||
        res.description.toLowerCase().includes(lower)
    );
  }, [search]);

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 event-blue font-fredoka">
            {t("applicationsTitle")}
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            {t("applicationsPageDesc")}
          </p>
          <div className="mb-8 text-left">
            <Link
              to="/resources"
              className="inline-block px-4 py-1.5 rounded-full text-sm bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition mb-6"
            >
              {t('backToResources')}
            </Link>
          </div>
          <div className="mb-8 flex items-center gap-2 max-w-md w-full">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder={t('searchApplications')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full rounded-full"
                aria-label="Search applications"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredResources.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-10">
                {t('noResults')}
              </div>
            )}
            {filteredResources.map((res) => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition shadow-xl rounded-2xl bg-white/80 hover:bg-white scale-100 hover:scale-105 ring-1 ring-etheri-blue/10 hover:ring-etheri-blue/70 cursor-pointer flex flex-col h-[340px] md:h-[370px]"
                style={{ textDecoration: "none" }}
                tabIndex={0}
              >
                <div className="flex-shrink-0 w-full h-36 md:h-40 flex items-start justify-center overflow-hidden rounded-t-2xl bg-gray-100 border-b">
                  {res.image ? (
                    <img
                      src={res.image}
                      alt={res.title}
                      className="object-contain h-full w-full"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-center text-gray-400">No Image</div>
                  )}
                </div>
                <div className="flex-1 flex flex-col px-4 py-4">
                  <div className="font-semibold text-lg md:text-xl text-etheri-blue group-hover:text-etheri-lightBlue mb-2 line-clamp-2 overflow-ellipsis break-words">
                    {res.title}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base mb-3 leading-snug flex-1 overflow-hidden line-clamp-4 break-words">
                    {res.description}
                  </div>
                  <div className="mt-auto inline-flex items-center gap-1 text-sm text-etheri-yellow group-hover:text-yellow-600">
                    {t('visitSite')} <span aria-hidden>↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
