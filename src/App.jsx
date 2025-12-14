import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import CalendarView from "./pages/CalendarView";
import DownloadPage from "./pages/DownloadPage";
import MoodInsights from "./pages/MoodInsights";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/insights" element={<MoodInsights />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
