import React, { useState } from "react";
import { saveMood } from "../utils/localStorage";
import { moodOptions } from "../utils/moodData";

const MoodForm = ({ onMoodAdded }) => {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood) {
      alert("Please select a mood before saving!");
      return;
    }

    const newMood = {
      id: Date.now(),
      date: new Date().toISOString(),
      mood: selectedMood,
      note: note.trim(),
    };

    saveMood(newMood);
    onMoodAdded(newMood);
    setSelectedMood("");
    setNote("");
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md mx-auto mt-8 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Track Your Mood
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Mood Selection */}
        <div className="grid grid-cols-3 gap-4">
          {moodOptions.map((mood) => (
            <button
              key={mood.name}
              type="button"
              onClick={() => setSelectedMood(mood.name)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-110 hover:shadow-lg focus:outline-none ${
                selectedMood === mood.name
                  ? `border-${mood.color}-500 bg-${mood.color}-100`
                  : "border-gray-300 bg-white"
              }`}
            >
              <span className="text-3xl mb-2">{mood.icon}</span>
              <span className="capitalize font-medium text-gray-700">
                {mood.name}
              </span>
            </button>
          ))}
        </div>

        {/* Note Input */}
        <textarea
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="resize-none border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 text-gray-800 transition-all duration-200 hover:shadow-sm"
          rows={4}
        />

        {/* Save Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
        >
          Save Mood
        </button>
      </form>

      {/* Optional tip */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Track your daily moods and gain insights over time.
      </p>
    </div>
  );
};

export default MoodForm;
