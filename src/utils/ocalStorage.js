// utils/localStorage.js

const STORAGE_KEY = "moodEntries";

/**
 * Get all mood entries from Local Storage
 * @returns {Array} Array of mood objects
 */
export const getMoods = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Save a new mood entry to Local Storage
 * @param {Object} mood - Mood object to save
 */
export const saveMood = (mood) => {
  const moods = getMoods();
  moods.push(mood);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(moods));
};

/**
 * Delete a mood entry by ID
 * @param {Number} id - ID of the mood entry to delete
 */
export const deleteMood = (id) => {
  const moods = getMoods();
  const updatedMoods = moods.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMoods));
};

/**
 * Update an existing mood entry by ID
 * @param {Number} id - ID of the mood entry to update
 * @param {Object} updatedMood - Updated mood object
 */
export const updateMood = (id, updatedMood) => {
  const moods = getMoods();
  const newMoods = moods.map((m) => (m.id === id ? { ...m, ...updatedMood } : m));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newMoods));
};

/**
 * Clear all mood entries (useful for reset/testing)
 */
export const clearMoods = () => {
  localStorage.removeItem(STORAGE_KEY);
};
