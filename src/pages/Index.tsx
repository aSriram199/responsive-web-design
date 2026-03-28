import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingCubesHero from "@/components/FloatingCubesHero";



const testimonials = [
  {
    text: "Being a part of Avishkar 2K25 at VBIT was a defining experience in my journey. The event stood as a strong representation of innovation, creativity, and collaboration, bringing together individuals driven to build, explore, and push boundaries.\n\nWhat truly set Avishkar apart was not just its scale, but the energy behind it—the seamless coordination, diversity of ideas, and the passion shared by every participant. It created an environment where learning happened naturally through competition, teamwork, and meaningful interactions.\n\nThe experience pushed me to think beyond conventional limits, adapt quickly, and contribute effectively in a fast-paced environment. It strengthened my technical understanding while also improving my communication, problem-solving, and ability to work under pressure.\n\nMore importantly, it gave me real-world exposure to how ideas are executed at scale, from planning to implementation. Being part of Avishkar 2K25 was not just about contributing to an event; it was about being part of a vision that celebrates innovation, collaboration, and continuous growth.",
    name: "G Ramgopal",
    role: "Web Designing",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Avishkar was the turning point of my first year at VBIT. The competition challenged me to think critically and present my ideas with confidence. The mentorship and support from seniors made it an unforgettable experience. I learned more in those two days than in an entire semester of lectures.",
    name: "Priya Sharma",
    role: "Content Writing",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Participating in Avishkar helped me discover my passion for research and technical writing. The structured format of abstract and PPT submission taught me discipline and professionalism. I highly recommend every fresher to take part in this incredible event.",
    name: "Arjun Reddy",
    role: "Technical Team",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    text: "The exposure I got from Avishkar was unmatched. It provided a platform where theory met practice. The feedback from the judges was immensely helpful in refining my future projects.",
    name: "Neha Singh",
    role: "Event Management",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    text: "A truly incredible platform to showcase talent. The collaborative environment and competitive spirit pushed me to deliver my absolute best. It was an experience I'll always cherish.",
    name: "Rahul Verma",
    role: "Design Team",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const useTestimonialCarousel = (count: number, interval = 5000) => {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);
  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval]);
  return { active, setActive };
};

const timelineEvents = [
  { date: "March 6", title: "Registration Opens", side: "left" },
  { date: "March 17", title: "Abstract Submission Deadline", side: "right" },
  { date: "March 10", title: "PPT Submission Deadline", side: "left" },
  { date: "March 11", title: "Preliminary Round", side: "right" },
  { date: "March 10", title: "Results Announcement", side: "left" },
  { date: "March 8", title: "Final Round", side: "right" },
];

const TimelineNode = ({ evt, i, totalItems, progress }: { evt: any, i: number, totalItems: number, progress: any }) => {
  const isLast = i === totalItems - 1;
  const threshold = i / (totalItems - 1 || 1);
  const start = threshold - 0.15;

  const scale = useTransform(progress, [start, threshold], [1, 1.05]);
  const nodeGlow = useTransform(
    progress,
    [start, threshold],
    [
      "0px 0px 0px rgba(34,211,238,0)",
      isLast ? "0px 0px 20px 4px rgba(34,211,238,0.8)" : "0px 0px 12px 2px rgba(34,211,238,0.6)"
    ]
  );

  const dotColor = useTransform(
    progress,
    [start, threshold],
    ["hsl(var(--muted-foreground))", "#22d3ee"]
  );

  return (
    <div className={`relative flex items-center mb-8 ${evt.side === "left" ? "justify-start" : "justify-end"}`}>
      <motion.div
        className="absolute left-1/2 w-3 h-3 rounded-full border-2 border-card z-10"
        style={{
          backgroundColor: dotColor,
          boxShadow: nodeGlow,
          scale,
          x: "-50%"
        }}
      />
      <motion.div
        className={`w-5/12 bg-muted rounded-lg px-4 py-3 ${evt.side === "right" ? "ml-auto" : ""}`}
        style={{ scale }}
      >
        <p className="text-xs text-muted-foreground">{evt.date}</p>
        <p className="text-sm font-semibold text-foreground">{evt.title}</p>
      </motion.div>
    </div>
  );
};

const Index = () => {
  const carousel = useTestimonialCarousel(testimonials.length);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        <FloatingCubesHero />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-16 sm:py-24 flex items-center">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.1]">
              Welcome to<br />AVISHKAR 2k26
            </h1>
            <p className="mt-6 text-[#A3A3A3] max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
              The premier technical paper presentation competition.<br className="hidden sm:block" />
              Shape the future of innovation and articulate your vision to the world.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 px-10 py-3.5 bg-[#094F74] hover:bg-[#073D5A] text-white rounded-md font-semibold text-lg transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <CountdownTimer />

      {/* About */}
      <section className="page-container">
        <h2 className="section-title">About Avishkar</h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center">
          Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award'. This year marks the 15th edition of the most vibrant event with a new approach to pave an ideal path for students to enhance their technical cognizance and continue mastery in advanced technologies.
        </p>
      </section>

      {/* Gallery Preview */}
      <section className="page-container">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg" />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="page-container" ref={containerRef}>
        <h2 className="section-title">Timeline</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Static gray line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Animated glowing vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 bg-cyan-400 -translate-x-1/2 origin-top shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] z-0"
            style={{ height: pathHeight }}
          />

          {/* Traveling glowing orb */}
          <motion.div
            className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_15px_4px_rgba(34,211,238,0.8)] z-20"
            style={{ top: pathHeight, translateY: "-50%", x: "-50%" }}
          />

          {/* Timeline Events */}
          {timelineEvents.map((evt, i) => (
            <TimelineNode
              key={i}
              evt={evt}
              i={i}
              totalItems={timelineEvents.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-container mb-24">
        <h2 className="section-title">Testimonials</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Speech bubble */}
          <div className="relative rounded-xl p-8 sm:p-12 mb-10 shadow-sm" style={{ backgroundColor: "#D8E2FF" }}>
            {/* Triangle */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "24px solid transparent",
                borderRight: "24px solid transparent",
                borderTop: "24px solid #D8E2FF",
              }}
            />
            <div className="relative min-h-[220px] sm:min-h-[160px] flex items-center justify-center">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ease-in-out ${i === carousel.active
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                >
                  <p className="text-black/80 font-medium text-sm sm:text-base leading-[1.8] text-center max-w-3xl mx-auto">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar dots + name */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const index = (carousel.active + offset + testimonials.length) % testimonials.length;
                const t = testimonials[index];
                const isActive = offset === 0;

                return (
                  <motion.button
                    layout
                    key={t.name}
                    onClick={() => carousel.setActive(index)}
                    className={`rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${isActive
                      ? "w-16 h-16 sm:w-20 sm:h-20 z-10 shadow-[0_0_0_0px_white,0_0_0_4px_#1B365D]"
                      : "w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 z-0 opacity-70 hover:opacity-100 shadow-[0_0_0_0px_white,0_0_0_2px_#D8E2FF]"
                      }`}
                  >
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </motion.button>
                );
              })}
            </div>
            <div className="text-center transition-all duration-300">
              <p className="font-bold text-lg text-black">{testimonials[carousel.active].name}</p>
              <p className="text-sm font-semibold text-black/70">{testimonials[carousel.active].role}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
