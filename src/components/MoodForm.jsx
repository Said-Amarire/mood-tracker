import { useState } from "react";
import { saveMood } from "../utils/localStorage";
import { moodOptions } from "../utils/moodData";

const moodStyles = {
  happy: "border-green-500 bg-green-50 text-green-700",
  sad: "border-blue-500 bg-blue-50 text-blue-700",
  angry: "border-red-500 bg-red-50 text-red-700",
  calm: "border-indigo-500 bg-indigo-50 text-indigo-700",
  stressed: "border-yellow-500 bg-yellow-50 text-yellow-700",
};

const MoodForm = ({ onMoodAdded }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood) return alert("Please select a mood before saving.");

    const newMood = {
      id: Date.now(),
      mood: selectedMood,
      note,
      date: new Date().toISOString(),
    };

    saveMood(newMood);
    onMoodAdded(newMood);
    setSelectedMood(null);
    setNote("");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        How are you feeling today?
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
      >
        {/* Mood Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {moodOptions.map((mood) => {
            const isActive = selectedMood === mood.name;

            return (
              <button
                key={mood.name}
                type="button"
                onClick={() => setSelectedMood(mood.name)}
                className={`
                  rounded-xl border-2 p-4 flex flex-col items-center gap-2
                  transition-all duration-300 transform
                  ${isActive ? moodStyles[mood.name] : "border-gray-200"}
                  hover:scale-110
                  hover:shadow-lg
                  hover:-translate-y-1
                  hover:bg-opacity-30
                `}
              >
                <span className="text-3xl animate-bounce-on-hover">{mood.icon}</span>
                <span className="capitalize font-medium">{mood.name}</span>
              </button>
            );
          })}
        </div>

        {/* Note */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note about your day (optional)"
          rows={4}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Save Mood
        </button>
      </form>
    </div>
  );
};

export default MoodForm;
