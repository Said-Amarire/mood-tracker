// src/pages/Statistics.jsx
import { useState, useEffect } from "react";
import MoodStats from "../components/MoodStats";
import { getMoods } from "../utils/localStorage";
import { groupMoodsByPeriod, getMostCommonMood } from "../utils/helper";

const Statistics = () => {
  const [period, setPeriod] = useState("week");
  const [filteredMoods, setFilteredMoods] = useState([]);
  const [commonMood, setCommonMood] = useState(null);

  useEffect(() => {
    const moods = getMoods();
    const data = groupMoodsByPeriod(moods, period);
    setFilteredMoods(data);
    setCommonMood(getMostCommonMood(data));
  }, [period]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Mood Statistics
          </h1>
          <p className="text-gray-600 mt-2">
            Analyze your emotional patterns over time.
          </p>
        </header>

        {/* Period Selector */}
        <div className="flex justify-center gap-3 mb-6">
          {["week", "month", "year"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                period === p ? "bg-indigo-500 text-white" : "bg-white border"
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        {/* Summary */}
        {commonMood && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center mb-6">
            <p className="text-indigo-700 font-semibold">
              Most common mood: {commonMood}
            </p>
          </div>
        )}

        {/* Charts */}
        <MoodStats moods={filteredMoods} />
      </div>
    </div>
  );
};

export default Statistics;
