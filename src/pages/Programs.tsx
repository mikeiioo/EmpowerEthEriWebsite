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
    image: "/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png",
  },
  {
    title: "Big Brothers Big Sisters Atlanta",
    description: "Mentoring programs for Atlanta youth ages 6–18.",
    url: "https://bbbsatl.org/",
    image: "/lovable-uploads/7754fcfd-44a8-4205-bd02-8e7c54d39c9e.png",
  },
  {
    title: "Jack and Jill of America",
    description: "Leadership program supporting Black and African American youth.",
    url: "https://www.jackandjillatl.org/",
    image: "/lovable-uploads/fe38124c-0961-431b-b384-a39660448d05.png",
  },
  {
    title: "Upward Bound",
    description: "A federally funded college access program for low income or first-gen students.",
    url: "https://www2.ed.gov/programs/trioupbound/index.html",
    image: "/lovable-uploads/db799310-ba94-49cd-a0fe-93ac07dea3bf.png",
  },
  {
    title: "100 Black Men of Atlanta",
    description: "Empowering and mentoring Black youth with leadership, scholarship, and community engagement.",
    url: "https://100blackmen-atlanta.org/",
    image: "/lovable-uploads/ab256424-971f-4efc-b462-cd676759e655.png",
  },
  {
    title: "Metro Atlanta YMCA Academic Support",
    description: "After-school academic & mentorship programs for teens and youth.",
    url: "https://ymcaatlanta.org/academic-support/",
    image: "/lovable-uploads/e569157b-0a6e-459f-882e-779d010f636f.png",
  },
  {
    title: "Community Academic Mentoring",
    description: "Community-based mentoring and tutoring for first-gen and immigrant youth.",
    url: "https://mentor.org/programs-directory/",
    image: "/lovable-uploads/4e68cbd2-22b5-4493-a2f8-0d991144ee9c.png",
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
            {t("Programs") || "Programs"}
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Discover mentorship opportunities and extracurricular programs that support youth in your community!
          </p>
          <div className="mb-8 text-left">
            <Link
              to="/resources"
              className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition mb-6"
            >
              &larr; Back to Resources
            </Link>
          </div>
          <div className="mb-8 flex items-center gap-2 max-w-md w-full">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search programs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full"
                aria-label="Search programs"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredResources.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-10">
                No results found.
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
                    Visit Site <span aria-hidden>↗</span>
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
