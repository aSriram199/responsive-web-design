import { useRef } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import { CursorArrow } from "@/components/ui/cursor-arrow";
import heroBg from "@/assets/hero-bg_101.jpeg";


/* -------------------- Page -------------------- */
const Index = () => {
  const registerRef = useRef<HTMLAnchorElement>(null);

  return (
    <Layout>
      {/* Vercel-Tier High-Performance Hero */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">

        {/* Hero Background - Pure CSS Recreation of Uploaded Image */}
        <div className="absolute inset-0 z-0 bg-[#111115] overflow-hidden">
          {/* Top Left Blue/Purple Glow */}
          <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-indigo-900/30 rounded-full blur-[100px] sm:blur-[140px]" />
          <div className="absolute top-[5%] left-[10%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] bg-fuchsia-900/20 rounded-full blur-[90px] sm:blur-[120px]" />
          
          {/* Bottom Left Purple Glow */}
          <div className="absolute -bottom-[10%] -left-[5%] w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] bg-purple-900/20 rounded-full blur-[100px] sm:blur-[150px]" />
          
          {/* Bottom Right Magenta Glow */}
          <div className="absolute -bottom-[15%] -right-[10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-fuchsia-900/20 rounded-full blur-[120px] sm:blur-[160px]" />
          
          {/* Subtle overlay gradient to blend with the rest of the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/30 to-[#0A1628]/90 pointer-events-none" />
        </div>

        {/* Subtle Tech Corners (Premium Touch) */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-sky-400/30 opacity-60 z-10 pointer-events-none" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-sky-400/30 opacity-60 z-10 pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-sky-400/30 opacity-60 z-10 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-sky-400/30 opacity-60 z-10 pointer-events-none" />

        {/* Small UI Crosshairs scattered */}
        <div className="absolute top-[20%] left-[10%] w-4 h-4 opacity-30 z-10 pointer-events-none flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white/40" />
          <div className="absolute h-full w-[1px] bg-white/40" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] w-4 h-4 opacity-30 z-10 pointer-events-none flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white/40" />
          <div className="absolute h-full w-[1px] bg-white/40" />
        </div>

        {/* Hero Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] px-4 sm:px-6 py-20 pointer-events-none">

          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 pointer-events-auto">
            
            {/* Heading */}
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl animate-fadeUp leading-tight flex flex-col sm:block" 
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              AVISHKAR
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600 sm:ml-4">
                2K26
              </span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-base sm:text-lg md:text-2xl text-blue-100/90 max-w-3xl font-medium tracking-wide drop-shadow-lg px-2 animate-fadeUp leading-relaxed"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              The Flagship Technical Paper Presentation Competition
            </p>

            {/* Bottom CTAs */}
            <div 
              className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 animate-fadeUp"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              <Link
                to="/contact"
                ref={registerRef}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0A1628] font-bold tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 text-center flex items-center justify-center"
              >
                Register Now
              </Link>
              <button
                onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center flex items-center justify-center"
              >
                Explore Events
              </button>
            </div>
            
          </div>
        </div>

        <CursorArrow targetRef={registerRef} />
      </section>

      {/* Countdown */}
      <CountdownTimer />

      {/* About */}
      <section className="page-container px-4 sm:px-6 w-full">
        <h2 className="section-title text-center text-[28px] sm:text-4xl md:text-5xl leading-tight">About Avishkar</h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center mt-2 sm:mt-6 px-2 flex flex-col items-center">
          Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award'. This year marks the 15th edition of the most vibrant event with a new approach to pave an ideal path for students to enhance their technical cognizance and continue mastery in advanced technologies.
        </p>
      </section>

      {/* Gallery Preview */}
      <section className="page-container">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", alt: "Large stage event presentation" },
            { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Students participating in a hackathon" },
            { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", alt: "Technical robotics project demonstration" },
            { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", alt: "Engaged audience during a fest" },
            { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", alt: "College campus fest atmosphere and lighting" },
            { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Team collaborating on laptops" }
          ].map((image, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      <Testimonials />
    </Layout>
  );
};

export default Index;
