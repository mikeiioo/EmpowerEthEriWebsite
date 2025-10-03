import React from "react";

/** ---- Shape of an event ---- */
type EventItem = {
  id: number;
  title: string;
  date?: string;                  
  description: string;
  images: string[];               // 1–4 images; collage adapts automatically
};

/** ---- Replace these with your real assets under /public/images/events ---- */
const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Mentorship Kickoff 2025",
    date: "June 2025 · Five Forks Public Library",
    description:
      "Potential mentees met with mentors to learn more about the people behind the program and what the program is about",
    images: [
      "/images/Kickoff.jpg"
    ],
  },
  {
    id: 2,
    title: "Common Application Workshop",
    date: "July 2025 · Five Forks Public Library",
    description:
      "A Common Application workshop to prepare mentees for the upcoming college application season. Mentees learned all about what the Common App is and how to have a standout application.",
    images: [
      "/images/Common.jpg"
    ]
  },
  {
    id: 3,
    title: "Vision Board Making",
    date: "August 2025 · Five Forks Public Library",
    description:
      "An event dedicated to teaching mentees proper goal setting and a chance for everyone in the program to connect.",
    images: [
      "/images/Vision.jpg"
    ],
  },
];

/** ---- Small collage that adapts to 1–4 images ---- */
function EventCollage({ images, altBase }: { images: string[]; altBase: string }) {
  const srcs = images.slice(0, 4); // cap at 4; add more rows if you like
  const count = srcs.length;

  // Layout rules:
  // 1 image -> big square
  // 2 images -> 1x2 vertical stack
  // 3–4 images -> 2x2 grid
  if (count === 1) {
    return (
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
        <img src={srcs[0]} alt={altBase} className="h-full w-full object-cover" />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="grid h-full w-full grid-rows-2 gap-3 rounded-2xl">
        {srcs.map((s, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-gray-100">
            <img src={s} alt={`${altBase} ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3 rounded-2xl">
      {srcs.map((s, i) => (
        <div key={i} className="overflow-hidden rounded-2xl bg-gray-100">
          <img src={s} alt={`${altBase} ${i + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}

/** ---- Event row (alternates image/text per row) ---- */
function EventRow({ item, flip }: { item: EventItem; flip?: boolean }) {
  return (
    <section
      className={`grid items-center gap-10 py-10 md:py-16 lg:gap-16
                  lg:grid-cols-12 ${flip ? "lg:[&>.media]:order-2" : ""}`}
    >
      {/* Media */}
      <div className="media lg:col-span-5">
        <EventCollage images={item.images} altBase={item.title} />
      </div>

      {/* Text */}
      <div className="lg:col-span-7">
        <h2 className="text-2xl font-bold mb-6 event-blue">{item.title}</h2>
        {item.date && <p className="mt-2 text-base text-gray-500">{item.date}</p>}
        <p className="mt-4 text-gray-700 md:text-lg">{item.description}</p>
      </div>
    </section>
  );
}

/** ---- Page ---- */
const Events = () => {
  return (
    <div className="rainbow-gradient">
      <div className="flex flex-col">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 event-blue font-fredoka">
                Past Events
              </h1>
              <h2 className="text-lg md:text-xl event-blue font-medium font-fredoka">
                Make sure to stay up to date with our social media pages to find out about all our events!
             </h2>
            </div>
          </div>
        </section>

        {/* Event list */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8 md:space-y-12">
                {EVENTS.map((ev, idx) => (
                  <React.Fragment key={ev.id}>
                    <div className="rainbow-card rounded-lg p-8">
                      <EventRow item={ev} flip={idx % 2 === 1} />
                    </div>
                    {/* subtle divider between rows */}
                    {idx !== EVENTS.length - 1 && <hr className="border-gray-200/70" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
