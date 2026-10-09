"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Map,
  Quote,
  Play,
  Pause,
  Volume2,
  Check,
  Copy,
  Gift,
  Users,
  Utensils,
  Music,
  PartyPopper,
  ExternalLink,
  ChevronRight,
  Ticket,
} from "lucide-react";
import { EVENT_CONFIG } from "./config";

// Golden and emerald dust particles
const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: `${(i * 3.1) % 96 + 2}%`,
  size: `${(i % 3) * 1.5 + 3.5}px`,
  duration: `${14 + (i % 6) * 2.5}s`,
  delay: `${(i * 0.7) % 9}s`,
  opacity: 0.35 + (i % 4) * 0.15,
  isEmerald: i % 3 === 0,
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
          className={p.isEmerald ? "particula-esmeralda" : "particula-dorada"}
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
        return "-top-4 -left-4 sm:-top-6 sm:-left-6";
      case "top-right":
        return "-top-4 -right-4 sm:-top-6 sm:-right-6";
      case "bottom-left":
        return "-bottom-4 -left-4 sm:-bottom-6 sm:-left-6";
      case "bottom-right":
        return "-bottom-4 -right-4 sm:-bottom-6 sm:-right-6";
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

// Simulated QR code component with gold-emerald styling & copyable bank data
function GoldQrCard() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(EVENT_CONFIG.gifts.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* QR Display Container */}
      <div className="relative p-4 rounded-2xl bg-white border-2 border-[#d4af37]/60 shadow-lg">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white p-3 rounded-xl flex items-center justify-center">
          {/* Stylized QR Code SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="#0b3b2c"
          >
            {/* Corner Markers */}
            <rect x="5" y="5" width="26" height="26" rx="4" fill="#0b3b2c" />
            <rect x="9" y="9" width="18" height="18" rx="2" fill="#ffffff" />
            <rect x="13" y="13" width="10" height="10" rx="1" fill="#d4af37" />

            <rect x="69" y="5" width="26" height="26" rx="4" fill="#0b3b2c" />
            <rect x="73" y="9" width="18" height="18" rx="2" fill="#ffffff" />
            <rect x="77" y="13" width="10" height="10" rx="1" fill="#d4af37" />

            <rect x="5" y="69" width="26" height="26" rx="4" fill="#0b3b2c" />
            <rect x="9" y="73" width="18" height="18" rx="2" fill="#ffffff" />
            <rect x="13" y="77" width="10" height="10" rx="1" fill="#d4af37" />

            {/* Center Graduation Emblem in QR */}
            <rect x="38" y="38" width="24" height="24" rx="4" fill="#ffffff" stroke="#d4af37" strokeWidth="1" />
            <circle cx="50" cy="50" r="8" fill="#0b3b2c" />
            <polygon points="50,44 56,48 50,52 44,48" fill="#d4af37" />

            {/* QR Pattern Blocks */}
            <rect x="36" y="8" width="6" height="6" />
            <rect x="46" y="8" width="6" height="6" />
            <rect x="56" y="8" width="6" height="6" />
            <rect x="36" y="18" width="6" height="6" />
            <rect x="46" y="18" width="6" height="6" />
            <rect x="56" y="18" width="6" height="6" fill="#d4af37" />

            <rect x="8" y="36" width="6" height="6" />
            <rect x="18" y="36" width="6" height="6" />
            <rect x="28" y="36" width="6" height="6" fill="#d4af37" />
            <rect x="8" y="46" width="6" height="6" />
            <rect x="18" y="46" width="6" height="6" />
            <rect x="28" y="46" width="6" height="6" />
            <rect x="8" y="56" width="6" height="6" />
            <rect x="18" y="56" width="6" height="6" fill="#d4af37" />
            <rect x="28" y="56" width="6" height="6" />

            <rect x="68" y="36" width="6" height="6" fill="#d4af37" />
            <rect x="78" y="36" width="6" height="6" />
            <rect x="88" y="36" width="6" height="6" />
            <rect x="68" y="46" width="6" height="6" />
            <rect x="78" y="46" width="6" height="6" />
            <rect x="88" y="46" width="6" height="6" fill="#d4af37" />
            <rect x="68" y="56" width="6" height="6" fill="#d4af37" />
            <rect x="78" y="56" width="6" height="6" />
            <rect x="88" y="56" width="6" height="6" />

            <rect x="36" y="68" width="6" height="6" />
            <rect x="46" y="68" width="6" height="6" fill="#d4af37" />
            <rect x="56" y="68" width="6" height="6" />
            <rect x="36" y="78" width="6" height="6" />
            <rect x="46" y="78" width="6" height="6" />
            <rect x="56" y="78" width="6" height="6" fill="#d4af37" />
            <rect x="36" y="88" width="6" height="6" fill="#d4af37" />
            <rect x="46" y="88" width="6" height="6" />
            <rect x="56" y="88" width="6" height="6" />

            <rect x="68" y="68" width="6" height="6" />
            <rect x="78" y="68" width="6" height="6" />
            <rect x="88" y="68" width="6" height="6" />
            <rect x="68" y="78" width="6" height="6" fill="#d4af37" />
            <rect x="78" y="78" width="6" height="6" />
            <rect x="88" y="78" width="6" height="6" />
            <rect x="68" y="88" width="6" height="6" />
            <rect x="78" y="88" width="6" height="6" fill="#d4af37" />
            <rect x="88" y="88" width="6" height="6" />
          </svg>
        </div>

        {/* Small corner golden accents */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#d4af37]" />
      </div>

      {/* Account Info Box */}
      <div className="mt-4 w-full max-w-xs text-center space-y-1 bg-[#faf8f2] p-3.5 rounded-xl border border-[#d4af37]/30">
        <p className="text-xs font-semibold text-[#0b3b2c] tracking-wider uppercase">
          {EVENT_CONFIG.gifts.bank}
        </p>
        <p className="text-xs text-[#143d2b]/80">
          Titular: <span className="font-semibold text-[#0b3b2c]">{EVENT_CONFIG.gifts.accountHolder}</span>
        </p>
        <p className="text-xs text-[#143d2b]/80">
          C.I.: <span className="font-semibold">{EVENT_CONFIG.gifts.ci}</span>
        </p>
        <div className="pt-2 flex items-center justify-center gap-2">
          <code className="text-xs font-mono font-bold text-[#0b3b2c] bg-white px-2.5 py-1 rounded border border-[#d4af37]/40">
            {EVENT_CONFIG.gifts.accountNumber}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0b3b2c] bg-[#edd59e] hover:bg-[#d4af37] px-2.5 py-1 rounded transition-colors shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-800" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GraduationInvitation() {
  const [isOpen, setIsOpen] = useState(false);
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

  // Open Invitation Handler
  const handleOpenInvitation = () => {
    setIsOpen(true);
    playMusic();
    setTimeout(() => {
      launchGalaConfetti();
    }, 450);
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
    <div className="relative min-h-screen bg-[#faf9f6] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#faf9f6] to-[#f4ebd0]/30 text-stone-800 font-sans selection:bg-[#d4af37] selection:text-white">
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
          PANTALLA DE APERTURA / BIENVENIDA (Cover Elegante)
      ======================================================== */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="gala-cover-modal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            onClick={handleOpenInvitation}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf9f6]/95 backdrop-blur-xl px-4 cursor-pointer select-none"
          >
            {/* Ambient Background Aura */}
            <div className="absolute h-96 w-96 rounded-full bg-[#d4af37]/15 blur-[120px] pointer-events-none" />
            <div className="absolute h-80 w-80 rounded-full bg-[#0b3b2c]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-sm w-full p-8 rounded-3xl bg-white/90 border border-[#d4af37]/50 shadow-2xl">
              {/* Esquinas Florales */}
              <GalaCorner position="top-left" delay={0.1} />
              <GalaCorner position="bottom-right" delay={0.2} />

              {/* Monogram Laurel */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.97, 1.03, 0.97], opacity: [0.9, 1, 0.9] }}
                transition={{
                  scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="mx-auto"
              >
                <LaurelWreath monogram={EVENT_CONFIG.graduate.monogram} />
              </motion.div>

              <div className="mt-5 space-y-1.5">
                <p className="fuente-serif text-xs uppercase tracking-[3px] text-[#0b3b2c] font-semibold">
                  Invitación Formal
                </p>
                <h2 className="titulo-script texto-dorado text-4xl sm:text-5xl">
                  {EVENT_CONFIG.graduate.name}
                </h2>
                <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-2" />
                <p className="fuente-serif text-[11px] text-[#143d2b]/80 uppercase tracking-widest">
                  {EVENT_CONFIG.graduate.degree}
                </p>
              </div>

              {/* Golden Welcome Open Button */}
              <div className="mt-7">
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenInvitation();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="boton-dorado w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-[2px] inline-flex items-center justify-center gap-2 border border-[#edd59e] shadow-lg cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-[#07261c]" />
                  <span>Abrir Invitación</span>
                  <Sparkles className="h-4 w-4 text-[#07261c]" />
                </motion.button>
                <p className="mt-3 text-[11px] text-[#143d2b]/60 font-light">
                  Toca para ingresar con música de gala
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 space-y-12">
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
          className="tarjeta-lujo rounded-3xl p-6 sm:p-8 relative overflow-hidden"
        >
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

            {/* 4 Countdown Boxes */}
            <div className="mt-6 grid grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-white/95 p-3 sm:p-4 border border-[#d4af37]/40 shadow-md"
                >
                  <span
                    suppressHydrationWarning
                    className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono"
                  >
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-[#0b3b2c] font-semibold">
                    {item.label}
                  </span>
                </motion.div>
              ))}
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
          <div className="tarjeta-lujo rounded-3xl p-4 sm:p-5 text-center relative">
            <GalaCorner position="top-left" delay={0.2} />
            <GalaCorner position="bottom-right" delay={0.3} />

            {/* Golden Frame Around Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#d4af37]/60 shadow-xl bg-[#eaf4ef]">
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
              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
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
          </div>
        </motion.section>

        {/* ========================================================
            4. TARJETA DE AGRADECIMIENTO (Estilo Pergamino)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="tarjeta-pergamino rounded-3xl p-7 sm:p-10 md:p-12 text-center"
        >
          <GalaCorner position="top-right" delay={0.2} />
          <GalaCorner position="bottom-left" delay={0.3} />

          <div className="relative z-10">
            <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block">
              Con profunda gratitud
            </span>
            <h3 className="titulo-script texto-dorado text-4xl sm:text-6xl my-2">
              Agradecimiento
            </h3>
            <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

            {/* Emotional Dedications */}
            <div className="space-y-5 text-left text-sm sm:text-base leading-relaxed text-[#143d2b]/90">
              {/* 1. Dios */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#d4af37]/35 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-xl bg-[#edd59e]/50 p-2.5 text-[#aa7c11] shrink-0 mt-0.5">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                      A Dios
                    </strong>
                    <p className="text-sm font-serif italic text-[#143d2b]/85">
                      {EVENT_CONFIG.gratitude.god}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Madre */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#d4af37]/35 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-xl bg-[#eaf4ef] p-2.5 text-[#0b3b2c] shrink-0 mt-0.5">
                    <Heart className="h-4 w-4 fill-[#0b3b2c]/20" />
                  </div>
                  <div>
                    <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                      A mi amada Madre: {EVENT_CONFIG.gratitude.mother.name}
                    </strong>
                    <p className="text-sm font-serif italic text-[#143d2b]/85">
                      {EVENT_CONFIG.gratitude.mother.text}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Familia */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#d4af37]/35 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-xl bg-[#edd59e]/50 p-2.5 text-[#aa7c11] shrink-0 mt-0.5">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="fuente-serif text-xs uppercase font-bold text-[#0b3b2c] tracking-wider block mb-1">
                      A mi querida Familia: {EVENT_CONFIG.gratitude.family.name}
                    </strong>
                    <p className="text-sm font-serif italic text-[#143d2b]/85">
                      {EVENT_CONFIG.gratitude.family.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Quote */}
            <div className="mt-8 pt-6 border-t border-[#d4af37]/30 text-center">
              <Quote className="h-5 w-5 text-[#d4af37] mx-auto mb-2" />
              <p className="fuente-editorial italic text-base sm:text-lg text-[#0b3b2c] font-medium leading-relaxed">
                {EVENT_CONFIG.graduate.quote}
              </p>
              <p className="fuente-serif text-xs font-bold text-[#aa7c11] uppercase tracking-[2px] mt-2">
                — {EVENT_CONFIG.graduate.name} —
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================
            5. CORTEJO Y FAMILIARES
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center"
        >
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
        </motion.section>

        {/* ========================================================
            6. FECHA, HORA Y BOTÓN DE UBICACIÓN
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden"
        >
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
        </motion.section>

        {/* ========================================================
            7. ITINERARIO (Timeline Vertical)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="tarjeta-lujo rounded-3xl p-7 sm:p-10"
        >
          <GalaCorner position="top-left" delay={0.2} />
          <GalaCorner position="bottom-right" delay={0.3} />

          <div className="text-center mb-8">
            <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block">
              Programa de la Velada
            </span>
            <h3 className="titulo-script texto-dorado text-4xl sm:text-5xl my-1">
              Itinerario
            </h3>
            <div className="mx-auto h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3" />
          </div>

          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#d4af37]/40 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
            {EVENT_CONFIG.itinerary.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline Dot with Emerald Center */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#faf9f6] border-2 border-[#d4af37] flex items-center justify-center shadow">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#0b3b2c]" />
                </div>

                <div className="p-4 rounded-2xl bg-[#faf8f2] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="fuente-serif text-xs font-bold text-[#aa7c11] tracking-wider uppercase">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0b3b2c] mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#143d2b]/75 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
          className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden"
        >
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
        </motion.section>

        {/* ========================================================
            9. PASES Y OBSEQUIOS (Código QR)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="tarjeta-lujo rounded-3xl p-7 sm:p-10 text-center"
        >
          <GalaCorner position="top-left" delay={0.2} />
          <GalaCorner position="bottom-right" delay={0.3} />

          {/* Reserved Passes Badge */}
          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#eaf4ef] border border-[#a8d5c2] px-5 py-2.5 text-xs font-bold text-[#0b3b2c] shadow-sm mb-6">
            <Ticket className="h-4 w-4 text-[#d4af37]" />
            <span className="fuente-serif uppercase tracking-wider">
              Lugar reservado en su honor:{" "}
              <span className="text-[#aa7c11] font-extrabold text-sm">
                {EVENT_CONFIG.rsvp.passes} pases
              </span>
            </span>
          </div>

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#faf5ea] text-[#aa7c11] border border-[#d4af37]/40 mb-3">
            <Gift className="h-6 w-6 text-[#aa7c11]" />
          </div>

          <span className="fuente-serif text-xs uppercase tracking-[3px] text-[#aa7c11] font-bold block">
            Lluvia de Sobres & Presentes
          </span>
          <h3 className="titulo-script texto-dorado text-4xl sm:text-5xl my-1">
            {EVENT_CONFIG.gifts.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#143d2b]/80 max-w-md mx-auto leading-relaxed">
            {EVENT_CONFIG.gifts.description}
          </p>

          {/* Gold QR Code & Banking Container */}
          <div className="mt-6 flex justify-center">
            <GoldQrCard />
          </div>
        </motion.section>

        {/* ========================================================
            10. PIE DE PÁGINA
        ======================================================== */}
        <footer className="pt-6 pb-20 text-center space-y-6">
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
