import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Функция для динамических классов ссылок (подсветка активной страницы)
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm md:text-base font-medium transition-colors duration-200 ${
      isActive
        ? "text-white font-semibold border-b-2 border-white pb-0.5"
        : "text-sky-100 hover:text-white"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header bg-blue-900 px-6 md:px-16 py-4 flex flex-wrap items-center justify-between gap-4 shadow-md">
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className="header__logo text-2xl font-bold text-white tracking-wider hover:opacity-85 transition-opacity"
        >
          VMS
        </NavLink>

        <nav className="header__nav flex items-center gap-4 md:gap-6 flex-wrap">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/profile-abduqodir" end className={getLinkClass}>
            Abduqodir
          </NavLink>
          <NavLink to="/basket" end className={getLinkClass}>
            Basket
          </NavLink>
          <NavLink to="/userprofile" end className={getLinkClass}>
            UserProfile
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated && user ? (
          <div className="flex items-center gap-3">
            <NavLink
              to="/userprofile"
              className="flex items-center gap-2 bg-blue-800/80 hover:bg-blue-800 px-3 py-1.5 rounded-full text-white text-xs md:text-sm transition border border-blue-700"
            >
              <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xs">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="font-medium max-w-[120px] truncate">{user.name}</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-xs bg-red-600/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition"
              title="Chiqish"
            >
              Chiqish
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition shadow-sm"
          >
            Kirish (Login)
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
