import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import { CursorArrow } from "@/components/ui/cursor-arrow";


/* -------------------- Page -------------------- */
const Index = () => {
  const registerRef = useRef<HTMLAnchorElement>(null);

  return (
    <Layout>
      {/* Vercel-Tier High-Performance Hero */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A1628] border-b border-white/5">
        
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

        {/* Particle Canvas Layer */}
        <div className="absolute inset-0 z-0">
          {/* Subtle aurora glow behind the particles for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-[#0A1628] to-indigo-900/20 blur-3xl opacity-60 pointer-events-none" />
          
          <ParticleTextEffect words={["WELCOME TO", "AVISHKAR", "2K26"]} />
          
          {/* Bottom mask gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1628] to-transparent pointer-events-none z-10" />
        </div>

        {/* Hero Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full h-[85vh] px-6 pointer-events-none">
          
        {/* Top Spacer */}
        <div className="mt-28 pointer-events-auto" />

          <h1 className="sr-only">Avishkar 2K26</h1>

          {/* Bottom CTAs */}
          <div className="mb-12 pointer-events-auto flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact"
                ref={registerRef}
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 hover:bg-gray-100 animate-fadeUp"
                style={{ animationDelay: '200ms', animationFillMode: 'both' }}
              >
                Register Now
              </Link>
              <button
                onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fadeUp"
                style={{ animationDelay: '300ms', animationFillMode: 'both' }}
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
      <Timeline />

      <Testimonials />
    </Layout>
  );
};

export default Index;
