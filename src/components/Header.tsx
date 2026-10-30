import { NavLink } from "react-router";

function Header() {
  // Функция для динамических классов ссылок (подсветка активной страницы)
  const getLinkClass = ({ isActive }) =>
    `text-base font-medium transition-colors duration-200 ${isActive
      ? "text-white font-semibold border-b-2 border-white pb-0.5"
      : "text-sky-100 hover:text-white"
    }`;

  return (
    <header className="header bg-blue-900 px-16 py-5 flex items-center justify-center gap-6 shadow-md">
      <NavLink
        to="/"
        className="header__logo text-2xl font-bold text-white tracking-wider hover:opacity-85 transition-opacity"
      >
        VMS
      </NavLink>

      <nav className="header__nav flex items-center gap-5">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/profile-abduqodir" end className={getLinkClass}>
          Abduqodir
        </NavLink>
        <NavLink to="/login" end className={getLinkClass}>
          Login
        </NavLink>
        <NavLink to="/basket" end className={getLinkClass}>
          Basket
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
