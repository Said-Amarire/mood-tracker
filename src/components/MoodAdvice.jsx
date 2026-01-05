// src/components/MoodAdvice.jsx
import React from "react";

const MoodAdvice = ({ moods }) => {
  if (!moods || moods.length === 0) return null;

  const latestMood = moods[0].mood;

  // Calculate streak
  const streak = moods.reduce((count, m, i) => {
    if (i === 0) return 1;
    const prev = new Date(moods[i - 1].date);
    const curr = new Date(m.date);
    const diff = (prev - curr) / (1000 * 60 * 60 * 24);
    return diff === 1 ? count + 1 : count;
  }, 1);

  // Calculate average gap
  const gapDays =
    moods.length > 1
      ? (new Date(moods[0].date) - new Date(moods[moods.length - 1].date)) / (1000 * 60 * 60 * 24) / (moods.length - 1)
      : 1;

  const moodTips = {
    happy: [
      "Keep up your current activities and share your positive energy with others.",
      "Maintain routines that make you feel joyful and fulfilled."
    ],
    calm: [
      "Enjoy the calm and try dedicating some time to meditation or quiet reading.",
      "Listening to soft music can enhance your serenity."
    ],
    neutral: [
      "Try a new activity today to elevate your mood.",
      "Write down your thoughts to understand your feelings better."
    ],
    stressed: [
      "Take a short break and practice deep breathing exercises.",
      "Go for a walk or engage in light physical activity to relieve stress."
    ],
    sad: [
      "Talk to a trusted friend or write down your feelings.",
      "Engage in a small enjoyable activity like a hobby or watching a movie."
    ],
    angry: [
      "Use energy-releasing exercises like jogging or quick physical activity.",
      "Avoid making major decisions while feeling this way."
    ]
  };

  // Additional tips based on streak or gaps
  let additionalTips = [];
  if (streak >= 5) additionalTips.push("Great commitment! Keep tracking daily for best results.");
  if (gapDays > 2) additionalTips.push("Try recording your mood daily for more accurate insights.");

  const tips = [...(moodTips[latestMood] || []), ...additionalTips];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">AI Mood Insights</h2>
      <p className="text-indigo-600 font-medium mb-4">
        Latest mood analysis: <span className="capitalize">{latestMood}</span>
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoodAdvice;
