// src/api/aiAnalysis.js

/**
 * generateMoodAdvice
 * Returns advice/tips based on the current mood.
 * Input: mood (string)
 * Output: array of strings (tips)
 */
export const generateMoodAdvice = (mood) => {
    const adviceMap = {
      happy: [
        "Keep smiling!",
        "Do something creative today.",
        "Celebrate small wins."
      ],
      sad: [
        "Take a short walk.",
        "Talk to a friend or loved one.",
        "Write down your thoughts to reflect."
      ],
      stressed: [
        "Take a short break.",
        "Try breathing exercises.",
        "Prioritize your tasks and relax."
      ],
      tired: [
        "Take a rest or short nap.",
        "Drink water to rehydrate.",
        "Go for a light walk to refresh yourself."
      ],
      excited: [
        "Channel your energy creatively.",
        "Share your excitement with others.",
        "Plan something fun to do today."
      ],
      neutral: [
        "Maintain your routine.",
        "Reflect on your day.",
        "Do small acts of self-care."
      ]
    };
  
    // Default tip if mood is not recognized
    return adviceMap[mood.toLowerCase()] || ["Stay positive and keep tracking!"];
  };
  
  /**
   * analyzeMoodPatterns
   * Returns insights/summary based on user's mood entries.
   * Input: moods (array of mood objects: {id, date, mood, note})
   * Output: array of strings (analysis)
   */
  export const analyzeMoodPatterns = (moods) => {
    if (!moods || moods.length === 0) return ["No data to analyze."];
  
    // Count frequency of each mood
    const counts = moods.reduce((acc, m) => {
      const moodKey = m.mood.toLowerCase();
      acc[moodKey] = (acc[moodKey] || 0) + 1;
      return acc;
    }, {});
  
    // Find most common mood
    const mostCommonMood = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  
    // Calculate mood distribution summary
    const summary = Object.entries(counts).map(
      ([mood, count]) => `${mood.charAt(0).toUpperCase() + mood.slice(1)}: ${count} times`
    );
  
    return [
      `Most frequent mood: ${mostCommonMood.charAt(0).toUpperCase() + mostCommonMood.slice(1)}`,
      `Total mood entries: ${moods.length}`,
      ...summary
    ];
  };
  