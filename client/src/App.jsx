
import { NavLink, Route, Routes } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="layout">
      <header className="navbar">
        <h2>TaskFlow</h2>

        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 — Page not found</h2>} />
        </Routes>
      </main>
    </div>
  );
}