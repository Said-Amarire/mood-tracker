import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-md font-medium transition-colors hover:bg-indigo-100";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">
          Mood Tracker
        </h1>

        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/statistics" className={linkClass}>Statistics</NavLink>
          <NavLink to="/calendar" className={linkClass}>Calendar</NavLink>
          <NavLink to="/download" className={linkClass}>Download</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
