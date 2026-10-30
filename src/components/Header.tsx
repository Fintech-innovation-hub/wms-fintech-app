import { NavLink } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      {/* Логотип */}
      <NavLink 
        to="/" 
        className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity"
      >
        VMS
      </NavLink>

      {/* Навигация */}
      <nav className="flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-base font-medium transition-colors relative pb-1 ${
              isActive
                ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            `text-base font-medium transition-colors relative pb-1 ${
              isActive
                ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;