import { NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        VMS
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/" end className="header__link">
          Home
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
