import { useEffect, useState } from "react";
import { getMoods } from "../utils/localStorage";
import { calculateStreak } from "../utils/helper";

const MoodStreak = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const moods = getMoods();
    setStreak(calculateStreak(moods));
  }, []);

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6 text-center">
      <h3 className="text-lg font-semibold text-indigo-700">
        Current Streak
      </h3>
      <p className="text-3xl font-bold text-indigo-600 mt-2">
        {streak} days
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Keep tracking your mood daily!
      </p>
    </div>
  );
};

export default MoodStreak;
