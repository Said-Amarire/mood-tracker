const MoodStats = ({ moods }) => {
  if (!moods.length) {
    return (
      <div className="card text-center text-gray-400">
        No mood data available for this period.
      </div>
    );
  }

  const counts = moods.reduce((acc, m) => {
    acc[m.mood] = (acc[m.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(counts).map(([mood, count]) => (
        <div key={mood} className="card text-center">
          <h4 className="capitalize text-lg font-semibold">{mood}</h4>
          <p className="text-3xl font-bold mt-2">{count}</p>
        </div>
      ))}
    </div>
  );
};

export default MoodStats;
