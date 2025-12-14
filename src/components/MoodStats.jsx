import { calculateMoodFrequency } from "../utils/helper";
import { moodOptions } from "../utils/moodData";

const MoodStats = ({ moods }) => {
  if (!moods || moods.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No data available for this period.
      </p>
    );
  }

  const frequency = calculateMoodFrequency(moods);
  const maxValue = Math.max(...Object.values(frequency));

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Mood Distribution
      </h2>

      <div className="space-y-4">
        {moodOptions.map((option) => {
          const value = frequency[option.name] || 0;
          const percentage = (value / maxValue) * 100;

          return (
            <div key={option.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{option.icon} {option.name}</span>
                <span>{value}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-indigo-500 transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodStats;
