function Header() {
  return (
    <header className="header bg-blue-500 px-16 py-5 flex items-center justify-center gap-6">
      <NavLink to="/" className="header__logo">
        VMS
      </NavLink>

      <nav className="header__nav flex items-center gap-5">
        <NavLink to="/" end className="header__link">
          Home
        </NavLink>
        <NavLink to="/login" end className="header__link">
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
