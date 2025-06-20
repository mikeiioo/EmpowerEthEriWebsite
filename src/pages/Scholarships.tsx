
import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const scholarshipResources = [
  {
    title: "United Negro College Fund",
    description: "Multiple scholarships for Black students, including first-gen and students from Africa.",
    url: "https://uncf.org/scholarships",
    image: "/src/assets/images/uncf-logo.jpg", // United Negro College Fund official logo
  },
  {
    title: "The Gates Scholarship",
    description: "Highly competitive, full scholarship for outstanding, minority, high school seniors.",
    url: "https://www.thegatesscholarship.org/",
    image: "/src/assets/images/gates-scholarship-logo.jpg", // Gates Foundation scholarship program logo
  },
  {
    title: "International Student Scholarships at Georgia State University",
    description: "For international and first-gen students, including those from Ethiopia and Eritrea.",
    url: "https://international.gsu.edu/current-students/scholarships/",
    image: "/src/assets/images/gsu-logo.jpg", // Georgia State University official logo
  },
  {
    title: "Fastweb Scholarships Database",
    description: "A massive searchable database of scholarships for various backgrounds and interests.",
    url: "https://www.fastweb.com/",
    image: "/src/assets/images/fastweb-logo.jpg", // Fastweb scholarship platform logo
  },
  {
    title: "Scholarships.com",
    description: "Find scholarships for African, international, and first-generation students.",
    url: "https://www.scholarships.com/",
    image: "/src/assets/images/scholarships-com-logo.jpg", // Scholarships.com platform logo
  },
  {
    title: "African American Scholarships - NAACP",
    description: "Curated scholarships for Black and African American students.",
    url: "https://naacp.org/find-resources/scholarships-awards-internships/scholarships",
    image: "/src/assets/images/naacp-logo.jpg", // NAACP organization official logo
  },
  {
    title: "Bold.org Scholarships",
    description: "Extensive lists for first-gen, Black, African, and STEM students.",
    url: "https://bold.org/scholarships/",
    image: "/src/assets/images/bold-org-logo.jpg", // Bold.org scholarship platform logo
  },
];

const Scholarships = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    if (!search.trim()) return scholarshipResources;
    const lower = search.toLowerCase();
    return scholarshipResources.filter(
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
            {t("scholarshipsTitle")}
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            {t("scholarshipsPageDesc")}
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
                placeholder={t('searchScholarships')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full rounded-full"
                aria-label="Search scholarships"
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

export default Scholarships;
