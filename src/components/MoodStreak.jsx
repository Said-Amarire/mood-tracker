import { calculateStreak } from "../utils/helper";

const MoodStreak = ({ moods }) => {
  const streak = calculateStreak(moods);

  return (
    <div className="text-center space-y-2">
      <h3 className="text-sm uppercase text-gray-400">Current Streak</h3>
      <p className="text-4xl font-bold">{streak} days</p>
      <p className="text-gray-400 text-sm">
        Keep tracking your mood daily!
      </p>
    </div>
  );
};

export default MoodStreak;
