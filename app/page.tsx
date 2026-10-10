"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  GraduationCap,
  Calendar,
  Clock,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Map,
  Quote,
  Play,
  Pause,
  Volume2,
  Users,
  ExternalLink,
  Camera,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { EVENT_CONFIG } from "./config";

// Golden and emerald dust particles (optimizado con reducción en móviles)
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 4.1) % 96 + 2}%`,
  size: `${(i % 3) * 1.5 + 3}px`,
  duration: `${14 + (i % 6) * 2.5}s`,
  delay: `${(i * 0.7) % 9}s`,
  opacity: 0.35 + (i % 4) * 0.15,
  isEmerald: i % 3 === 0,
  isMobileHidden: i >= 10,
}));

function FloatingParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={`${p.isEmerald ? "particula-esmeralda" : "particula-dorada"} ${
            p.isMobileHidden ? "hidden sm:block" : ""
          }`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

// Botánical Gala Corner Flourish (Gold & Emerald Watercolor Style)
function GalaCorner({
  position,
  className = "",
  delay = 0.2,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  delay?: number;
}) {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "scaleX(-1)";
      case "bottom-left":
        return "scaleY(-1)";
      case "bottom-right":
        return "scale(-1, -1)";
      case "top-left":
      default:
        return "none";
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case "top-left":
        return "-top-2 -left-2 sm:-top-3 sm:-left-3";
      case "top-right":
        return "-top-2 -right-2 sm:-top-3 sm:-right-3";
      case "bottom-left":
        return "-bottom-2 -left-2 sm:-bottom-3 sm:-left-3";
      case "bottom-right":
        return "-bottom-2 -right-2 sm:-bottom-3 sm:-right-3";
    }
  };

  return (
    <motion.div
      initial={{
        scale: 0.3,
        opacity: 0,
        rotate: position.includes("right") ? 10 : -10,
      }}
      whileInView={{ scale: 1, opacity: 0.9, rotate: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={`absolute pointer-events-none z-20 select-none ${getPositionClass()} ${className}`}
      style={{ transform: getTransform() }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
      >
        <defs>
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf6d8" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa7c11" />
            <stop offset="100%" stopColor="#c5a059" />
          </linearGradient>
          <linearGradient
            id="emeraldLeafGrad"
            x1="0%" y1="0%"
            x2="100%" y2="100%"
          >
            <stop offset="0%" stopColor="#1e5841" />
            <stop offset="60%" stopColor="#0b3b2c" />
            <stop offset="100%" stopColor="#062319" />
          </linearGradient>
        </defs>

        {/* Emerald Branch Leaves */}
        <g fill="url(#emeraldLeafGrad)" opacity="0.85">
          <path d="M 32 32 C 20 12 40 2 50 16 C 56 25 46 32 32 32 Z" />
          <path d="M 32 32 C 12 20 2 40 16 50 C 25 56 32 46 32 32 Z" />
          <path d="M 38 40 C 54 28 70 38 64 52 C 58 60 46 50 38 40 Z" />
          <path d="M 40 38 C 28 54 38 70 52 64 C 60 58 50 46 40 38 Z" />
          <path d="M 28 72 C 10 76 15 96 32 86 C 38 82 34 74 28 72 Z" />
          <path d="M 72 28 C 76 10 96 15 86 32 C 82 38 74 34 72 28 Z" />
        </g>

        {/* Gold Flourish Laurels & Vines */}
        <g stroke="url(#goldLeafGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M 32 32 C 55 55 80 75 130 95 C 105 85 75 65 50 45" />
          <path d="M 32 32 C 55 55 75 80 95 130 C 85 105 65 75 45 50" />
          <path d="M 12 110 C 20 95 30 75 35 48" />
          <path d="M 110 12 C 95 20 75 30 48 35" />
        </g>

        {/* Gold Berries / Pearls */}
        <g fill="url(#goldLeafGrad)">
          <circle cx="24" cy="58" r="3" />
          <circle cx="18" cy="76" r="2.5" />
          <circle cx="58" cy="24" r="3" />
          <circle cx="76" cy="18" r="2.5" />
          <circle cx="85" cy="75" r="3" />
          <circle cx="75" cy="85" r="3" />
          <circle cx="34" cy="34" r="4" />
        </g>
      </svg>
    </motion.div>
  );
}

// Laurel Monogram Wreath Centerpiece
function LaurelWreath({ monogram }: { monogram: string }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
      >
        <defs>
          <linearGradient id="wreathGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf6d8" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa7c11" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          <linearGradient
            id="wreathEmerald"
            x1="0%" y1="0%"
            x2="100%" y2="100%"
          >
            <stop offset="0%" stopColor="#0b3b2c" />
            <stop offset="100%" stopColor="#143d2b" />
          </linearGradient>
        </defs>

        {/* Circular Ring */}
        <circle
          cx="90"
          cy="90"
          r="68"
          stroke="url(#wreathGold)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <circle
          cx="90"
          cy="90"
          r="64"
          fill="#fdfbf7"
          stroke="url(#wreathGold)"
          strokeWidth="1.8"
        />

        {/* Left Laurel Branch */}
        <path
          d="M 90 160 C 45 155 25 125 25 90 C 25 55 45 25 90 20"
          stroke="url(#wreathGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Left Leaves */}
        <path
          d="M 35 130 C 22 130 20 118 30 115 C 38 112 40 122 35 130 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 26 95 C 14 92 15 80 26 80 C 34 80 34 90 26 95 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 35 55 C 24 50 28 38 38 40 C 44 42 42 52 35 55 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 58 30 C 50 22 58 12 68 18 C 72 22 68 30 58 30 Z"
          fill="url(#wreathGold)"
        />

        {/* Right Laurel Branch */}
        <path
          d="M 90 160 C 135 155 155 125 155 90 C 155 55 135 25 90 20"
          stroke="url(#wreathGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Right Leaves */}
        <path
          d="M 145 130 C 158 130 160 118 150 115 C 142 112 140 122 145 130 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 154 95 C 166 92 165 80 154 80 C 146 80 146 90 154 95 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 145 55 C 156 50 152 38 142 40 C 136 42 138 52 145 55 Z"
          fill="url(#wreathGold)"
        />
        <path
          d="M 122 30 C 130 22 122 12 112 18 C 108 22 112 30 122 30 Z"
          fill="url(#wreathGold)"
        />

        {/* Bottom Ribbon Knot */}
        <circle cx="90" cy="160" r="4" fill="url(#wreathGold)" />
        <path
          d="M 86 162 C 78 170 72 174 70 176 M 94 162 C 102 170 108 174 110 176"
          stroke="url(#wreathGold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-script texto-dorado text-3xl sm:text-4xl font-semibold tracking-wider select-none">
        {monogram}
      </span>
    </div>
  );
}

// ========================================================
// SELLO DE CERA 3D CON CINTA DE SEDA VIRTUAL (Wax Seal & Silk Ribbon)
// ========================================================
function GratitudeWaxSealRibbon() {
  return (
    <div className="relative -top-7 sm:-top-9 flex flex-col items-center justify-center z-30 pointer-events-none mb-[-22px]">
      {/* 1. Cinta de Seda Virtual (Emerald & Gold Silk Ribbon) */}
      <div className="relative flex justify-center items-start gap-1.5">
        {/* Left Ribbon Tail */}
        <div
          className="w-4 sm:w-5 h-12 sm:h-14 cinta-seda-esmeralda shadow-md border-x border-[#d4af37]/60 -rotate-12 origin-top"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
          }}
        />
        {/* Right Ribbon Tail */}
        <div
          className="w-4 sm:w-5 h-14 sm:h-16 cinta-seda-esmeralda shadow-md border-x border-[#d4af37]/60 rotate-12 origin-top"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
          }}
        />
      </div>

      {/* 2. Sello de Cera 3D en Relieve (Emerald & Gold Wax Seal) */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 2 }}
        className="absolute top-2 flex items-center justify-center pointer-events-auto cursor-pointer"
      >
        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#07261c] via-[#0b3b2c] to-[#1e5841] p-1 shadow-[0_8px_20px_rgba(11,59,44,0.4),0_2px_6px_rgba(0,0,0,0.25)] border-2 border-[#d4af37]">
          {/* Inner Pressed Wax Stamp */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0b3b2c] to-[#051c14] border border-[#d4af37]/70 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
            <span className="font-script texto-dorado text-xl sm:text-2xl font-bold select-none leading-none drop-shadow">
              MPP
            </span>
            <span className="text-[7px] text-[#edd59e] font-serif tracking-[1px] uppercase mt-0.5 font-semibold">
              2026
            </span>
          </div>

          {/* Golden Glint highlight */}
          <div className="absolute top-1.5 right-2 w-3 h-1.5 rounded-full bg-white/35 blur-[1px] rotate-45 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}

// ========================================================
// CAJA DE RELOJ DE SOLAPA 3D / CALENDAR SPLIT-FLAP (PAGE TURN)
// ========================================================
function FlipClockBox({
  value,
  label,
  delayIndex = 0,
  isReady = true,
}: {
  value: number;
  label: string;
  delayIndex?: number;
  isReady?: boolean;
}) {
  const formattedValue = String(value).padStart(2, "0");
  const [current, setCurrent] = useState("00");
  const [previous, setPrevious] = useState("00");
  const [isFlipping, setIsFlipping] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);

  // Initial Reel-in Calendar Search animation triggers ONLY when envelope is opened (isReady === true)
  useEffect(() => {
    if (!isReady || isCalibrated) return;

    let count = 0;
    const totalFlips = 5 + delayIndex * 2; // Staggered stop: Días -> Horas -> Minutos -> Segundos

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        count++;
        if (count < totalFlips) {
          const rand = String((value + (totalFlips - count) * 7) % 60).padStart(2, "0");
          setPrevious((prev) => current);
          setCurrent(rand);
          setIsFlipping(true);
          setTimeout(() => setIsFlipping(false), 95);
        } else {
          clearInterval(interval);
          setPrevious((prev) => current);
          setCurrent(formattedValue);
          setIsFlipping(true);
          setTimeout(() => {
            setIsFlipping(false);
            setIsCalibrated(true);
          }, 320);
        }
      }, 125);

      return () => clearInterval(interval);
    }, 450 + delayIndex * 140); // Synchronized with envelope modal fade-out

    return () => clearTimeout(startTimeout);
  }, [isReady, isCalibrated, value, formattedValue, delayIndex]);

  // Regular live second-by-second updates once calibrated
  useEffect(() => {
    if (!isCalibrated) return;
    if (formattedValue !== current) {
      setPrevious(current);
      setCurrent(formattedValue);
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setIsFlipping(false);
      }, 480);
      return () => clearTimeout(timer);
    }
  }, [formattedValue, current, isCalibrated]);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative flex flex-col items-center justify-center rounded-2xl bg-white/95 p-2 sm:p-3.5 shadow-sm"
    >
      {/* 3D Split-Flap Stage */}
      <div
        className="relative w-full h-[48px] sm:h-[62px] flex flex-col items-center justify-center select-none"
        style={{ perspective: "600px" }}
      >
        {/* 1. Mitad Superior Estática (Nuevo Número de Fondo) */}
        <div className="w-full h-[24px] sm:h-[31px] overflow-hidden rounded-t-xl bg-transparent relative flex justify-center">
          <span
            suppressHydrationWarning
            className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono tracking-tight select-none absolute top-0 leading-[48px] sm:leading-[62px]"
          >
            {current}
          </span>
        </div>

        {/* 2. Mitad Inferior Estática (Número Anterior esperando ser cubierto) */}
        <div className="w-full h-[24px] sm:h-[31px] overflow-hidden rounded-b-xl bg-transparent relative flex justify-center">
          <span
            suppressHydrationWarning
            className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono tracking-tight select-none absolute -top-[24px] sm:-top-[31px] leading-[48px] sm:leading-[62px]"
          >
            {isFlipping ? previous : current}
          </span>
        </div>

        {/* 3. Hoja Superior Plegable (Cae desde el medio hacia abajo) */}
        <AnimatePresence>
          {isFlipping && (
            <motion.div
              key={`top-flap-${previous}`}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -90 }}
              exit={{ rotateX: -90 }}
              transition={{ duration: 0.24, ease: "easeIn" }}
              style={{
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
              className="absolute top-0 inset-x-0 h-[24px] sm:h-[31px] overflow-hidden rounded-t-xl bg-white/95 flex justify-center shadow-xs z-20"
            >
              <span
                suppressHydrationWarning
                className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono tracking-tight select-none absolute top-0 leading-[48px] sm:leading-[62px]"
              >
                {previous}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. Hoja Inferior Desplegable (Cae sobre la mitad inferior desde el medio) */}
        <AnimatePresence>
          {isFlipping && (
            <motion.div
              key={`bottom-flap-${current}`}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: 0 }}
              transition={{
                duration: 0.26,
                delay: 0.23,
                ease: [0.175, 0.885, 0.32, 1.25],
              }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="absolute bottom-0 inset-x-0 h-[24px] sm:h-[31px] overflow-hidden rounded-b-xl bg-white/95 flex justify-center shadow-xs z-20"
            >
              <span
                suppressHydrationWarning
                className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono tracking-tight select-none absolute -top-[24px] sm:-top-[31px] leading-[48px] sm:leading-[62px]"
              >
                {current}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Etiqueta del contador */}
      <span className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-[#0b3b2c] font-bold z-10 select-none">
        {label}
      </span>
    </motion.div>
  );
}

// ========================================================
// 3D PARALLAX TILT CARD CON REFLEJO FOIL DORADO INTERACTIVO (Desktop Hover)
// ========================================================
function TiltCard({
  children,
  className = "",
  maxTilt = 6.5,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    shineX: 50,
    shineY: 50,
  });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt for desktop (activado únicamente con puntero/ratón para no interferir con scroll móvil)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, shineX, shineY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      className={`relative ${className}`}
    >
      {/* Reflejo de brillo especular sutil al pasar el mouse en desktop */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 255, 255, 0.22) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 65%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {children}
    </motion.div>
  );
}

// Sound effect for envelope opening (Crisp luxury harp chime)
function playEnvelopeChime() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 harp chime
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(
        0.07,
        ctx.currentTime + idx * 0.08 + 0.04
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + idx * 0.08 + 0.85
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.95);
    });
  } catch {
    // AudioContext not available or blocked
  }
}

// ========================================================
// SOBRE DE GALA 3D ULTRA-REALISTA (Realistic Folded Paper & Wax Seal)
// ========================================================
function GalaEnvelope3D({
  stage,
  onOpen,
}: {
  stage: "closed" | "breaking-seal" | "opening-flap" | "sliding-card" | "done";
  onOpen: () => void;
}) {
  const isOpening = stage !== "closed";
  const isFlapOpen =
    stage === "opening-flap" ||
    stage === "sliding-card" ||
    stage === "done";
  const isCardOut = stage === "sliding-card" || stage === "done";

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-sm sm:max-w-md px-3">
      {/* 3D Envelope Container with Realistic Paper Shadow */}
      <div
        onClick={onOpen}
        className="relative w-[310px] sm:w-[370px] h-[205px] sm:h-[235px] cursor-pointer group"
        style={{ perspective: "1200px" }}
      >
        {/* Soft Ambient Shadow under the envelope */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-[#0b3b2c]/20 blur-xl rounded-full pointer-events-none" />

        {/* ==============================================
            1. ENVELOPE BASE (Fondo del Sobre & Forro Dorado)
        ============================================== */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#edd59e] via-[#d4af37] to-[#aa7c11] p-[2px] shadow-[0_15px_35px_-10px_rgba(11,59,44,0.3)]">
          <div className="w-full h-full rounded-2xl bg-[#faf6ee] relative overflow-hidden flex items-center justify-center">
            {/* Fine Gold Pattern in Interior Liner */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:12px_12px]" />
            <span className="text-[#d4af37]/20 font-serif text-7xl font-bold select-none">
              ✦
            </span>
          </div>
        </div>

        {/* ==============================================
            2. INNER CARD (Invitación que emerge DESDE ADENTRO del sobre)
        ============================================== */}
        <motion.div
          initial={false}
          animate={
            isCardOut
              ? { y: -125, scale: 1.02, opacity: 1 }
              : isFlapOpen
                ? { y: -40, opacity: 1 }
                : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-3.5 top-3 h-[180px] sm:h-[210px] rounded-xl bg-white p-4 shadow-xl border-2 border-[#d4af37]/70 text-center flex flex-col items-center justify-between z-10 pointer-events-none"
          style={{ transformOrigin: "bottom center" }}
        >
          {/* Top miniature crest */}
          <div className="flex items-center justify-center gap-1.5 text-[#d4af37]">
            <span className="text-xs">✦</span>
            <span className="fuente-serif text-[10px] tracking-[2px] uppercase font-bold text-[#0b3b2c]">
              Invitación de Honor
            </span>
            <span className="text-xs">✦</span>
          </div>

          <div className="my-auto">
            <span className="titulo-script texto-dorado text-3xl sm:text-4xl block leading-tight">
              {EVENT_CONFIG.graduate.name}
            </span>
            <p className="fuente-serif text-[9px] sm:text-[10px] text-[#0b3b2c] tracking-widest uppercase mt-1 font-semibold">
              {EVENT_CONFIG.graduate.degree}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf5ea] border border-[#d4af37]/40 text-[10px] font-semibold text-[#aa7c11]">
            <Calendar className="h-3 w-3 text-[#d4af37]" />
            <span>
              {EVENT_CONFIG.event.shortDate} • {EVENT_CONFIG.event.timeDisplay}
            </span>
          </div>
        </motion.div>

        {/* ==============================================
            3. POCKET FLAPS (Alas laterales y bolsillo inferior) - z-20 para que la tarjeta salga por detrás
        ============================================== */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
          {/* Left Wing Paper Fold */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#f7f2e4] to-[#fbf8f0]"
            style={{
              clipPath: "polygon(0 0, 0 100%, 53% 52%)",
              filter: "drop-shadow(2px 0 3px rgba(11,59,44,0.08))",
            }}
          />
          {/* Right Wing Paper Fold */}
          <div
            className="absolute inset-0 bg-gradient-to-l from-[#f5ede0] to-[#faf6ed]"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 47% 52%)",
              filter: "drop-shadow(-2px 0 3px rgba(11,59,44,0.08))",
            }}
          />
          {/* Bottom Pocket Fold with Gold Trim Line */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#f1e6d0] via-[#faf6ee] to-[#fdfbf7]"
            style={{
              clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
              filter: "drop-shadow(0 -4px 8px rgba(11,59,44,0.12))",
            }}
          />
          {/* Subtle gold line along bottom fold */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 370 235"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 235 L 185 118 L 370 235"
              stroke="#d4af37"
              strokeWidth="0.75"
              strokeOpacity="0.4"
              fill="none"
            />
          </svg>
        </div>

        {/* ==============================================
            4. TOP FLAP (Solapa Triangular 3D Superior)
        ============================================== */}
        <motion.div
          initial={false}
          animate={
            isFlapOpen
              ? { rotateX: 180, zIndex: 5 }
              : { rotateX: 0, zIndex: 30 }
          }
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-x-0 top-0 h-[115px] sm:h-[130px] origin-top pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of Flap (Ivory Paper with Gold Trim) */}
          <div
            className="w-full h-full bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#ede2c8] relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              filter: "drop-shadow(0 5px 12px rgba(11,59,44,0.18))",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Fine gold border on triangular edge */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 370 130"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 0 L 185 130 L 370 0"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                fill="none"
              />
            </svg>
          </div>

          {/* Back of Flap (Gold Foil Lining visible when flipped 180deg) */}
          <div
            className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#edd59e] via-[#d4af37] to-[#aa7c11]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </motion.div>

        {/* ==============================================
            5. SELLO DE CERA 3D EN RELIEVE (Wax Stamp Realista)
        ============================================== */}
        <AnimatePresence initial={false}>
          {!isFlapOpen && (
            <motion.div
              initial={false}
              animate={{
                scale:
                  stage === "breaking-seal"
                    ? [1, 1.4, 0]
                    : [0.98, 1.04, 0.98],
                opacity: stage === "breaking-seal" ? [1, 1, 0] : 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                scale:
                  stage === "breaking-seal"
                    ? { duration: 0.35 }
                    : { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.3 },
              }}
              className="absolute left-1/2 top-[108px] sm:top-[122px] -translate-x-1/2 -translate-y-1/2 z-40"
            >
              {/* Ultra-realistic molten wax seal */}
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#9c771d] via-[#d4af37] to-[#fef08a] p-1 shadow-[0_8px_20px_rgba(11,59,44,0.35)] border border-[#fff2b2]">
                {/* Emerald Core Stamp */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#143d2b] to-[#07261c] border-2 border-[#d4af37] flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                  <span className="font-script texto-dorado text-xl sm:text-2xl font-bold select-none leading-none drop-shadow">
                    MPP
                  </span>
                  <span className="text-[7px] text-[#edd59e] font-serif tracking-[1px] uppercase mt-0.5">
                    2026
                  </span>
                </div>
              </div>

              {/* Pulsing Aura */}
              <span className="absolute -inset-1.5 rounded-full bg-[#d4af37]/35 blur-sm animate-ping pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ==============================================
          6. TEXTO ELEGANTE SIN BORDE / SIN BOTÓN (Typographic Call-To-Action)
      ============================================== */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        onClick={onOpen}
        className="mt-8 text-center cursor-pointer group"
      >
        <motion.div
          animate={{
            opacity: [0.8, 1, 0.8],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 text-[#0b3b2c] group-hover:text-[#aa7c11] transition-colors"
        >
          <span className="text-[#d4af37] text-xs">✦</span>
          <p className="fuente-serif text-xs sm:text-sm font-bold tracking-[3px] uppercase">
            {isOpening ? "Abriendo Invitación..." : "Toca el sello para abrir"}
          </p>
          <span className="text-[#d4af37] text-xs">✦</span>
        </motion.div>

        <p className="titulo-script texto-dorado text-3xl sm:text-4xl mt-1 select-none leading-tight">
          Invitación de Gala
        </p>
        <p className="fuente-serif text-[10px] text-[#143d2b]/60 uppercase tracking-[2px] mt-0.5 font-medium">
          {EVENT_CONFIG.graduate.name}
        </p>
      </motion.div>
    </div>
  );
}

// ========================================================
// 7. GALERÍA / CARRUSEL DE RECUERDOS (Polaroids Interactivos)
// ========================================================
function PolaroidGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const memories = EVENT_CONFIG.memories;

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! > 0 ? prev! - 1 : memories.length - 1
    );
  }, [selectedPhotoIndex, memories.length]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! < memories.length - 1 ? prev! + 1 : 0
    );
  }, [selectedPhotoIndex, memories.length]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  useEffect(() => {
    if (selectedPhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handlePrev, handleNext]);

  return (
    <>
      <TiltCard className="tarjeta-lujo rounded-3xl p-6 sm:p-10 text-center relative">
        <GalaCorner position="top-left" delay={0.2} />
        <GalaCorner position="bottom-right" delay={0.3} />

        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#faf5ea] px-3.5 py-1 border border-[#d4af37]/40 mb-2">
            <Camera className="h-3.5 w-3.5 text-[#aa7c11]" />
            <span className="fuente-serif text-[11px] uppercase tracking-[2.5px] text-[#aa7c11] font-bold">
              Recuerdos Universitarios
            </span>
          </div>
          <h3 className="titulo-script texto-dorado text-4xl sm:text-5xl my-1">
            Mi Camino a la Meta
          </h3>
          <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3" />
          <p className="text-xs sm:text-sm font-serif italic text-[#143d2b]/80 max-w-md mx-auto">
            Toca cualquier fotografía para revivir el recuerdo en tamaño completo.
          </p>
        </div>

        {/* Grid of Polaroid Photos with Natural Tilts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 pt-2 px-1 sm:px-2">
          {memories.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              initial={{ opacity: 0, y: 25, rotate: item.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ scale: 1.04, rotate: 0, y: -6, zIndex: 30 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative bg-[#faf7f2] p-3 pb-5 sm:p-3.5 sm:pb-6 rounded-md shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-[#e5dccd] cursor-pointer group flex flex-col items-center select-none"
            >
              {/* Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-r from-[#edd58e]/85 via-[#fef6dc]/95 to-[#edd58e]/85 border border-[#d4af37]/60 shadow-xs rotate-[-2deg] z-10 rounded-[1px] opacity-90 pointer-events-none" />

              {/* Photo Viewport without dark tint */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#f4ebd0]/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Zoom Badge */}
                <div className="absolute top-2 right-2 rounded-full bg-[#0b3b2c]/80 backdrop-blur-xs p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="h-3.5 w-3.5 text-[#edd58e]" />
                </div>
              </div>

              {/* Handwritten Style Caption */}
              <div className="mt-3 text-center px-1">
                <h4 className="fuente-serif text-xs sm:text-sm font-bold text-[#0b3b2c] tracking-wide group-hover:text-[#aa7c11] transition-colors">
                  {item.title}
                </h4>
                <p className="font-serif italic text-[11px] text-[#143d2b]/70 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </TiltCard>

      {/* Lightbox Modal rendered outside TiltCard to take true full screen */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 h-11 w-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-transform cursor-pointer shadow-lg"
              title="Cerrar (Esc)"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-transform cursor-pointer shadow-lg"
              title="Anterior"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-transform cursor-pointer shadow-lg"
              title="Siguiente"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Modal Polaroid Card */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative max-w-md sm:max-w-lg w-full bg-[#fdfbf7] p-3.5 sm:p-5 pb-5 sm:pb-7 rounded-sm shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-[#e5dccd]"
            >
              {/* Tape Accent */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gradient-to-r from-[#edd58e]/90 via-[#fef6dc] to-[#edd58e]/90 border border-[#d4af37]/70 shadow-sm rotate-[-1deg] rounded-[1px]" />

              {/* Full Image with clean borderless framing */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full max-h-[62vh] overflow-hidden rounded-xs bg-[#f4ebd0]/20">
                <Image
                  src={memories[selectedPhotoIndex].image}
                  alt={memories[selectedPhotoIndex].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 550px"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Caption & Indicator */}
              <div className="mt-3 sm:mt-4 text-center px-2">
                <div className="flex items-center justify-center gap-1.5 text-[#aa7c11] text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
                  <Camera className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>
                    Recuerdo {selectedPhotoIndex + 1} de {memories.length}
                  </span>
                </div>
                <h3 className="fuente-serif text-base sm:text-lg font-bold text-[#0b3b2c] mt-1">
                  {memories[selectedPhotoIndex].title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#143d2b]/85 mt-1 leading-relaxed">
                  {memories[selectedPhotoIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GraduationInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [envelopeStage, setEnvelopeStage] = useState<
    "closed" | "breaking-seal" | "opening-flap" | "sliding-card" | "done"
  >("closed");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  const eventTime = new Date(EVENT_CONFIG.event.isoDate).getTime();

  // Play and Pause handlers
  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    }
  }, []);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        playMusic();
      } else {
        pauseMusic();
      }
    }
  };

  // Launch Golden and Emerald Gala Confetti
  const launchGalaConfetti = useCallback(() => {
    const galaColors = [
      "#d4af37",
      "#edd59e",
      "#aa7c11",
      "#0b3b2c",
      "#143d2b",
      "#ffffff",
      "#eaf4ef",
    ];

    confetti({
      particleCount: 95,
      spread: 85,
      origin: { y: 0.6 },
      colors: galaColors,
    });
  }, []);

  // 3D Envelope Unfolding Sequence
  const handleOpenEnvelope = () => {
    if (envelopeStage !== "closed") return;

    // 1. Play paper/chime & background music, trigger seal burst
    setEnvelopeStage("breaking-seal");
    playEnvelopeChime();
    playMusic();

    // 2. Open 3D Top Flap (rotateX 180deg)
    setTimeout(() => {
      setEnvelopeStage("opening-flap");
    }, 350);

    // 3. Slide Inner Invitation Card Out
    setTimeout(() => {
      setEnvelopeStage("sliding-card");
    }, 750);

    // 4. Launch Gala Confetti
    setTimeout(() => {
      launchGalaConfetti();
    }, 1150);

    // 5. Transition to Full Invitation
    setTimeout(() => {
      setEnvelopeStage("done");
      setIsOpen(true);
    }, 1750);
  };

  // Countdown timer calculation
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventTime - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventTime]);

  // WhatsApp RSVP handler
  const whatsappUrl = `https://wa.me/${EVENT_CONFIG.rsvp.phone}?text=${encodeURIComponent(
    EVENT_CONFIG.rsvp.message
  )}`;

  const handleRsvpWithConfetti = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    launchGalaConfetti();
    setIsRedirecting(true);
    pauseMusic();

    setTimeout(() => {
      setIsRedirecting(false);
      window.open(whatsappUrl, "_blank");
    }, 750);
  };

  // Copy invitation link
  const copyPageUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // Auto-silence on visibility change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.75;

    const onPlayEvent = () => setIsPlaying(true);
    const onPauseEvent = () => setIsPlaying(false);

    audio.addEventListener("play", onPlayEvent);
    audio.addEventListener("pause", onPauseEvent);

    const handleVisibility = () => {
      if (document.hidden && audio) {
        audio.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      audio.removeEventListener("play", onPlayEvent);
      audio.removeEventListener("pause", onPauseEvent);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#faf9f6] text-[#143d2b] selection:bg-[#d4af37] selection:text-white">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={EVENT_CONFIG.audio.src}
      >
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Gold & Emerald Dust */}
      <FloatingParticles />

      {/* ========================================================
          PANTALLA DE APERTURA: SOBRE DE GALA 3D (3D Envelope Unfold)
      ======================================================== */}
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.div
            key="gala-envelope-modal"
            initial={false}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf9f6]/95 backdrop-blur-xl px-4 select-none overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute h-96 w-96 rounded-full bg-[#d4af37]/15 blur-[120px] pointer-events-none" />
            <div className="absolute h-80 w-80 rounded-full bg-[#0b3b2c]/10 blur-[100px] pointer-events-none" />

            {/* 3D Envelope Unfolding Component */}
            <GalaEnvelope3D stage={envelopeStage} onOpen={handleOpenEnvelope} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 pt-6 pb-2 sm:px-6 sm:pt-10 sm:pb-4 space-y-10 sm:space-y-12 overflow-x-hidden">
        {/* ========================================================
            1. COVER / PORTADA HERO
        ======================================================== */}
        <section className="text-center pt-2 sm:pt-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#0b3b2c] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            <span className="fuente-serif text-[11px]">
              {EVENT_CONFIG.event.subtitle}
            </span>
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5"
          >
            <h2 className="fuente-serif text-sm sm:text-base text-[#0b3b2c] uppercase font-bold tracking-[4px]">
              {EVENT_CONFIG.event.title}
            </h2>

            {/* Main Calligraphic Name */}
            <div className="my-2">
              <h1 className="titulo-script texto-dorado text-5xl sm:text-7xl md:text-8xl leading-none">
                {EVENT_CONFIG.graduate.name}
              </h1>
            </div>

            {/* Degree subtitle */}
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <p className="fuente-serif text-xs sm:text-sm font-semibold tracking-[2.5px] uppercase text-[#0b3b2c]">
                {EVENT_CONFIG.graduate.degree}
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* Cap & Laurels Emblem */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[#d4af37]">
              <span className="text-lg">✦</span>
              <GraduationCap className="h-6 w-6 text-[#0b3b2c]" />
              <span className="text-lg">✦</span>
            </div>
          </motion.div>
        </section>

        {/* ========================================================
            2. REPRODUCTOR MUSICAL SIMULADO & CUENTA REGRESIVA
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="tarjeta-lujo rounded-3xl p-6 sm:p-8">
            <GalaCorner position="top-right" delay={0.2} />
            <GalaCorner position="bottom-left" delay={0.3} />

            {/* Golden Music Player Bar */}
            <div className="rounded-2xl bg-gradient-to-r from-[#faf5ea] via-[#fbf7ee] to-[#f4ebd0] p-4 border border-[#d4af37]/45 shadow-inner">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <button
                    type="button"
                    onClick={toggleMusic}
                    className="h-12 w-12 rounded-full boton-dorado flex items-center justify-center text-[#0b3b2c] shadow-md hover:scale-105 transition-transform cursor-pointer"
                    title={isPlaying ? "Pausar música" : "Reproducir música"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 fill-[#0b3b2c]" />
                    ) : (
                      <Play className="h-5 w-5 fill-[#0b3b2c] ml-0.5" />
                    )}
                  </button>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-[#aa7c11] uppercase tracking-wider flex items-center gap-1.5">
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Dale Play a mi canción favorita</span>
                    </p>
                    <p className="text-sm font-bold text-[#0b3b2c] font-sans">
                      {EVENT_CONFIG.audio.title}
                    </p>
                  </div>
                </div>

                {/* Animated Sound Equalizer Waves */}
                <div className="flex items-end gap-1 h-6 px-2">
                  {[40, 75, 100, 60, 90, 45, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={
                        isPlaying
                          ? {
                            height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                          }
                          : { height: "20%" }
                      }
                      transition={{
                        duration: 0.8 + (i % 3) * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 rounded-full bg-[#d4af37]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-2 text-[#0b3b2c]">
                <Sparkles className="h-4 w-4 text-[#d4af37]" />
                <span className="fuente-serif text-xs uppercase tracking-[3px] font-bold">
                  Faltan muy pocos días
                </span>
                <Sparkles className="h-4 w-4 text-[#d4af37]" />
              </div>
              <h3 className="fuente-serif mt-1 text-xl sm:text-2xl font-bold text-[#0b3b2c] tracking-widest uppercase">
                Cuenta Regresiva
              </h3>

              {/* 4 Countdown Boxes con animación Flip Clock */}
              <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4">
                <FlipClockBox value={timeLeft.days} label="Días" delayIndex={0} isReady={isOpen} />
                <FlipClockBox value={timeLeft.hours} label="Horas" delayIndex={1} isReady={isOpen} />
                <FlipClockBox value={timeLeft.minutes} label="Minutos" delayIndex={2} isReady={isOpen} />
                <FlipClockBox value={timeLeft.seconds} label="Segundos" delayIndex={3} isReady={isOpen} />
              </div>

              {/* Add to Google Calendar Button */}
              <div className="mt-6 flex justify-center">
                <motion.a
                  href={EVENT_CONFIG.event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={pauseMusic}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#0b3b2c] border border-[#d4af37]/50 shadow-sm hover:bg-[#faf5ea] transition-colors"
                >
                  <Calendar className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>Agendar en Google Calendar</span>
                </motion.a>
              </div>
            </div>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            3. FOTO PRINCIPAL DE GRADUACIÓN
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-md"
        >
          <TiltCard className="tarjeta-lujo rounded-3xl p-4 sm:p-5 text-center">
            <GalaCorner position="top-left" delay={0.2} />
            <GalaCorner position="bottom-right" delay={0.3} />

            {/* Golden Frame Around Photo with Shimmer Sheen */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#d4af37]/75 shadow-xl bg-[#eaf4ef]">
              <Image
                src={EVENT_CONFIG.graduate.photo}
                alt={`${EVENT_CONFIG.graduate.name} - Graduación`}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b2c]/80 via-transparent to-transparent" />

              {/* Bottom Commemorative Badge */}
              <div className="absolute bottom-4 left-0 right-0 text-center px-4 z-10">
                <div className="inline-block rounded-full bg-white/90 backdrop-blur-md border border-[#d4af37] px-4 py-1.5 shadow-lg">
                  <p className="fuente-serif text-[11px] sm:text-xs font-bold text-[#0b3b2c] tracking-[2px] uppercase">
                    MI GRADUACIÓN • {EVENT_CONFIG.event.shortDate}
                  </p>
                </div>
              </div>
            </div>

            <p className="fuente-serif mt-3 text-xs font-semibold text-[#0b3b2c] uppercase tracking-widest">
              {EVENT_CONFIG.graduate.name}
            </p>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            4. TARJETA DE AGRADECIMIENTO (Pergamino de Algodón con Borde Rasgado & Sello)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="pt-4"
        >
          <TiltCard className="tarjeta-pergamino-rasgado rounded-3xl p-6 sm:p-10 md:p-12 text-center pt-10 sm:pt-12">
            {/* Sello de cera en relieve con cinta de seda virtual */}
            <GratitudeWaxSealRibbon />

            <GalaCorner position="top-right" delay={0.2} />
            <GalaCorner position="bottom-left" delay={0.3} />

            {/* Inner Gold Foil Deckle Frame */}
            <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#d4af37]/35 border-dashed pointer-events-none" />

            <div className="relative z-10">
              <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block mt-2">
                Con profunda gratitud
              </span>
              <h3 className="titulo-script texto-dorado text-4xl sm:text-6xl my-2">
                Agradecimiento
              </h3>
              <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

              {/* Emotional Dedications */}
              <div className="space-y-5 text-left text-sm sm:text-base leading-relaxed text-[#143d2b]/90">
                {/* 1. Dios */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#d4af37]/40 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#edd59e]/50 p-2.5 text-[#aa7c11] shrink-0 mt-0.5 shadow-xs">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                        A Dios
                      </strong>
                      <p className="text-sm font-serif italic text-[#143d2b]/90 leading-relaxed">
                        {EVENT_CONFIG.gratitude.god}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Madre */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#d4af37]/40 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#eaf4ef] p-2.5 text-[#0b3b2c] shrink-0 mt-0.5 shadow-xs">
                      <Heart className="h-4 w-4 fill-[#0b3b2c]/25" />
                    </div>
                    <div>
                      <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                        A mi amada Madre: {EVENT_CONFIG.gratitude.mother.name}
                      </strong>
                      <p className="text-sm font-serif italic text-[#143d2b]/90 leading-relaxed">
                        {EVENT_CONFIG.gratitude.mother.text}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Familia */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#d4af37]/40 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#edd59e]/50 p-2.5 text-[#aa7c11] shrink-0 mt-0.5 shadow-xs">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                        A mi querida Familia: {EVENT_CONFIG.gratitude.family.name}
                      </strong>
                      <p className="text-sm font-serif italic text-[#143d2b]/90 leading-relaxed">
                        {EVENT_CONFIG.gratitude.family.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Quote */}
              <div className="mt-8 pt-6 border-t border-[#d4af37]/35 text-center">
                <Quote className="h-5 w-5 text-[#d4af37] mx-auto mb-2" />
                <p className="fuente-editorial italic text-base sm:text-lg text-[#0b3b2c] font-medium leading-relaxed">
                  {EVENT_CONFIG.graduate.quote}
                </p>
                <p className="fuente-serif text-xs font-bold text-[#aa7c11] uppercase tracking-[2px] mt-2">
                  — {EVENT_CONFIG.graduate.name} —
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            5. CORTEJO Y FAMILIARES
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center">
            <GalaCorner position="top-left" delay={0.2} />
            <GalaCorner position="bottom-right" delay={0.3} />

            <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block">
              Acompañantes de Honor
            </span>
            <h3 className="titulo-script texto-dorado text-4xl sm:text-5xl my-1">
              Mi Familia
            </h3>
            <div className="mx-auto h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {/* Padres */}
              <div className="p-5 rounded-2xl bg-[#faf8f2] border border-[#d4af37]/30">
                <span className="fuente-serif text-xs uppercase tracking-widest text-[#0b3b2c] font-bold block mb-2">
                  En Honor a mi Madre
                </span>
                <p className="titulo-script text-[#0b3b2c] text-3xl sm:text-4xl">
                  Celia Perez Romero
                </p>
                <p className="text-xs text-[#143d2b]/70 mt-1 uppercase tracking-wider font-medium">

                </p>
              </div>

              {/* Padrinos y Tíos */}
              <div className="p-5 rounded-2xl bg-[#faf8f2] border border-[#d4af37]/30">
                <span className="fuente-serif text-xs uppercase tracking-widest text-[#0b3b2c] font-bold block mb-2">
                  Padrinos & Familiares
                </span>
                <p className="titulo-script text-[#0b3b2c] text-3xl sm:text-4xl">
                  Familia Perez Romero
                </p>
                <p className="text-xs text-[#143d2b]/70 mt-1 uppercase tracking-wider font-medium">

                </p>
              </div>
            </div>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            6. FECHA, HORA Y BOTÓN DE UBICACIÓN
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center">
            <GalaCorner position="top-right" delay={0.2} />
            <GalaCorner position="bottom-left" delay={0.3} />

            <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block">
              Lugar & Fecha de la Recepción
            </span>
            <h3 className="fuente-serif text-xl sm:text-2xl font-bold text-[#0b3b2c] tracking-widest uppercase mt-1">
              Recepción de Gala
            </h3>

            {/* Golden Medallion Badge */}
            <div className="my-7 flex justify-center">
              <div className="relative p-6 sm:p-8 rounded-full bg-gradient-to-tr from-[#edd59e]/40 via-white to-[#edd59e]/40 border-2 border-[#d4af37] shadow-xl max-w-xs w-full">
                <Calendar className="h-6 w-6 text-[#0b3b2c] mx-auto mb-1.5" />
                <p className="fuente-serif font-bold text-base sm:text-lg text-[#0b3b2c] tracking-wider uppercase">
                  {EVENT_CONFIG.event.dateDisplay}
                </p>
                <div className="mx-auto h-[1px] w-16 bg-[#d4af37] my-2" />
                <p className="fuente-serif font-bold text-sm sm:text-base text-[#aa7c11] tracking-widest flex items-center justify-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{EVENT_CONFIG.event.timeDisplay}</span>
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#0b3b2c]">
                {EVENT_CONFIG.event.venueName}
              </h4>
              <p className="text-sm text-[#143d2b]/80">
                {EVENT_CONFIG.event.venueAddress} • {EVENT_CONFIG.event.city}
              </p>
            </div>

            {/* Big Interactive Map Button */}
            <div className="mt-7 flex justify-center">
              <motion.a
                href={EVENT_CONFIG.event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={pauseMusic}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="boton-esmeralda w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-[2px] inline-flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                <Map className="h-4 w-4 text-[#d4af37]" />
                <span>Ver la Ubicación en Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            7. GALERÍA / CARRUSEL DE RECUERDOS (Polaroids Interactivos)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <PolaroidGallery />
        </motion.section>

        {/* ========================================================
            8. CONFIRMACIÓN DE ASISTENCIA (RSVP)
        ======================================================== */}
        <motion.section
          id="rsvp"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center">
            <GalaCorner position="top-right" delay={0.2} />
            <GalaCorner position="bottom-left" delay={0.3} />

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ef] text-[#0b3b2c] shadow-md border border-[#a8d5c2]">
              <MessageCircle className="h-7 w-7 text-[#0b3b2c]" />
            </div>

            <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block mt-4">
              Tu presencia es indispensable
            </span>
            <h3 className="fuente-serif text-xl sm:text-2xl font-bold text-[#0b3b2c] tracking-widest uppercase mt-1">
              Confirmar Asistencia
            </h3>
            <p className="mt-2 text-sm text-[#143d2b]/80 max-w-md mx-auto leading-relaxed">
              Agradecemos confirmar tu valiosa asistencia hasta el{" "}
              <strong>{EVENT_CONFIG.rsvp.deadline}</strong> para una adecuada
              organización.
            </p>

            <div className="mt-7 flex justify-center">
              <motion.button
                type="button"
                onClick={handleRsvpWithConfetti}
                disabled={isRedirecting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="boton-esmeralda w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-sm uppercase tracking-[2px] inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl disabled:opacity-85"
              >
                {isRedirecting ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin text-[#edd59e]" />
                    <span>Abriendo WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5 fill-[#25D366] text-[#25D366]" />
                    <span>CONFIRMAR ASISTENCIA</span>
                  </>
                )}
              </motion.button>
            </div>
          </TiltCard>
        </motion.section>

        {/* ========================================================
            9. PIE DE PÁGINA
        ======================================================== */}
        <footer className="pt-2 pb-6 text-center space-y-5">
          {/* Share Invitation Button */}
          <div className="flex justify-center">
            <motion.button
              type="button"
              onClick={copyPageUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/90 px-5 py-2 text-xs font-semibold text-[#0b3b2c] hover:bg-[#faf5ea] shadow-sm transition-colors cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>
                {copiedLink
                  ? "¡Enlace copiado al portapapeles!"
                  : "Compartir esta invitación"}
              </span>
            </motion.button>
          </div>

          <div className="space-y-1">
            <p className="titulo-script texto-dorado text-4xl sm:text-5xl">
              ¡Te Esperamos!
            </p>
            <p className="fuente-serif text-xs text-[#0b3b2c] font-bold tracking-[3px] uppercase">
              {EVENT_CONFIG.graduate.name}
            </p>
            <p className="text-[11px] text-[#143d2b]/60 uppercase tracking-widest">
              {EVENT_CONFIG.graduate.degree} • 2026
            </p>
          </div>

          <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
        </footer>
      </div>

      {/* ========================================================
          BOTÓN FLOTANTE PERMANENTE DE WHATSAPP
      ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          type="button"
          onClick={handleRsvpWithConfetti}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] transition-all border-2 border-white focus:outline-none cursor-pointer"
          title="Confirmar Asistencia vía WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E]"></span>
          </span>
          <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />
        </motion.button>
      </motion.div>
    </div>
  );
}
