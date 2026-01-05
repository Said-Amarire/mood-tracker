import { useState } from "react";
import { getMoods } from "../utils/localStorage";

const MoodInsights = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const analyzeMoods = () => {
    setLoading(true);
    const moods = getMoods();
    if (!moods || moods.length === 0) {
      setTimeout(() => {
        setAnalysis({ summary: null, tips: ["No moods recorded yet."] });
        setLoading(false);
      }, 300);
      return;
    }

    setTimeout(() => {
      const total = moods.length;

      const counts = moods.reduce((acc, m) => {
        acc[m.mood] = (acc[m.mood] || 0) + 1;
        return acc;
      }, {});

      const mainMood = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

      let streaks = {};
      let lastMood = null;
      let streak = 0;
      moods.forEach((m, i) => {
        if (m.mood === lastMood) {
          streak++;
        } else {
          streak = 1;
          lastMood = m.mood;
        }
        streaks[m.mood] = Math.max(streaks[m.mood] || 0, streak);
      });

      let summary = `Mood Analysis Report\n\nTotal entries: ${total}\n\nMood Counts:\n`;
      for (let [mood, count] of Object.entries(counts)) {
        summary += `• ${mood}: ${count} (${((count / total) * 100).toFixed(0)}%)\n`;
      }

      summary += `\nLongest Streaks:\n`;
      for (let [mood, s] of Object.entries(streaks)) {
        summary += `• ${mood}: ${s} day(s)\n`;
      }

      summary += `\nMain Mood: ${mainMood}\n`;

      let tips = [];
      if (mainMood === "happy") tips.push("You are happy most of the time! Keep the positivity alive!");
      if (mainMood === "sad") tips.push("You have been feeling sad. Consider talking to someone or relaxing.");
      if (mainMood === "stressed") tips.push("Stressed? Take breaks and practice mindfulness daily.");
      if (mainMood === "calm") tips.push("You are calm. Maintain this peaceful routine.");
      if (!tips.length) tips.push("Keep tracking your moods to understand patterns better.");

      setAnalysis({ summary, tips });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="app-container py-10 space-y-6 fade-in">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">AI Mood Insights</h1>
        <p className="text-gray-400">Intelligent mood analysis and suggestions based on your entries.</p>
      </header>

      <button
        onClick={analyzeMoods}
        disabled={loading}
        className="btn btn-primary"
      >
        {loading ? "Analyzing..." : "Generate AI Insights"}
      </button>

      {analysis && (
        <div className="space-y-4 mt-6">
          {analysis.summary && (
            <div className="card p-4 whitespace-pre-line">{analysis.summary}</div>
          )}
          {analysis.tips && (
            <div className="card p-4">
              <h3 className="font-semibold text-lg mb-2">Tips for you:</h3>
              <ul className="list-disc list-inside">
                {analysis.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MoodInsights;
