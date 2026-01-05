import { useEffect, useState, useRef } from "react";
import { getMoods } from "../utils/localStorage";
import { filterMoodsByRange, getMostCommonMood } from "../utils/helper";
import { FaCalendarAlt } from "react-icons/fa";

const Statistics = () => {
  const [moods, setMoods] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filtered, setFiltered] = useState([]);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const data = getMoods();
    setMoods(data);
    setFiltered(data);
  }, []);

  useEffect(() => {
    setFiltered(filterMoodsByRange(moods, from, to));
  }, [from, to, moods]);

  const mostCommon = getMostCommonMood(filtered);

  const moodCounts = filtered.reduce((acc, mood) => {
    acc[mood.mood] = (acc[mood.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-8 lg:px-16">
      {/* CONTAINER WITH MAX WIDTH TO PREVENT EDGE TOUCHING */}
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl font-bold text-white">Mood Statistics</h1>
          <p className="text-gray-400 text-lg">
            Understand your emotional patterns over time.
          </p>
        </header>

        {/* FILTERS */}
        <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <DatePicker
              label="From Date"
              value={from}
              onChange={setFrom}
              inputRef={fromRef}
            />

            <DatePicker
              label="To Date"
              value={to}
              onChange={setTo}
              inputRef={toRef}
            />

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFrom("");
                  setTo("");
                  setFiltered(moods);
                }}
                className="btn btn-secondary w-full h-[44px]"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </section>

        {/* SUMMARY CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Entries" value={filtered.length} />
          <StatCard title="Most Common Mood" value={mostCommon || "—"} />
          <StatCard
            title="Selected Range"
            value={`${from || "All time"} → ${to || "Today"}`}
            small
          />
        </section>

        {/* MOOD DISTRIBUTION */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white text-center">
            Mood Distribution
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(moodCounts).map(([mood, count]) => (
              <div
                key={mood}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center"
              >
                <p className="text-white font-medium capitalize">{mood}</p>
                <p className="text-2xl font-bold text-indigo-400 mt-1">
                  {count}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

/* =========================
   COMPONENTS
========================= */

const DatePicker = ({ label, value, onChange, inputRef }) => (
  <div className="space-y-1">
    <label className="label">{label}</label>
    <div
      className="relative cursor-pointer"
      onClick={() => inputRef.current?.showPicker()}
    >
      <input
        ref={inputRef}
        type="date"
        value={value}
        readOnly
        onChange={(e) => onChange(e.target.value)}
        className="input cursor-pointer pr-10"
      />
      <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const StatCard = ({ title, value, small }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
    <p className="text-xs uppercase text-gray-400 mb-2">{title}</p>
    <p className={`font-bold text-white ${small ? "text-sm" : "text-3xl"}`}>
      {value}
    </p>
  </div>
);

export default Statistics;
