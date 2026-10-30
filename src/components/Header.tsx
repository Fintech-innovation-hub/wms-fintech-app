import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20 ring-1 ring-blue-500/10 transition-transform duration-200 group-hover:scale-105">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              VMS
            </span>
            <span className="hidden rounded-full border border-blue-200/60 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-700 sm:inline-block">
              Fintech
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-slate-100 text-blue-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>
          <a
            href="#features"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-900"
          >
            Features
          </a>
          <a
            href="#solutions"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-900"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-900"
          >
            About
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <button
            type="button"
            className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100/70 hover:text-slate-900"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/25 transition-all duration-150 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/35 active:scale-98"
          >
            <span>Get Started</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="cursor-pointer inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200/80 bg-white/95 px-4 pt-2 pb-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-slate-100 text-blue-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Home
            </NavLink>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Solutions
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              About
            </a>
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
