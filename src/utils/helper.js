// src/utils/helper.js

/**
 * Calculate consecutive mood tracking streak
 * @param {Array} moods - Array of mood objects [{ mood, date }, ...]
 * @returns {Number} - Number of consecutive days tracked
 */
export const calculateStreak = (moods = []) => {
    if (!moods.length) return 0;
  
    const sortedMoods = [...moods].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    let streak = 1;
    let currentDate = new Date(sortedMoods[0].date);
  
    for (let i = 1; i < sortedMoods.length; i++) {
      const nextDate = new Date(sortedMoods[i].date);
      const diffInDays = (currentDate - nextDate) / (1000 * 60 * 60 * 24);
      if (diffInDays === 1) {
        streak++;
        currentDate = nextDate;
      } else {
        break;
      }
    }
    return streak;
  };
  
  /**
   * Calculate the frequency of each mood
   * @param {Array} moods
   * @returns {Object} - { happy: 3, sad: 1, stressed: 2, ... }
   */
  export const calculateMoodFrequency = (moods = []) => {
    return moods.reduce((acc, curr) => {
      const key = curr.mood.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };
  
  /**
   * Get the most common mood
   * @param {Array} moods
   * @returns {String} - Most frequent mood
   */
  export const getMostCommonMood = (moods = []) => {
    if (!moods.length) return "No moods";
  
    const frequency = calculateMoodFrequency(moods);
    let mostCommon = "";
    let maxCount = 0;
  
    for (const [mood, count] of Object.entries(frequency)) {
      if (count > maxCount) {
        maxCount = count;
        mostCommon = mood;
      }
    }
    return mostCommon;
  };
  
  /**
   * Get moods for the current week
   * @param {Array} moods
   * @returns {Array}
   */
  export const getWeeklyMoods = (moods = []) => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    return moods.filter((entry) => new Date(entry.date) >= startOfWeek);
  };
  
  /**
   * Get moods for the current month
   * @param {Array} moods
   * @returns {Array}
   */
  export const getMonthlyMoods = (moods = []) => {
    const now = new Date();
    return moods.filter(
      (entry) =>
        new Date(entry.date).getMonth() === now.getMonth() &&
        new Date(entry.date).getFullYear() === now.getFullYear()
    );
  };
  
  /**
   * Get moods for the current year
   * @param {Array} moods
   * @returns {Array}
   */
  export const getYearlyMoods = (moods = []) => {
    const now = new Date();
    return moods.filter(
      (entry) => new Date(entry.date).getFullYear() === now.getFullYear()
    );
  };
  
  /**
   * Group moods by period: week, month, or year
   * @param {Array} moods
   * @param {String} period - 'week' | 'month' | 'year'
   * @returns {Array}
   */
  export const groupMoodsByPeriod = (moods = [], period = "week") => {
    const now = new Date();
    switch (period) {
      case "week": {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        return moods.filter((m) => new Date(m.date) >= startOfWeek);
      }
      case "month":
        return moods.filter(
          (m) =>
            new Date(m.date).getMonth() === now.getMonth() &&
            new Date(m.date).getFullYear() === now.getFullYear()
        );
      case "year":
        return moods.filter(
          (m) => new Date(m.date).getFullYear() === now.getFullYear()
        );
      default:
        return moods;
    }
  };
  