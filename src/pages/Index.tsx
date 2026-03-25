import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const targetDate = new Date("2026-04-12T09:00:00");

const useCountdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-foreground flex items-center justify-center">
      <span className="text-2xl sm:text-3xl font-bold font-display">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="text-xs sm:text-sm mt-2 text-muted-foreground uppercase tracking-wider">{label}</span>
  </div>
);

const timelineEvents = [
  { date: "March 6", title: "Registration Opens", side: "left" },
  { date: "March 17", title: "Abstract Submission Deadline", side: "right" },
  { date: "March 10", title: "PPT Submission Deadline", side: "left" },
  { date: "March 11", title: "Preliminary Round", side: "right" },
  { date: "March 10", title: "Results Announcement", side: "left" },
  { date: "March 8", title: "Final Round", side: "right" },
];

const Index = () => {
  const countdown = useCountdown();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-hero/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-hero-foreground font-display leading-tight">
            Welcome to<br />AVISHKAR 2k26
          </h1>
          <p className="mt-4 text-hero-foreground/80 max-w-lg text-sm sm:text-base">
            The premier technical paper presentation competition. Shape the future of innovation and articulate your vision to the world.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Countdown */}
      <section className="page-container text-center">
        <h2 className="section-title">Event Commences in :</h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          <CountdownUnit value={countdown.days} label="Days" />
          <CountdownUnit value={countdown.hours} label="Hours" />
          <CountdownUnit value={countdown.minutes} label="Minutes" />
          <CountdownUnit value={countdown.seconds} label="Seconds" />
        </div>
      </section>

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
      <section className="page-container">
        <h2 className="section-title">Timeline</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          {timelineEvents.map((evt, i) => (
            <div key={i} className={`relative flex items-center mb-8 ${evt.side === "left" ? "justify-start" : "justify-end"}`}>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-timeline-dot border-2 border-card z-10" />
              <div className={`w-5/12 bg-muted rounded-lg px-4 py-3 ${evt.side === "right" ? "ml-auto" : ""}`}>
                <p className="text-xs text-muted-foreground">{evt.date}</p>
                <p className="text-sm font-semibold text-foreground">{evt.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-container">
        <h2 className="section-title">Testimonials</h2>
        <div className="max-w-2xl mx-auto bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm">
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            "Being a part of Avishkar 2K25 at VBIT was a defining experience in my journey. The event stood as a strong representation of innovation, creativity, and collaboration. What truly set Avishkar apart was not just its scale, but the energy behind it — the seamless coordination, diversity of ideas, and the passion shared by every participant."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted" />
            <div>
              <p className="text-sm font-semibold text-foreground">G Ramgopal</p>
              <p className="text-xs text-muted-foreground">Web Designing</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
