import { useEffect, useState } from "react";
import { getMoods } from "../utils/localStorage";
import { moodOptions } from "../utils/moodData";

const CalendarView = () => {
  const [moods, setMoods] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setMoods(getMoods());
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getMoodForDay = (day) => {
    const dateStr = new Date(year, month, day).toISOString().split("T")[0];
    return moods.find((m) => m.date === dateStr);
  };

  const changeMonth = (direction) => {
    setCurrentDate(
      new Date(year, month + direction, 1)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Mood Calendar
          </h1>
          <p className="text-gray-600 mt-2">
            Visual overview of your daily moods.
          </p>
        </header>

        {/* Month Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100"
          >
            Previous
          </button>

          <h2 className="text-xl font-semibold text-indigo-600">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>

          <button
            onClick={() => changeMonth(1)}
            className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100"
          >
            Next
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded-xl shadow-md">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-600"
            >
              {day}
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const moodEntry = getMoodForDay(day);

            let moodIcon = "";
            let bgColor = "bg-gray-100";

            if (moodEntry) {
              const moodData = moodOptions.find(
                (m) => m.name === moodEntry.mood
              );
              moodIcon = moodData?.icon;
              bgColor = "bg-indigo-100";
            }

            return (
              <div
                key={day}
                className={`h-20 rounded-lg flex flex-col items-center justify-center text-sm ${bgColor}`}
              >
                <span className="font-semibold">{day}</span>
                <span className="text-2xl">{moodIcon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
