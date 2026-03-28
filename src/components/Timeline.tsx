import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const timelineEvents = [
  { date: "March 6", title: "Registration Opens", side: "left" },
  { date: "March 17", title: "Abstract Submission Deadline", side: "right" },
  { date: "March 10", title: "PPT Submission Deadline", side: "left" },
  { date: "March 11", title: "Preliminary Round", side: "right" },
  { date: "March 10", title: "Results Announcement", side: "left" },
  { date: "March 8", title: "Final Round", side: "right" },
];

const TimelineNode = ({
  evt,
  i,
  totalItems,
  progress,
}: {
  evt: any;
  i: number;
  totalItems: number;
  progress: MotionValue<number>;
}) => {
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

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="page-container" ref={containerRef}>
      <h2 className="section-title">Timeline</h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Static gray line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        {/* Animated glowing vertical line tracking the scroll spring */}
        <motion.div
          className="absolute left-1/2 top-0 w-0.5 bg-cyan-400 -translate-x-1/2 origin-top shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] z-0"
          style={{ height: pathHeight }}
        />

        {/* Traveling glowing orb attached to the spring path */}
        <motion.div
          className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_15px_4px_rgba(34,211,238,0.8)] z-20"
          style={{ top: pathHeight, translateY: "-50%", x: "-50%" }}
        />

        {/* Timeline Events taking the physics spring for evaluation */}
        {timelineEvents.map((evt, i) => (
          <TimelineNode
            key={i}
            evt={evt}
            i={i}
            totalItems={timelineEvents.length}
            progress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
