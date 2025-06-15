
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const externalResourcesData = [
  {
    key: "applications",
    label: "Applications",
    blank: "Applications",
    description: "Browse our list of resources for Applications",
    url: "https://www.commonapp.org/", // College & job applications
  },
  {
    key: "scholarships",
    label: "Scholarships",
    blank: "Scholarships",
    description: "Browse our list of resources for Scholarships",
    url: "https://www.scholarshipowl.com/", // Scholarships
  },
  {
    key: "academics",
    label: "Academics",
    blank: "Academics",
    description: "Browse our list of resources for Academics",
    url: "https://www.khanacademy.org/", // Study guides/tutoring
  },
  {
    key: "programs",
    label: "Programs",
    blank: "Programs",
    description: "Browse our list of resources for Programs",
    url: "https://www.collegeboard.org/", // Programs/mentorship
  },
];

const Resources = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Scroll carousel with mouse wheel
  React.useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      // Only trigger for horizontal scroll wheel
      if (e.deltaY !== 0) {
        node.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="rainbow-gradient">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center event-blue font-fredoka">
            Resources
          </h1>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent ref={carouselRef} className="cursor-grab">
              {externalResourcesData.map((block) => (
                <CarouselItem key={block.key} className="flex justify-center">
                  <a
                    href={block.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-card rounded-lg p-8 flex flex-col items-center gap-3 transition-transform hover:scale-105 hover:shadow-xl focus:scale-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary group min-w-[320px] md:min-w-[360px] max-w-sm w-full"
                  >
                    <span className="text-2xl font-semibold event-blue font-fredoka group-hover:underline">
                      {block.blank}
                    </span>
                    <span className="text-gray-700 text-center">
                      {block.description.replace("___", block.blank)}
                    </span>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-8 text-center text-gray-500 text-sm">
            Scroll horizontally with your mouse/touchpad to see more resources.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
