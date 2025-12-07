const moodColors = {
  Happy: "bg-yellow-300",
  Sad: "bg-blue-300",
  Angry: "bg-red-300",
  Excited: "bg-green-300",
};

export default function MoodList({ moods, removeMood }) {
  return (
    <ul className="w-full max-w-md flex flex-col gap-2">
      {moods.map((item, index) => (
        <li
          key={index}
          className={`p-3 rounded shadow flex justify-between items-center ${moodColors[item.type] || "bg-gray-200"}`}
        >
          <div>
            <strong>{item.type}:</strong> {item.mood}
            <div className="text-xs text-gray-700">{item.timestamp}</div>
          </div>
          <button
            onClick={() => removeMood(index)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
