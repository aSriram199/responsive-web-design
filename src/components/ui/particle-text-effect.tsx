"use client";

import { useEffect, useRef } from "react";

class Particle {
  pos: { x: number; y: number };
  vel: { x: number; y: number } = { x: 0, y: 0 };
  acc: { x: number; y: number } = { x: 0, y: 0 };
  target: { x: number; y: number } = { x: 0, y: 0 };

  maxSpeed = 12;
  maxForce = 1.2;
  baseSize = 1.5;
  size = 0; // Start at 0 and grow
  isKilled = false;

  constructor(x: number, y: number) {
    this.pos = { x, y };
  }

  move() {
    const dx = this.target.x - this.pos.x;
    const dy = this.target.y - this.pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Arrive behavior highly optimized
    const speed = dist < 80 ? (dist / 80) * this.maxSpeed : this.maxSpeed;

    if (dist > 0.5) {
      const desiredX = (dx / dist) * speed;
      const desiredY = (dy / dist) * speed;

      this.acc.x += (desiredX - this.vel.x) * this.maxForce;
      this.acc.y += (desiredY - this.vel.y) * this.maxForce;
    }

    this.vel.x = (this.vel.x + this.acc.x) * 0.92;
    this.vel.y = (this.vel.y + this.acc.y) * 0.92;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Smoothly grow or shrink
    if (this.isKilled) {
      this.size *= 0.85;
    } else {
      this.size += (this.baseSize - this.size) * 0.15;
    }

    if (this.size < 0.1) return;

    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export function ParticleTextEffect({ words }: { words: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const wordIndexRef = useRef(0);
  const animationRef = useRef<number>();

  const generateTargets = (text: string, canvas: HTMLCanvasElement) => {
    const isMobile = window.innerWidth < 768;
    // Keep density manageable for the larger text sizes
    const pixelStep = isMobile ? 6 : 7; 

    const off = document.createElement("canvas");
    off.width = canvas.width;
    off.height = canvas.height;
    const ctx = off.getContext("2d", { willReadFrequently: true })!;

    // Markedly increased text size for max impact
    const fontSize = isMobile 
      ? Math.min(canvas.width / 3.5, 90) 
      : Math.min(canvas.width / 4.5, 220);

    ctx.fillStyle = "white";
    ctx.font = `800 ${fontSize}px "Inter", "Poppins", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 - (isMobile ? 20 : 40));

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const coords: { x: number; y: number }[] = [];

    // Map opaque pixels to target nodes
    for (let y = 0; y < canvas.height; y += pixelStep) {
      for (let x = 0; x < canvas.width; x += pixelStep) {
        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          coords.push({ x, y });
        }
      }
    }

    const particles = particlesRef.current;

    coords.forEach((coord, i) => {
      let p = particles[i];
      if (!p) {
        // Spawn from all 360 radial directions
        const angle = Math.random() * Math.PI * 2;
        const spawnRadius = Math.max(canvas.width, canvas.height) * 0.8;
        const startX = canvas.width / 2 + Math.cos(angle) * spawnRadius;
        const startY = canvas.height / 2 + Math.sin(angle) * spawnRadius;

        p = new Particle(startX, startY);
        particles.push(p);
      }
      p.target = coord;
      p.isKilled = false;
    });

    // Shrink unneeded particles perfectly in place
    for (let i = coords.length; i < particles.length; i++) {
      particles[i].isKilled = true;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!; // Removed { alpha: false } to fix visual glitching

    let resizeTimer: NodeJS.Timeout;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateTargets(words[wordIndexRef.current], canvas);
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initCanvas, 200);
    };

    window.addEventListener("resize", handleResize);
    initCanvas();

    const animate = () => {
      // Create motion trail effect. 10,22,40 perfectly matches #0A1628
      ctx.fillStyle = "rgba(10, 22, 40, 0.35)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const aliveParticles: Particle[] = [];
      particlesRef.current.forEach((p) => {
        p.move();
        p.draw(ctx);
        // Only keep particles that are alive or haven't fully shrunk yet
        if (!p.isKilled || p.size >= 0.1) {
          aliveParticles.push(p);
        }
      });
      
      // Update the main array so dead particles are garbage collected
      particlesRef.current = aliveParticles;

      frameRef.current++;

      // Shift target text optimally without stalling frame
      if (frameRef.current % 180 === 0) {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        generateTargets(words[wordIndexRef.current], canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [words]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block bg-[#0A1628]" />;
}