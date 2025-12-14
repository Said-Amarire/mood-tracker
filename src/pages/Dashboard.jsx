import React, { useEffect, useState } from "react";
import MoodForm from "../components/MoodForm";
import MoodList from "../components/MoodList";
import MoodStreak from "../components/MoodStreak";
import MoodTipsModal from "../components/MoodTipsModal";
import { getMoods } from "../utils/localStorage";
import { generateMoodAdvice } from "../api/aiAnalysis";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [dailyTips, setDailyTips] = useState([]);

  useEffect(() => {
    generateDailyTips();
  }, []);

  const handleMoodAdded = () => {
    setRefresh((prev) => !prev);
    generateDailyTips();
  };

  const generateDailyTips = () => {
    const moods = getMoods();
    if (!moods || moods.length === 0) return;

    const latestMood = moods[moods.length - 1];
    const tips = generateMoodAdvice(latestMood.mood);
    setDailyTips(tips);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Mood Tracker Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Track your emotions, understand your patterns, and improve your well-being.
          </p>
        </header>

        <MoodForm onMoodAdded={handleMoodAdded} />
        <MoodStreak />
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowTips(true)}
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
          >
            View Daily Tips
          </button>
        </div>
        <MoodList refresh={refresh} />
        <MoodTipsModal
          isOpen={showTips}
          onClose={() => setShowTips(false)}
          tips={dailyTips}
        />
      </div>
    </div>
  );
};

export default Dashboard;
