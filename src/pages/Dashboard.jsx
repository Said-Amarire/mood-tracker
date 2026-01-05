import { useEffect, useState } from "react";
import MoodForm from "../components/MoodForm";
import MoodList from "../components/MoodList";
import MoodStreak from "../components/MoodStreak";
import MoodTipsModal from "../components/MoodTipsModal";
import { getMoods } from "../utils/localStorage";

const Dashboard = () => {
  const [moods, setMoods] = useState([]);
  const [showTips, setShowTips] = useState(false);

  const dailyTips = [
    "Take a 5-minute meditation break.",
    "Write down 3 things you're grateful for.",
    "Go for a short walk to clear your mind.",
    "Drink a glass of water and breathe deeply.",
    "Listen to your favorite song to lift your mood."
  ];

  useEffect(() => {
    setMoods(getMoods());
  }, []);

  const handleMoodAdded = (newMood) => {
    setMoods(prev => [newMood, ...prev]);
  };

  return (
    <div className="app-container py-10 space-y-10 fade-in">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Mood Tracker Dashboard</h1>
        <p className="text-gray-400 max-w-2xl">
          Track your emotions daily, understand patterns, and improve your
          well-being through smart insights.
        </p>
      </header>

      {/* Top Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card card-hover text-center">
          <h3 className="text-sm uppercase text-gray-400">Total Entries</h3>
          <p className="text-4xl font-bold mt-2">{moods.length}</p>
        </div>

        <div className="card card-hover">
          <MoodStreak moods={moods} />
        </div>

        <div className="card card-hover text-center">
          <h3 className="text-sm uppercase text-gray-400">Smart Insights</h3>
          <p className="text-gray-400 mt-2">Personalized advice powered by AI</p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setShowTips(true)}
          >
            View Daily Tips
          </button>
        </div>
      </section>

      {/* Mood Form */}
      <MoodForm onMoodAdded={handleMoodAdded} />

      {/* Recent Moods */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recent Moods</h2>
          <span className="text-gray-400 text-sm">Latest entries</span>
        </div>
        <MoodList moods={moods} />
      </section>

      {/* Modal */}
      <MoodTipsModal
        isOpen={showTips}
        onClose={() => setShowTips(false)}
        tips={dailyTips}
      />
    </div>
  );
};

export default Dashboard;
