import React from "react";
import MoodItem from "./MoodItem";
import { moodOptions } from "../utils/moodData";

const MoodList = ({ moods }) => {
  if (!moods || moods.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No moods recorded yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {moods.map((mood) => {
        const moodObj = moodOptions.find((mo) => mo.name === mood.mood);
        return (
          <MoodItem
            key={mood.id}
            mood={{ ...mood, icon: moodObj ? moodObj.icon : "🙂" }}
            onDelete={() => {}}
          />
        );
      })}
    </div>
  );
};

export default MoodList;
