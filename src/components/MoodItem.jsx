import React from "react";
import { deleteMood } from "../utils/localStorage";

const MoodItem = ({ mood, onDelete }) => {
  const handleDelete = () => {
    deleteMood(mood.id);
    onDelete(mood.id);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3">
      <div className="flex items-center gap-4">
        <span className="text-3xl">{mood.icon}</span>
        <div>
          <p className="font-semibold text-gray-800">{mood.mood}</p>
          <p className="text-gray-500 text-sm">{new Date(mood.date).toLocaleDateString()}</p>
          {mood.note && <p className="text-gray-600 text-sm italic">"{mood.note}"</p>}
          {mood.advice && <p className="text-green-600 text-sm mt-1">Tip: {mood.advice}</p>}
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 font-bold hover:text-red-700 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default MoodItem;
