import React, { useState, useEffect } from "react";
import MoodItem from "./MoodItem";
import { getMoods } from "../utils/localStorage";
import { moodOptions } from "../utils/moodData";

const MoodList = ({ refresh }) => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    loadMoods();
  }, [refresh]);

  const loadMoods = () => {
    const data = getMoods();
    // Attach icons from moodOptions
    const moodsWithIcons = data.map((m) => {
      const moodObj = moodOptions.find((mo) => mo.name === m.mood);
      return { ...m, icon: moodObj ? moodObj.icon : "🙂" };
    });
    setMoods(moodsWithIcons.reverse()); // show latest first
  };

  const handleDelete = (id) => {
    setMoods(moods.filter((m) => m.id !== id));
  };

  if (moods.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No moods recorded yet.</p>;
  }

  return (
    <div className="mt-6">
      {moods.map((mood) => (
        <MoodItem key={mood.id} mood={mood} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MoodList;
