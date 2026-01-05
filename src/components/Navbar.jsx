import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Statistics", path: "/statistics" },
    { name: "Download", path: "/download" },
    { name: "Mood Insights", path: "/insights" },
    { name: "Calendar", path: "/calendar" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="navbar sticky top-0 z-50 shadow-md">
      <div className="app-container flex justify-between items-center py-3 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MoodTracker Logo"
            className="h-12 md:h-14 w-auto"
            style={{ maxHeight: "56px" }}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item text-lg md:text-xl ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {isOpen ? (
              <span className="close-icon text-2xl">&#10005;</span>
            ) : (
              <span className="hamburger-icon text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-nav md:hidden flex flex-col bg-indigo-700 px-4 py-4 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-item text-lg ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
