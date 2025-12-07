import { useState } from 'react';

const moodTypes = [
  { label: "Happy", color: "bg-yellow-300" },
  { label: "Sad", color: "bg-blue-300" },
  { label: "Angry", color: "bg-red-300" },
  { label: "Excited", color: "bg-green-300" },
];

export default function MoodForm({ addMood }) {
  const [moodText, setMoodText] = useState('');
  const [moodType, setMoodType] = useState(moodTypes[0].label);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!moodText.trim()) return;
    addMood(moodText.trim(), moodType);
    setMoodText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4 w-full max-w-md">
      <input
        type="text"
        value={moodText}
        onChange={(e) => setMoodText(e.target.value)}
        placeholder="Describe your mood..."
        className="p-2 rounded border border-gray-300"
      />
      <select
        value={moodType}
        onChange={(e) => setMoodType(e.target.value)}
        className="p-2 rounded border border-gray-300"
      >
        {moodTypes.map((type) => (
          <option key={type.label} value={type.label}>{type.label}</option>
        ))}
      </select>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Mood
      </button>
    </form>
  );
}
