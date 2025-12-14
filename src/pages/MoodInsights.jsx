import { useEffect, useState } from "react";
import { getMoods } from "../utils/localStorage";
import { analyzeMoodPatterns } from "../api/aiAnalysis";
import MoodAdvice from "../components/MoodAdvice";

const MoodInsights = () => {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const moods = getMoods();
    const result = analyzeMoodPatterns(moods);
    setAnalysis(result);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Mood Insights
          </h1>
          <p className="text-gray-600 mt-2">
            Personalized analysis based on your mood history.
          </p>
        </header>

        {analysis && (
          <MoodAdvice
            summary={analysis.summary}
            advice={analysis.advice}
          />
        )}
      </div>
    </div>
  );
};

export default MoodInsights;
