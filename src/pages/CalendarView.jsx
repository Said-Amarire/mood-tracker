import { useEffect, useState } from "react";
import { getMoods } from "../utils/localStorage";

// Colors for each mood
const moodColors = {
  happy: "bg-green-100 text-green-800 border-green-300",
  sad: "bg-blue-100 text-blue-800 border-blue-300",
  angry: "bg-red-100 text-red-800 border-red-300",
  calm: "bg-indigo-100 text-indigo-800 border-indigo-300",
  stressed: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

const CalendarView = () => {
  const [groupedMoods, setGroupedMoods] = useState({});

  useEffect(() => {
    const moods = getMoods();
    setGroupedMoods(groupByDate(moods));
  }, []);

  const groupByDate = (moods) =>
    moods.reduce((acc, mood) => {
      const date = new Date(mood.date).toDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(mood);
      return acc;
    }, {});

  const dates = Object.keys(groupedMoods).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="app-container py-10">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-50">Mood Calendar</h1>
        <p className="text-gray-400 mt-2">
          Track and review your daily mood history in a clear layout
        </p>
      </header>

      {dates.length === 0 ? (
        <p className="text-center text-gray-400">No mood entries yet.</p>
      ) : (
        <div className="space-y-6">
          {dates.map((date) => (
            <div
              key={date}
              className="card border-gray-700"
            >
              <h2 className="text-indigo-400 font-semibold text-lg mb-4">
                {date}
              </h2>

              <div className="grid gap-3">
                {groupedMoods[date].map((mood) => (
                  <div
                    key={mood.id}
                    className={`flex items-center justify-between border ${
                      moodColors[mood.mood] || "bg-gray-800 text-gray-100 border-gray-600"
                    } rounded-xl px-4 py-2 transition transform hover:scale-105`}
                  >
                    <span className="capitalize font-medium flex items-center gap-2">
                      <span className="text-xl">{mood.icon || "🙂"}</span>
                      {mood.mood}
                    </span>
                    {mood.note && (
                      <span className="text-sm text-gray-300 italic">{mood.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
