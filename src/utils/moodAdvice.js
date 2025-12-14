// src/utils/moodAdvice.js

/**
 * generateMoodAdvice: Returns advice text for a given mood
 * @param {string} mood - the mood type (happy, sad, stressed, etc.)
 * @returns {string[]} - array of advice strings
 */
export const generateMoodAdvice = (mood) => {
    const adviceMap = {
      happy: [
        "Keep doing what makes you happy and share your positivity.",
        "Smile at someone today and spread good vibes."
      ],
      sad: [
        "It's okay to feel sad. Take time to rest and talk to someone you trust.",
        "Try journaling your thoughts to release emotions."
      ],
      stressed: [
        "Take deep breaths and short breaks throughout your day.",
        "Try going for a walk outside to relax."
      ],
      angry: [
        "Pause, breathe deeply, and give yourself space before reacting.",
        "Write down what triggers your anger to understand it better."
      ],
      neutral: [
        "A calm day is a good day. Reflect and stay balanced.",
        "Keep a routine to maintain stability in your mood."
      ]
    };
  
    return adviceMap[mood.toLowerCase()] || ["Take care of yourself and listen to your emotions."];
  };
  