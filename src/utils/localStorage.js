// utils/localStorage.js

const STORAGE_KEY = "moodEntries";

/**
 * Return all moods sorted by date ascending
 */
export const getMoods = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  const moods = JSON.parse(data);
  return moods.sort((a, b) => new Date(a.date) - new Date(b.date));
};

/**
 * Save mood, ensure only one entry per day
 */
export const saveMood = (mood) => {
  const moods = getMoods();
  const today = new Date(mood.date).toISOString().split("T")[0];

  const existingIndex = moods.findIndex(
    (m) => new Date(m.date).toISOString().split("T")[0] === today
  );

  if (existingIndex !== -1) {
    moods[existingIndex] = { ...moods[existingIndex], ...mood };
  } else {
    moods.push(mood);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(moods));
};

/**
 * Delete mood
 */
export const deleteMood = (id) => {
  const moods = getMoods();
  const updated = moods.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

/**
 * Update mood
 */
export const updateMood = (id, updatedMood) => {
  const moods = getMoods();
  const updated = moods.map((m) => (m.id === id ? { ...m, ...updatedMood } : m));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

/**
 * Clear all moods
 */
export const clearMoods = () => {
  localStorage.removeItem(STORAGE_KEY);
};
