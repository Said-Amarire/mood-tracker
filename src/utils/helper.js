// src/utils/helper.js

export const normalizeDate = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export const filterMoodsByRange = (moods, from, to) => {
  if (!from || !to) return moods;

  const fromDate = normalizeDate(from);
  const toDate = normalizeDate(to);

  return moods.filter((m) => {
    const moodDate = normalizeDate(m.date);
    return moodDate >= fromDate && moodDate <= toDate;
  });
};

export const groupByMood = (moods = []) => {
  return moods.reduce((acc, curr) => {
    acc[curr.mood] = (acc[curr.mood] || 0) + 1;
    return acc;
  }, {});
};

export const getMostCommonMood = (moods = []) => {
  if (!moods.length) return null;

  const grouped = groupByMood(moods);
  return Object.entries(grouped).sort((a, b) => b[1] - a[1])[0][0];
};

export const calculateStreak = (moods = []) => {
  if (!moods.length) return 0;

  const sorted = [...moods].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let streak = 1;
  let current = normalizeDate(sorted[0].date);

  for (let i = 1; i < sorted.length; i++) {
    const next = normalizeDate(sorted[i].date);
    const diff = (current - next) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
      current = next;
    } else {
      break;
    }
  }

  return streak;
};
