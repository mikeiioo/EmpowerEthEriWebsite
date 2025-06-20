
import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const programResources = [
  {
    title: "EmpowerEthEri Mentorship",
    description: "Connect with supportive mentors and find guidance for your college journey!",
    url: "/directory",
    image: "/src/assets/images/empoweretheri-program.jpg", // EmpowerEthEri mentorship program promotional image
  },
  {
    title: "Big Brothers Big Sisters Atlanta",
    description: "Mentoring programs for Atlanta youth ages 6–18.",
    url: "https://bbbsatl.org/",
    image: "/src/assets/images/bbbs-logo.jpg", // Big Brothers Big Sisters organization logo
  },
  {
    title: "Jack and Jill of America",
    description: "Leadership program supporting Black and African American youth.",
    url: "https://www.jackandjillatl.org/",
    image: "/src/assets/images/jack-and-jill-logo.jpg", // Jack and Jill organization logo
  },
  {
    title: "Upward Bound",
    description: "A federally funded college access program for low income or first-gen students.",
    url: "https://www2.ed.gov/programs/trioupbound/index.html",
    image: "/src/assets/images/upward-bound-logo.jpg", // Federal Upward Bound program logo
  },
  {
    title: "100 Black Men of Atlanta",
    description: "Empowering and mentoring Black youth with leadership, scholarship, and community engagement.",
    url: "https://100blackmen-atlanta.org/",
    image: "/src/assets/images/100-black-men-logo.jpg", // 100 Black Men organization logo
  },
  {
    title: "Metro Atlanta YMCA Academic Support",
    description: "After-school academic & mentorship programs for teens and youth.",
    url: "https://ymcaatlanta.org/academic-support/",
    image: "/src/assets/images/ymca-atlanta-logo.jpg", // YMCA Atlanta branch logo
  },
  {
    title: "Community Academic Mentoring",
    description: "Community-based mentoring and tutoring for first-gen and immigrant youth.",
    url: "https://mentor.org/programs-directory/",
    image: "/src/assets/images/community-mentoring-logo.jpg", // Community mentoring program logo
  },
];

const Programs = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    if (!search.trim()) return programResources;
    const lower = search.toLowerCase();
    return programResources.filter(
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
            {t("programsTitle")}
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            {t("programsPageDesc")}
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
                placeholder={t('searchPrograms')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full rounded-full"
                aria-label="Search programs"
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
                target={res.url.startsWith("/") ? undefined : "_blank"}
                rel={res.url.startsWith("/") ? undefined : "noopener noreferrer"}
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

export default Programs;
