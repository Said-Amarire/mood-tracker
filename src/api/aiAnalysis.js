export const analyzeMoodPatterns = (moods) => {
    if (!moods || moods.length === 0) {
      return {
        summary: "No mood data available yet.",
        advice: []
      };
    }
  
    const frequency = moods.reduce((acc, mood) => {
      acc[mood.mood] = (acc[mood.mood] || 0) + 1;
      return acc;
    }, {});
  
    const total = moods.length;
    const dominantMood = Object.keys(frequency).reduce((a, b) =>
      frequency[a] > frequency[b] ? a : b
    );
  
    let advice = [];
  
    if (dominantMood === "Stressed") {
      advice.push(
        "You seem stressed recently. Try short breaks and breathing exercises.",
        "Consider reducing screen time before sleep."
      );
    }
  
    if (dominantMood === "Sad") {
      advice.push(
        "It may help to talk with someone you trust.",
        "Light physical activity can improve mood."
      );
    }
  
    if (dominantMood === "Happy") {
      advice.push(
        "You are doing great! Keep maintaining positive habits.",
        "Write down what made you happy to repeat it."
      );
    }
  
    if (dominantMood === "Tired") {
      advice.push(
        "Try improving your sleep routine.",
        "Avoid caffeine late in the day."
      );
    }
  
    if (advice.length === 0) {
      advice.push("Keep tracking your mood to receive more insights.");
    }
  
    return {
      summary: `Your most frequent mood recently is ${dominantMood}.`,
      advice
    };
  };
  