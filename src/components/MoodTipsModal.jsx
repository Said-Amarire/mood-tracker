import React from "react";

const MoodTipsModal = ({ isOpen, onClose, tips }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Daily AI Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTipsModal;
