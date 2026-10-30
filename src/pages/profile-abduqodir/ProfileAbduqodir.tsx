import { useState } from "react";
import { Link } from "react-router";

export default function ProfileAbduqodir() {
  const [warpActive, setWarpActive] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background ambient stars and cosmic gradient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Profile Badge */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/80 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-300">
            Pilot · Abduqodir
          </span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs text-slate-400 font-mono">X-01 AERO-CRUISER</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-3">
          Orbital Flight Deck
        </h1>
        <p className="text-sm sm:text-base text-slate-400 text-center max-w-lg mb-8 font-light">
          Флагманский космический челнок нового поколения. Разработан для межпланетных скоростей и автономных миссий.
        </p>

        {/* Spaceship Card */}
        <div className="w-full bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl pointer-events-none" />

          {/* Spaceship Visual */}
          <div className="relative flex justify-center items-center py-8">
            {/* Thruster exhaust glow */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 rounded-full blur-2xl pointer-events-none ${
                warpActive
                  ? "w-80 h-36 bg-cyan-400/30 scale-125"
                  : "w-56 h-24 bg-blue-500/20"
              }`}
            />

            {/* Custom SVG Modern Spaceship */}
            <svg
              className={`w-72 h-44 sm:w-96 sm:h-56 transition-transform duration-700 ease-out drop-shadow-[0_15px_30px_rgba(6,182,212,0.25)] ${
                warpActive ? "scale-105 -translate-y-2" : "hover:-translate-y-1"
              }`}
              viewBox="0 0 400 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="fuselageGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="thrusterFire" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Engine Exhaust Flames (Left) */}
              <g className="transition-opacity duration-300">
                <path
                  d={warpActive ? "M60 110 L5 98 L5 122 Z" : "M60 110 L25 102 L25 118 Z"}
                  fill="url(#thrusterFire)"
                  className="animate-pulse"
                />
                <circle cx="62" cy="110" r={warpActive ? "8" : "5"} fill="#67e8f9" filter="blur(2px)" />
              </g>

              {/* Main Rear Wings */}
              <path
                d="M120 110 L70 35 L160 85 L260 102 Z"
                fill="url(#wingGrad)"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <path
                d="M120 110 L70 185 L160 135 L260 118 Z"
                fill="url(#wingGrad)"
                stroke="#475569"
                strokeWidth="1.5"
              />

              {/* Wing Edge Neon Accents */}
              <path
                d="M72 38 L160 85"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M72 182 L160 135"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-80"
              />

              {/* Sleek Central Fuselage / Body */}
              <path
                d="M60 110 L110 82 L280 94 L375 110 L280 126 L110 138 Z"
                fill="url(#fuselageGrad)"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* Hull Armor Plates Details */}
              <path d="M140 92 L240 100 L240 120 L140 128" stroke="#334155" strokeWidth="1.2" />
              <path d="M200 97 L260 103" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M200 123 L260 117" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />

              {/* High-Tech Cockpit Canopy */}
              <path
                d="M270 104 L335 110 L270 116 L250 110 Z"
                fill="url(#canopyGrad)"
                stroke="#67e8f9"
                strokeWidth="1.5"
              />

              {/* Nose Radar Tip */}
              <circle cx="375" cy="110" r="2.5" fill="#38bdf8" />
            </svg>
          </div>

          {/* Interactive Control & Status Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500 block">WARP DRIVE</span>
                <span className={warpActive ? "text-cyan-400 font-semibold" : "text-slate-300"}>
                  {warpActive ? "ACTIVE (WARP 9.2)" : "STANDBY (SUB-LIGHT)"}
                </span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block">INTEGRITY</span>
                <span className="text-emerald-400 font-semibold">100% NOMINAL</span>
              </div>
              <div className="h-6 w-px bg-slate-800 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="text-slate-500 block">THRUST VECTOR</span>
                <span className="text-slate-300">AUTO-STABILIZED</span>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setWarpActive(!warpActive)}
              type="button"
              className={`px-5 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                warpActive
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/50"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>{warpActive ? "Деактивировать Варп" : "Активировать Ускорение"}</span>
            </button>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <div className="text-xs text-slate-500 font-mono mb-1">МАКС. СКОРОСТЬ</div>
            <div className="text-base sm:text-lg font-bold text-slate-200 font-mono">14,800 км/с</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <div className="text-xs text-slate-500 font-mono mb-1">ЯДРО ПИТАНИЯ</div>
            <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">FUSION MK-IV</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <div className="text-xs text-slate-500 font-mono mb-1">ЩИТЫ ЗАЩИТЫ</div>
            <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">PLASMA 99.4%</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <div className="text-xs text-slate-500 font-mono mb-1">ЛОКАЦИЯ</div>
            <div className="text-base sm:text-lg font-bold text-slate-200 font-mono">ORBIT GEO-7</div>
          </div>
        </div>

        {/* Navigation back */}
        <div className="mt-8">
          <Link
            to="/"
            className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
