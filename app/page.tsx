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
  ExternalLink,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Map,
  Flower2,
  Quote,
} from "lucide-react";

// Countdown target: Viernes 16 de Octubre 2026, 19:00 (GMT-4 / Bolivia)
const EVENT_DATE = new Date("2026-10-16T19:00:00-04:00").getTime();

// Pre-calculated deterministic floating pink & gold petals
const PETAL_PARTICLES = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${(i * 3.1) % 96 + 2}%`,
  size: `${(i % 4) * 1.8 + 3.5}px`,
  duration: `${13 + (i % 7) * 2.2}s`,
  delay: `${(i * 0.65) % 10}s`,
  opacity: 0.35 + ((i % 5) * 0.12),
}));

function FloatingFloralPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {PETAL_PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particula-petalo"
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

// Retro Vintage Rose-Gold Vinyl Record with Automatic Spin and Tonearm
function VintageVinyl({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 select-none">
      {/* Vinyl record disc */}
      <div
        className={`relative h-full w-full rounded-full bg-gradient-to-tr from-zinc-950 via-[#1f0511] to-black p-1 border-2 border-pink-300/70 transition-all shadow-xl ${
          isPlaying ? "animate-spin-slow shadow-pink-400/40" : "opacity-80"
        }`}
      >
        {/* Concentric vinyl groove rings */}
        <div className="absolute inset-1 rounded-full border border-pink-900/30" />
        <div className="absolute inset-2 rounded-full border border-zinc-700/40" />
        <div className="absolute inset-3 rounded-full border border-pink-950/60" />

        {/* Center retro label (pastel rose & gold) */}
        <div className="absolute inset-0 m-auto h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-amber-300 border border-pink-100 shadow-inner flex items-center justify-center">
          {/* Spindle hole */}
          <div className="h-1.5 w-1.5 rounded-full bg-black border border-pink-300" />
        </div>
      </div>

      {/* Tonearm / needle indicator */}
      <div
        className={`absolute -top-1 -right-0.5 h-6 w-6 pointer-events-none transition-transform duration-500 origin-top-right ${
          isPlaying ? "rotate-12" : "-rotate-30 opacity-60"
        }`}
      >
        <div className="h-4 w-0.5 bg-gradient-to-b from-pink-200 to-rose-400 rounded-full shadow" />
        <div className="h-1.5 w-1.5 -ml-0.5 rounded-full bg-pink-300 shadow-sm" />
      </div>
    </div>
  );
}

// ========================================================
// ESQUINA FLORAL ORNAMENTAL ANIMADA (FLORAL CORNER FLOURISH)
// ========================================================
interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  delay?: number;
}

function FloralCorner({ position, className = "", delay = 0.2 }: FloralCornerProps) {
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
        return "-bottom-4 -left-4 sm:-bottom-6 sm:-left-4";
      case "bottom-right":
        return "-bottom-4 -right-4 sm:-bottom-6 sm:-right-6";
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0, rotate: position.includes("right") ? 12 : -12 }}
      whileInView={{ scale: 1, opacity: 0.95, rotate: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`absolute pointer-events-none z-20 select-none ${getPositionClass()} ${className}`}
      style={{ transform: getTransform() }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 drop-shadow-[0_2px_14px_rgba(244,114,182,0.55)]"
      >
        <defs>
          <linearGradient id="floralRoseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff1f5" />
            <stop offset="25%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="80%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
          <linearGradient id="softGoldPetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        {/* Flor Principal de 5 Pétalos Estilo Ilustración */}
        <g fill="url(#floralRoseGoldGrad)" stroke="url(#softGoldPetalGrad)" strokeWidth="0.8">
          {/* Pétalos Florales */}
          <path d="M 45 42 C 30 18 52 4 64 20 C 72 30 60 40 45 42 Z" />
          <path d="M 42 45 C 18 30 4 52 20 64 C 30 72 40 60 42 45 Z" />
          <path d="M 50 48 C 68 34 88 46 80 64 C 74 74 58 60 50 48 Z" />
          <path d="M 48 50 C 34 68 46 88 64 80 C 74 74 60 58 48 50 Z" />
          <path d="M 38 38 C 28 14 8 26 14 44 C 18 54 30 46 38 38 Z" />

          {/* Centro de la flor & Estrella interior */}
          <circle cx="45" cy="45" r="9.5" fill="#200410" stroke="url(#floralRoseGoldGrad)" strokeWidth="2" />
          <circle cx="45" cy="45" r="4.8" fill="url(#softGoldPetalGrad)" />
          {/* Pistilos y rayos de luz */}
          <path d="M 45 37 L 45 34 M 45 53 L 45 56 M 37 45 L 34 45 M 53 45 L 56 45 M 39 39 L 37 37 M 51 51 L 53 53 M 39 51 L 37 53 M 51 39 L 53 37" stroke="url(#softGoldPetalGrad)" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* Tallos curvados, arabescos botánicos, hojas y zarcillos */}
        <g fill="url(#floralRoseGoldGrad)" stroke="none">
          {/* Curva de Tallo Principal Vertical */}
          <path d="M 44 54 C 44 85 30 115 10 148 C 25 132 38 100 48 68 C 50 62 48 56 44 54 Z" />
          {/* Curva de Tallo Principal Horizontal */}
          <path d="M 54 44 C 85 44 115 30 148 10 C 132 25 100 38 68 48 C 62 50 56 48 54 44 Z" />

          {/* Gran rama diagonal central */}
          <path d="M 46 46 C 75 75 110 100 178 126 C 148 112 105 85 70 60 C 58 52 50 48 46 46 Z" />
          <path d="M 46 46 C 75 75 100 110 126 178 C 112 148 85 105 60 70 C 52 58 48 50 46 46 Z" />

          {/* Espirales y rizos de follaje */}
          <path d="M 10 148 C 5 158 19 168 29 154 C 35 144 23 137 10 148 Z" />
          <path d="M 148 10 C 158 5 168 19 154 29 C 144 35 137 23 148 10 Z" />

          {/* Hojas laterales estilizadas */}
          <path d="M 32 90 C 12 95 18 120 38 108 C 45 102 40 92 32 90 Z" />
          <path d="M 90 32 C 95 12 120 18 108 38 C 102 45 92 40 90 32 Z" />
          <path d="M 58 85 C 48 105 70 125 82 102 C 86 92 72 85 58 85 Z" />
          <path d="M 85 58 C 105 48 125 70 102 82 C 92 86 85 72 85 58 Z" />

          {/* Zarcillos y volutas decorativas */}
          <path d="M 70 65 C 100 80 135 95 160 92 C 168 91 166 82 158 83 C 138 85 110 72 85 58 Z" />
          <path d="M 65 70 C 80 100 95 135 92 160 C 91 168 82 166 83 158 C 85 138 72 110 58 85 Z" />

          {/* Perlas/Gotas ornamentales a lo largo de las ramas */}
          <circle cx="28" cy="75" r="3.5" fill="url(#softGoldPetalGrad)" />
          <circle cx="22" cy="95" r="4.8" fill="url(#floralRoseGoldGrad)" />
          <circle cx="16" cy="118" r="3.2" fill="url(#softGoldPetalGrad)" />
          <circle cx="12" cy="138" r="2.6" fill="url(#floralRoseGoldGrad)" />

          <circle cx="75" cy="28" r="3.5" fill="url(#softGoldPetalGrad)" />
          <circle cx="95" cy="22" r="4.8" fill="url(#floralRoseGoldGrad)" />
          <circle cx="118" cy="16" r="3.2" fill="url(#softGoldPetalGrad)" />
          <circle cx="138" cy="12" r="2.6" fill="url(#floralRoseGoldGrad)" />

          <circle cx="110" cy="100" r="4.2" fill="url(#softGoldPetalGrad)" />
          <circle cx="130" cy="112" r="5.2" fill="url(#floralRoseGoldGrad)" />
          <circle cx="152" cy="120" r="3.6" fill="url(#softGoldPetalGrad)" />
          <circle cx="170" cy="124" r="2.8" fill="url(#softGoldPetalGrad)" />

          <circle cx="100" cy="110" r="4.2" fill="url(#softGoldPetalGrad)" />
          <circle cx="112" cy="130" r="5.2" fill="url(#floralRoseGoldGrad)" />
          <circle cx="120" cy="152" r="3.6" fill="url(#softGoldPetalGrad)" />
          <circle cx="124" cy="170" r="2.8" fill="url(#softGoldPetalGrad)" />
        </g>
      </svg>
    </motion.div>
  );
}

export default function GraduationInvitation() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });
  const [copiedLink, setCopiedLink] = useState(false);

  // Ambient gentle synthesizer melody fallback
  const startAmbientMelody = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      synthCtxRef.current = ctx;

      const notes = [392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 659.25];
      let step = 0;

      const playNote = () => {
        if (!synthCtxRef.current || synthCtxRef.current.state === "closed") return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.5);
        step++;
      };

      playNote();
      synthIntervalRef.current = setInterval(playNote, 1300);
    } catch {
      // AudioContext not allowed
    }
  }, []);

  const stopAmbientMelody = useCallback(() => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthCtxRef.current) {
      synthCtxRef.current.close().catch(() => {});
      synthCtxRef.current = null;
    }
  }, []);

  // Pause music immediately
  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopAmbientMelody();
    setIsPlaying(false);
  }, [stopAmbientMelody]);

  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback or waiting gesture
        });
    }
  }, []);

  // Función para abrir invitación e iniciar música inmediatamente con permiso del navegador
  const handleOpenInvitation = useCallback(() => {
    setLoading(false);
    playMusic();
    setTimeout(() => {
      launchConfetti();
    }, 400);
  }, [playMusic]);

  // Trigger luxury confetti (Pastel Pink, Rose Gold, Champagne, Pearl White)
  const launchConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#f472b6", "#ec4899", "#fbcfe8", "#fb7185", "#fde68a", "#ffffff"],
    });
  };

  // Countdown timer calculation
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

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
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
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

  // ========================================================
  // AUTOMATIC PLAYBACK & AUTO-SILENCE
  // ========================================================
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;

    const onPlayEvent = () => setIsPlaying(true);
    const onPauseEvent = () => setIsPlaying(false);

    audio.addEventListener("play", onPlayEvent);
    audio.addEventListener("pause", onPauseEvent);

    const tryAutoPlay = () => {
      if (audio && audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Handled by interaction
            });
        }
      }
    };

    tryAutoPlay();
    audio.addEventListener("canplay", tryAutoPlay, { once: true });
    audio.addEventListener("loadeddata", tryAutoPlay, { once: true });

    const interactionEvents = ["pointerdown", "touchstart", "click", "scroll", "keydown"];
    const handleFirstInteraction = () => {
      tryAutoPlay();
      cleanupInteractionListeners();
    };

    const cleanupInteractionListeners = () => {
      interactionEvents.forEach((ev) => {
        window.removeEventListener(ev, handleFirstInteraction);
      });
    };

    interactionEvents.forEach((ev) => {
      window.addEventListener(ev, handleFirstInteraction, { once: true, passive: true });
    });

    const handleVisibilityChange = () => {
      if (document.hidden && audio) {
        audio.pause();
      }
    };

    const handlePageLeave = () => {
      if (audio) {
        audio.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageLeave);
    window.addEventListener("beforeunload", handlePageLeave);

    return () => {
      audio.removeEventListener("play", onPlayEvent);
      audio.removeEventListener("pause", onPauseEvent);
      audio.removeEventListener("canplay", tryAutoPlay);
      audio.removeEventListener("loadeddata", tryAutoPlay);
      cleanupInteractionListeners();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageLeave);
      window.removeEventListener("beforeunload", handlePageLeave);
    };
  }, []);

  // WhatsApp pre-filled text
  const whatsappUrl =
    "https://wa.me/59178598284?text=" +
    encodeURIComponent("¡Hola Mayerly! Confirmo mi asistencia a tu recepción de graduación. ¡Muchas felicidades!");

  // WhatsApp RSVP Handler with Festive Pink & Rose-Gold Confetti
  const handleRsvpWithConfetti = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    const festiveColors = ["#f472b6", "#ec4899", "#fbcfe8", "#fde68a", "#fb7185", "#ffffff"];

    confetti({
      particleCount: 85,
      spread: 80,
      origin: { y: 0.65 },
      colors: festiveColors,
    });

    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: festiveColors,
    });

    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: festiveColors,
    });

    setIsRedirecting(true);
    pauseMusic();

    setTimeout(() => {
      setIsRedirecting(false);
      window.open(whatsappUrl, "_blank");
    }, 850);
  };

  const copyPageUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Graduaci%C3%B3n+de+Lic.+Mayerly+Perez+Perez&dates=20261016T230000Z/20261017T060000Z&details=Recepci%C3%B3n+Social+de+Graduaci%C3%B3n+-+Licenciatura+en+Administraci%C3%B3n+de+Empresas&location=Domicilio+particular+B%2FOriental+C%2FTajibo";

  const mapsLocationUrl = "https://maps.app.goo.gl/X37k2JopFKQnUJUr9";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#18030c] via-[#2d0a1b] to-[#140209] text-pink-50 selection:bg-pink-500 selection:text-white">
      {/* Audio Element supporting both /musica.mp3 and /musica.mpeg */}
      <audio
        ref={audioRef}
        autoPlay
        playsInline
        loop
        preload="auto"
        src="/musica.mp3"
      >
        <source src="/musica.mp3" type="audio/mpeg" />
        <source src="/musica.mpeg" type="audio/mpeg" />
        <source src="/musica.mpeg" type="video/mpeg" />
      </audio>

      {/* Floating Floral Petals in Background */}
      <FloatingFloralPetals />

      {/* ========================================================
          PANTALLA DE APERTURA / PRELOADER INTERACTIVO
      ======================================================== */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            onClick={handleOpenInvitation}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#18030c] cursor-pointer px-4 select-none"
          >
            {/* Ambient center aura */}
            <div className="absolute h-96 w-96 rounded-full bg-pink-500/20 blur-[110px]" />
            <div className="absolute h-72 w-72 rounded-full bg-rose-400/20 blur-[90px]" />

            <div className="relative z-10 text-center max-w-sm">
              {/* Monogram crest */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.85, 1, 0.85] }}
                transition={{
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-pink-300/50 bg-pink-950/70 shadow-2xl backdrop-blur-md"
              >
                <span className="titulo-script texto-dorado text-5xl select-none">
                  MPP
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6"
              >
                <p className="subtitulo-elegante text-pink-200 text-xs font-semibold tracking-[4px]">
                  Invitación de Graduación
                </p>
                <h3 className="titulo-script texto-dorado text-3xl mt-1">
                  Lic. Mayerly Perez Perez
                </h3>
                <div className="mt-3 mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
              </motion.div>

              {/* Glowing Open Invitation Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenInvitation();
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-3.5 text-sm font-bold text-white shadow-2xl hover:shadow-pink-500/50 border border-pink-200/80 cursor-pointer animate-pulse"
                >
                  <Sparkles className="h-4 w-4 text-pink-100" />
                  <span>Abrir Invitación 💌</span>
                  <Sparkles className="h-4 w-4 text-pink-100" />
                </motion.button>
                <p className="mt-3 text-[11px] text-pink-300/70 font-light">
                  Toca la pantalla o el botón para ingresar con música
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          DISCO GIRATORIO FLOTANTE (Música)
      ======================================================== */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
        <motion.button
          type="button"
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center rounded-full p-1 bg-[#18030c]/85 backdrop-blur-md border border-pink-300/50 shadow-2xl hover:border-pink-300/90 transition-all cursor-pointer focus:outline-none"
          title={isPlaying ? "Pausar música" : "Reproducir música"}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          <VintageVinyl isPlaying={isPlaying} />
        </motion.button>
      </div>

      {/* Background Decorative Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-500/15 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-rose-500/15 blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 h-[30rem] w-[30rem] rounded-full bg-pink-400/15 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-14">
        {/* ========================================================
            1. HERO / PORTADA
        ======================================================== */}
        <section className="text-center">
          {/* Floral Decorative Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-950/70 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-pink-200 backdrop-blur-md shadow-md"
          >
            <Flower2 className="h-4 w-4 text-pink-300" />
            <span>Celebración de Honor & Graduación</span>
            <Flower2 className="h-4 w-4 text-pink-300" />
          </motion.div>

          {/* Emotional Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6"
          >
            <span className="subtitulo-elegante text-pink-300 font-semibold block text-xs">
              Con inmensa alegría te invito a celebrar
            </span>
            <div className="sombra-oro my-2">
              <h2 className="titulo-script texto-dorado text-6xl sm:text-8xl leading-none">
                ¡Me gradué!
              </h2>
            </div>
            <div className="sombra-rosa mt-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <span className="texto-dorado">
                  Lic. Mayerly Perez Perez
                </span>
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-300/60" />
              <p className="subtitulo-elegante text-xs sm:text-sm text-pink-200 font-semibold">
                Licenciatura en Administración de Empresas
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-300/60" />
            </div>
          </motion.div>

          {/* Photo reveal con Esquinas Florales Ornamentadas */}
          <motion.div
            initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative mx-auto mt-10 w-72 h-80 sm:w-80 sm:h-96"
          >
            {/* Esquinas Florales que Florecen y Crecen */}
            <FloralCorner position="top-left" delay={0.4} />
            <FloralCorner position="bottom-right" delay={0.6} />

            {/* Elegant pastel pink & rose gold frame */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-pink-400/40 via-rose-300/30 to-amber-300/40 blur-md" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-pink-300/50 shadow-2xl bg-[#2b0816]">
              <Image
                src="/graduado.jpg"
                alt="Lic. Mayerly Perez Perez - Graduación"
                fill
                sizes="(max-width: 640px) 288px, 320px"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18030c]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center px-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-950/85 backdrop-blur-md border border-pink-300/40 px-4 py-1 text-xs font-semibold text-pink-100 shadow-md">
                  <GraduationCap className="h-3.5 w-3.5 text-pink-300" />
                  <span>Lic. Mayerly Perez Perez</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Date Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-pink-100"
          >
            <div className="flex items-center gap-2 rounded-xl bg-pink-950/70 border border-pink-700/40 px-4 py-2 backdrop-blur-md shadow-md">
              <Calendar className="h-4 w-4 text-pink-300" />
              <span className="texto-dorado font-bold">Viernes, 16 de Octubre</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-pink-950/70 border border-pink-700/40 px-4 py-2 backdrop-blur-md shadow-md">
              <Clock className="h-4 w-4 text-pink-300" />
              <span className="texto-dorado font-bold">19:00 Hrs</span>
            </div>
          </motion.div>
        </section>

        {/* ========================================================
            2. CUENTA REGRESIVA (Countdown con Glassmorphism)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="tarjeta-glass mt-12 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden"
        >
          {/* Esquinas Florales Ornamentales */}
          <FloralCorner position="top-right" delay={0.2} />
          <FloralCorner position="bottom-left" delay={0.3} />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent" />
          
          <div className="flex items-center justify-center gap-2 text-pink-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="h-4 w-4 text-pink-300" />
            <span className="subtitulo-elegante text-xs">Falta muy poco para celebrar</span>
            <Sparkles className="h-4 w-4 text-pink-300" />
          </div>

          <h3 className="subtitulo-elegante mt-2 text-xl sm:text-2xl font-bold text-white tracking-[4px]">
            Cuenta Regresiva
          </h3>

          {/* Time boxes */}
          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4 relative z-10">
            {[
              { label: "Días", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Minutos", value: timeLeft.minutes },
              { label: "Segundos", value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center rounded-2xl bg-[#1c030e]/60 p-3 sm:p-4 shadow-inner backdrop-blur-md"
              >
                <span suppressHydrationWarning className="texto-dorado text-2xl sm:text-4xl font-extrabold font-mono">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-pink-200 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Add to Calendar button */}
          <div className="mt-6 flex justify-center relative z-10">
            <motion.a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={pauseMusic}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-pink-950/60 px-5 py-2.5 text-xs font-semibold text-pink-100 hover:bg-pink-900/80 transition-colors shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5 text-pink-300" />
              <span>Agendar en Google Calendar</span>
            </motion.a>
          </div>
        </motion.section>

        {/* ========================================================
            3. BLOQUE DE AGRADECIMIENTO Y EMOCIÓN (Con Esquinas Florales)
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="tarjeta-glass mt-14 rounded-3xl p-7 sm:p-12 md:p-14 shadow-2xl relative"
        >
          {/* Esquinas Florales Ornamentadas que Florecen al bajar */}
          <FloralCorner position="top-left" delay={0.2} />
          <FloralCorner position="bottom-right" delay={0.3} />

          <div className="relative z-10 text-center">
            <div className="sombra-oro flex items-center justify-center gap-2">
              <Flower2 className="h-5 w-5 text-pink-300 shrink-0" />
              <span className="titulo-script texto-dorado text-3xl sm:text-5xl block my-1">
                Un sueño hecho realidad
              </span>
              <Flower2 className="h-5 w-5 text-pink-300 shrink-0" />
            </div>

            <h3 className="subtitulo-elegante text-lg sm:text-xl font-bold tracking-[3px] text-white mt-1">
              Mi Graduación Profesional
            </h3>

            <div className="subtitulo-elegante mt-2 inline-flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[2.5px] text-pink-200">
              <GraduationCap className="h-4 w-4 text-pink-300" />
              <span>Licenciada en Administración de Empresas</span>
              <GraduationCap className="h-4 w-4 text-pink-300" />
            </div>

            <div className="my-7 mx-auto h-[1px] w-28 bg-gradient-to-r from-transparent via-pink-300/40 to-transparent" />

            {/* Main letter body */}
            <div className="space-y-6 sm:space-y-7 text-sm sm:text-base leading-relaxed sm:leading-loose text-pink-100/90 text-justify">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Con el corazón desbordante de gratitud, alegría y orgullo, tengo el honor de invitarte a compartir conmigo la celebración de este gran logro académico y personal.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Cada paso de esta etapa universitaria ha sido una lección de perseverancia y entrega. Hoy miro hacia atrás con profunda emoción por el camino recorrido y hacia adelante con la convicción de nuevos horizontes.
              </motion.p>

              {/* Glassmorphism tarjetas de agradecimiento */}
              <div className="my-6 space-y-4">
                {/* 1. Dios */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="tarjeta-agradecimiento p-4 sm:p-5 text-left"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-pink-400/20 p-2.5 text-pink-300 shrink-0 mt-0.5">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-pink-100">
                      <strong className="texto-dorado font-semibold block sm:inline sm:mr-1">
                        Agradezco primeramente a Dios,
                      </strong>
                      por ser mi guía, por darme la vida, la sabiduría y la fortaleza en cada momento para alcanzar esta maravillosa meta.
                    </p>
                  </div>
                </motion.div>

                {/* 2. Madre */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="tarjeta-agradecimiento p-4 sm:p-5 text-left"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-rose-500/20 p-2.5 text-rose-300 shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 fill-rose-300/60" />
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-pink-100">
                      <strong className="texto-dorado font-semibold block sm:inline sm:mr-1">
                        A mi querida madre, Celia Perez Romero,
                      </strong>
                      por su amor infinito, su apoyo incondicional, sus consejos y por creer en mí en cada instante. Gracias por tus sacrificios y por ser mi más grande inspiración. ¡Este triunfo también te pertenece!
                    </p>
                  </div>
                </motion.div>

                {/* 3. Familia Perez Romero */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="tarjeta-agradecimiento p-4 sm:p-5 text-left"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-pink-400/20 p-2.5 text-pink-300 shrink-0 mt-0.5">
                      <Flower2 className="h-4 w-4" />
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-pink-100">
                      <strong className="texto-dorado font-semibold block sm:inline sm:mr-1">
                        A toda mi Familia Perez Romero,
                      </strong>
                      por su cariño sincero, su acompañamiento y por celebrar cada paso de este camino a mi lado.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-medium text-pink-50 pt-2 text-center"
              >
                Será un honor y una alegría inolvidable contar con tu presencia para brindar juntos por esta nueva etapa.
              </motion.p>
            </div>

            {/* Inspirational Quote / Lema Personal */}
            <div className="mt-10 pt-7 border-t border-pink-900/40 text-center relative">
              <Quote className="h-6 w-6 text-pink-300/40 mx-auto mb-2" />
              <p className="text-base sm:text-lg italic text-pink-200/95 font-serif font-medium leading-relaxed">
                &ldquo;Mi actitud me impulsa, mi esfuerzo me fortalece y mis sueños me guían.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <GraduationCap className="h-4 w-4 text-pink-300" />
                <span className="subtitulo-elegante text-xs sm:text-sm font-bold text-white tracking-[3px]">
                  Lic. Mayerly Perez Perez
                </span>
                <GraduationCap className="h-4 w-4 text-pink-300" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================
            4. DETALLES DE LA RECEPCIÓN SOCIAL & UBICACIÓN
        ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14"
        >
          <div className="text-center">
            <span className="subtitulo-elegante text-xs text-pink-300 font-semibold block">
              Lugar del Evento
            </span>
            <h3 className="subtitulo-elegante mt-1 text-xl sm:text-2xl font-bold text-white tracking-[4px]">
              Recepción Social
            </h3>
            <p className="mt-1 text-sm text-pink-200/80">
              Te espero para compartir una velada muy especial
            </p>
          </div>

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="tarjeta-glass rounded-3xl p-6 sm:p-8 relative shadow-2xl"
            >
              {/* Esquinas Florales Ornamentadas */}
              <FloralCorner position="top-right" delay={0.2} />
              <FloralCorner position="bottom-left" delay={0.3} />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-pink-500/20 p-4 text-pink-300 shrink-0">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-pink-900/60 px-3 py-0.5 text-[11px] font-semibold tracking-wide text-pink-200 uppercase mb-1">
                      Recepción de Honor
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white font-sans">
                      Domicilio Particular
                    </h4>
                    <p className="text-sm text-pink-200 font-medium mt-0.5">
                      B/ Oriental C/ Tajibo
                    </p>
                    <div className="mt-3 flex flex-col gap-1.5 text-xs text-pink-200/90">
                      <span className="flex items-center gap-2 font-semibold text-pink-100">
                        <Calendar className="h-4 w-4 text-pink-300" />
                        Fecha: Viernes 16 de Octubre
                      </span>
                      <span className="flex items-center gap-2 font-semibold text-pink-100">
                        <Clock className="h-4 w-4 text-pink-300" />
                        Hora: 19:00 Hrs
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-pink-300" />
                        Ubicación por GPS disponible
                      </span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={mapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={pauseMusic}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:shadow-pink-500/40 transition-all sm:self-center shrink-0 cursor-pointer"
                >
                  <Map className="h-4 w-4" />
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========================================================
            5. CONFIRMACIÓN (RSVP) & WHATSAPP
        ======================================================== */}
        <motion.section
          id="rsvp"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="tarjeta-glass mt-14 rounded-3xl p-6 sm:p-10 text-center shadow-2xl relative"
        >
          {/* Esquinas Florales Ornamentadas */}
          <FloralCorner position="top-left" delay={0.2} />
          <FloralCorner position="bottom-right" delay={0.3} />

          {/* Top highlight glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent" />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300 shadow-inner">
              <MessageCircle className="h-7 w-7 text-pink-300" />
            </div>

            <span className="subtitulo-elegante mt-3 block text-xs text-pink-300 font-semibold tracking-[3px]">
              Confirma tu presencia
            </span>
            <h3 className="subtitulo-elegante mt-1 text-xl sm:text-2xl font-bold text-white tracking-[4px]">
              Confirmación de Asistencia
            </h3>
            <p className="mt-2 text-sm text-pink-100/90 max-w-md mx-auto leading-relaxed">
              Tu compañía hará que esta noche sea aún más inolvidable. Por favor confirma tu asistencia directamente por WhatsApp.
            </p>

            <div className="mt-8 flex justify-center">
              {/* WhatsApp button */}
              <motion.button
                type="button"
                onClick={handleRsvpWithConfetti}
                disabled={isRedirecting}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-xl hover:shadow-pink-500/40 transition-all cursor-pointer disabled:opacity-85"
              >
                {isRedirecting ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin text-pink-200" />
                    <span>¡Abriendo WhatsApp...!</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5 fill-white text-pink-600" />
                    <span>Confirmar por WhatsApp</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Share Invitation & Footer */}
        <footer className="mt-16 text-center text-xs text-pink-300/60 pb-20">
          <div className="flex justify-center mb-6">
            <motion.button
              type="button"
              onClick={copyPageUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-pink-700/50 bg-pink-950/70 px-4 py-2 text-xs font-medium text-pink-200 hover:text-white transition-colors"
            >
              <Share2 className="h-3.5 w-3.5 text-pink-300" />
              <span>
                {copiedLink
                  ? "¡Enlace copiado al portapapeles!"
                  : "Compartir esta invitación"}
              </span>
            </motion.button>
          </div>

          <div className="sombra-oro my-1">
            <p className="titulo-script texto-dorado text-4xl sm:text-5xl">
              Lic. Mayerly Perez Perez
            </p>
          </div>
          <p className="subtitulo-elegante text-[11px] text-pink-200/90 mt-1 tracking-[2px]">
            Licenciada en Administración de Empresas • 2026
          </p>
          <p className="mt-1 text-[11px] text-pink-300/60">
            Recepción Social • B/ Oriental C/ Tajibo
          </p>
        </footer>
      </div>

      {/* ========================================================
          BOTÓN FLOTANTE PERMANENTE DE WHATSAPP
      ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          type="button"
          onClick={handleRsvpWithConfetti}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-2xl hover:bg-pink-400 transition-colors border-2 border-pink-200/80 focus:outline-none cursor-pointer"
          title="Confirmar Asistencia vía WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
          </span>
          <MessageCircle className="h-7 w-7 fill-white text-pink-600" />
        </motion.button>
      </motion.div>
    </div>
  );
}
