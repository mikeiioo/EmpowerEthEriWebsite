
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollArea } from "../components/ui/scroll-area";

const applicationResources = [
  {
    title: "Common App",
    description: "Apply to hundreds of colleges with a single application. Widely used for undergraduate admissions in the US.",
    url: "https://www.commonapp.org/",
    image: "/lovable-uploads/db799310-ba94-49cd-a0fe-93ac07dea3bf.png", // example, update image if you want
  },
  {
    title: "Coalition for College",
    description: "Helping students streamline their application process and access support.",
    url: "https://www.coalitionforcollegeaccess.org/",
    image: "/lovable-uploads/434f3934-db86-4be1-9504-bbde560c3030.png",
  },
  {
    title: "Common Black College Application",
    description: "Apply to dozens of HBCUs with one application for one fee.",
    url: "https://commonblackcollegeapp.com/",
    image: "/lovable-uploads/d7638d8b-6b0f-4630-bd45-956c85476903.png",
  },
  {
    title: "NACAC College Fairs & Resources",
    description: "Guidance, webinars, and application resources for students, parents and counselors.",
    url: "https://www.nacacattend.org/",
    image: "/lovable-uploads/4e68cbd2-22b5-4493-a2f8-0d991144ee9c.png",
  },
  {
    title: "InternshipFinder",
    description: "Discover and search for internship opportunities.",
    url: "https://www.internships.com/",
    image: "/lovable-uploads/7754fcfd-44a8-4205-bd02-8e7c54d39c9e.png",
  },
  {
    title: "Handshake",
    description: "Find jobs and internships for students and new grads.",
    url: "https://joinhandshake.com/",
    image: "/lovable-uploads/fe38124c-0961-431b-b384-a39660448d05.png",
  },
  {
    title: "LinkedIn Jobs",
    description: "Job and internship search tool with networking features.",
    url: "https://www.linkedin.com/jobs/",
    image: "/lovable-uploads/ab256424-971f-4efc-b462-cd676759e655.png",
  },
  {
    title: "Indeed",
    description: "Popular job search engine for all experience levels.",
    url: "https://www.indeed.com/",
    image: "/lovable-uploads/f6b8403e-46f5-4dc8-aa45-67da8ca97d10.png",
  },
  {
    title: "USAJOBS",
    description: "Federal government jobs and internships.",
    url: "https://www.usajobs.gov/",
    image: "/lovable-uploads/618ff5d7-b258-496d-809c-1183c8e3918f.png",
  },
  {
    title: "CareerOneStop",
    description: "Explore careers, education, training, and jobs.",
    url: "https://www.careeronestop.org/",
    image: "/lovable-uploads/e569157b-0a6e-459f-882e-779d010f636f.png",
  },
];

const Applications = () => {
  const { t } = useLanguage();
  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 event-blue font-fredoka">
            {t("Applications") || "Applications"}
          </h1>
          <p className="mb-10 text-lg text-gray-700">
            Browse our list of resources for college, internship, and job applications. Scroll to explore &rarr;
          </p>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-6 pb-2">
              {applicationResources.map((res) => (
                <a
                  key={res.title}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-w-[310px] max-w-xs transition shadow-xl rounded-2xl bg-white/80 hover:bg-white scale-100 hover:scale-105 ring-1 ring-etheri-blue/10 hover:ring-etheri-blue/70 cursor-pointer"
                  style={{ textDecoration: "none" }}
                  tabIndex={0}
                >
                  <div className="h-44 w-full flex items-center justify-center overflow-hidden rounded-t-2xl bg-gray-100">
                    {res.image ? (
                      <img
                        src={res.image}
                        alt={res.title}
                        className="object-contain h-full max-h-44 w-full transition duration-200 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center text-gray-400">No Image</div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-xl text-etheri-blue group-hover:text-etheri-lightBlue mb-2">
                      {res.title}
                    </div>
                    <div className="text-gray-700 text-base mb-2">{res.description}</div>
                    <div className="inline-flex items-center gap-1 text-sm text-etheri-yellow group-hover:text-yellow-600">
                      Visit Site <span aria-hidden>↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-10 text-center">
            <Link
              to="/resources"
              className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition"
            >
              &larr; Back to Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
