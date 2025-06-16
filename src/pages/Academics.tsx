
import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const academicResources = [
  {
    title: "Khan Academy",
    description: "Free online courses and tutoring in math, science, SAT, and more.",
    url: "https://www.khanacademy.org/",
    image: "/src/assets/images/khan-academy-logo.jpg", // Khan Academy brand logo for recognition
  },
  {
    title: "Chegg Study",
    description: "Accessible solutions and expert help for all your coursework needs.",
    url: "https://www.chegg.com/study",
    image: "/src/assets/images/chegg-logo.jpg", // Chegg brand logo for platform identification
  },
  {
    title: "Quizlet",
    description: "Create & discover study sets, use flashcards, games, and study plans.",
    url: "https://quizlet.com/",
    image: "/src/assets/images/quizlet-logo.jpg", // Quizlet brand logo for study tool recognition
  },
  {
    title: "Atlanta Public Library Tutoring",
    description: "Access free online tutoring and study resources with your library card.",
    url: "https://afpls.org/online-tutoring-research-resources",
    image: "/src/assets/images/atlanta-library-logo.jpg", // Atlanta library system logo
  },
  {
    title: "Georgia Virtual Learning",
    description: "Free statewide digital resources for Georgia academic support.",
    url: "https://www.georgiastandards.org/Resources/Pages/Tools/Georgia-Virtual-Learning.aspx",
    image: "/src/assets/images/georgia-education-logo.jpg", // Georgia state education department logo
  },
  {
    title: "Ethiopian and Eritrean Students Union (Sample)",
    description: "Connect with local academic support and peer tutoring groups.",
    url: "https://eesuatlanta.org/",
    image: "/src/assets/images/eesu-logo.jpg", // Ethiopian Eritrean Students Union logo
  },
  {
    title: "EdX Free Courses",
    description: "Access to free and affordable courses from top universities.",
    url: "https://www.edx.org/",
    image: "/src/assets/images/edx-logo.jpg", // EdX platform logo for online learning
  },
];

const Academics = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    if (!search.trim()) return academicResources;
    const lower = search.toLowerCase();
    return academicResources.filter(
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
            {t("academicsTitle")}
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            {t("academicsPageDesc")}
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
                placeholder={t('searchAcademics')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full rounded-full"
                aria-label="Search academics"
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

export default Academics;
