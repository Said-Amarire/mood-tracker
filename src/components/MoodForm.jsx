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
      note: note,
    };

    saveMood(newMood); // حفظ في Local Storage
    onMoodAdded(newMood); // تحديث القائمة في Dashboard
    setSelectedMood("");
    setNote("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Track Your Mood
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* اختيارات المزاج */}
        <div className="grid grid-cols-3 gap-2">
          {moodOptions.map((mood) => (
            <button
              key={mood.name}
              type="button"
              onClick={() => setSelectedMood(mood.name)}
              className={`py-2 px-4 rounded-lg border-2 transition-transform transform hover:scale-105 ${
                selectedMood === mood.name
                  ? `border-${mood.color}-500 bg-${mood.color}-100`
                  : "border-gray-300"
              } flex flex-col items-center justify-center`}
            >
              <span className="text-2xl mb-1">{mood.icon}</span>
              <span className="capitalize">{mood.name}</span>
            </button>
          ))}
        </div>

        {/* حقل الملاحظة */}
        <textarea
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* زر الحفظ */}
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors font-semibold"
        >
          Save Mood
        </button>
      </form>
    </div>
  );
};

export default MoodForm;
