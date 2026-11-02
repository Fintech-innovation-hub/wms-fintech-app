import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";

function getStoredBasketCount(): number {
  try {
    const stored = localStorage.getItem("basket");
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed.length;
      }
    }
    return 0;
  } catch {
    return 0;
  }
}

function Header() {
  const [basketCount, setBasketCount] = useState<number>(getStoredBasketCount);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleUpdate = () => {
      setBasketCount(getStoredBasketCount());
    };

    window.addEventListener("storage", handleUpdate);
    window.addEventListener("basket-updated", handleUpdate);

    return () => {
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("basket-updated", handleUpdate);
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
      isActive
        ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/35 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                WMS <span className="text-indigo-600">Fintech</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Store & Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Bosh sahifa
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Biz haqimizda
            </NavLink>
            <NavLink to="/basket" className={navLinkClass}>
              Savat
              {basketCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full animate-pulse">
                  {basketCount}
                </span>
              )}
            </NavLink>
            <NavLink to="/userprofile" className={navLinkClass}>
              Profil
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/basket"
              className="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-all"
              title="Savat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {basketCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[11px] font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-xs">
                  {basketCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Kirish
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/basket"
              onClick={closeMenu}
              className="relative p-2 text-slate-600 hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {basketCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-[10px] font-bold text-white bg-rose-500 rounded-full">
                  {basketCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-2">
            <NavLink to="/" end onClick={closeMenu} className={mobileNavLinkClass}>
              <span>Bosh sahifa</span>
              <span>→</span>
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={mobileNavLinkClass}>
              <span>Biz haqimizda</span>
              <span>→</span>
            </NavLink>
            <NavLink to="/basket" onClick={closeMenu} className={mobileNavLinkClass}>
              <span className="flex items-center gap-2">
                Savat
                {basketCount > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                    {basketCount}
                  </span>
                )}
              </span>
              <span>→</span>
            </NavLink>
            <NavLink to="/userprofile" onClick={closeMenu} className={mobileNavLinkClass}>
              <span>Shaxsiy profil</span>
              <span>→</span>
            </NavLink>
            <NavLink to="/login" onClick={closeMenu} className={mobileNavLinkClass}>
              <span>Tizimga kirish</span>
              <span>→</span>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
