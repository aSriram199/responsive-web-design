import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- Data -------------------- */
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
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval, active, isHovered]); // Reset on active change or hover

  return { active, setActive, setIsHovered };
};

const Testimonials = () => {
  const carousel = useTestimonialCarousel(testimonials.length);

  return (
    <section className="page-container mb-24">
      <h2 className="section-title">Testimonials</h2>

      <div 
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => carousel.setIsHovered(true)}
        onMouseLeave={() => carousel.setIsHovered(false)}
      >
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
          <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={carousel.active}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)", scale: 0.98 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -15, filter: "blur(8px)", scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <p className="text-black/80 font-medium text-sm sm:text-base leading-[1.8] text-center max-w-3xl mx-auto whitespace-pre-wrap">
                  {testimonials[carousel.active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatar dots + name */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex items-center justify-center gap-3 sm:gap-5 h-24">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (carousel.active + offset + testimonials.length) % testimonials.length;
              const t = testimonials[index];
              const isActive = offset === 0;

              return (
                <motion.button
                  layout
                  key={t.name}
                  onClick={() => carousel.setActive(index)}
                  className={`rounded-full overflow-hidden flex flex-shrink-0 items-center justify-center relative ${isActive
                    ? "w-16 h-16 sm:w-20 sm:h-20 z-10 shadow-[0_0_0_0px_white,0_0_0_4px_#1B365D]"
                    : "w-10 h-10 sm:w-12 sm:h-12 z-0 opacity-70 hover:opacity-100 shadow-[0_0_0_0px_white,0_0_0_2px_#D8E2FF]"
                    }`}
                  transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                  whileHover={{ scale: isActive ? 1 : 1.15 }}
                >
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover pointer-events-none" />
                </motion.button>
              );
            })}
          </div>
          <div className="text-center h-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={carousel.active}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="font-bold text-lg text-black">{testimonials[carousel.active].name}</p>
                <p className="text-sm font-semibold text-black/70">{testimonials[carousel.active].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
