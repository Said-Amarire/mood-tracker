import { useState } from "react";
import { getMoods } from "../utils/localStorage";
import { FaDownload, FaFileCsv } from "react-icons/fa";

const DownloadPage = () => {
  const moods = getMoods();
  const [loading, setLoading] = useState(null);

  const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadJSON = async () => {
    if (!moods.length) return;
    setLoading("json");

    await new Promise((r) => setTimeout(r, 300));

    const dataStr = JSON.stringify(moods, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    triggerDownload(blob, "mood-data.json");

    setLoading(null);
  };

  const downloadCSV = async () => {
    if (!moods.length) return;
    setLoading("csv");

    await new Promise((r) => setTimeout(r, 300));

    const headers = ["date", "mood", "note"];
    const rows = moods.map((m) => [
      new Date(m.date).toISOString(),
      m.mood,
      m.note || "",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    triggerDownload(blob, "mood-data.csv");

    setLoading(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center px-6 py-16">
      {/* Outer container with fixed horizontal margins */}
      <div className="w-full max-w-4xl">
        {/* Page Header */}
        <header className="text-center mb-14 px-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            Download Your Mood Data
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Export and keep a personal copy of your emotional history for
            analysis, backup, or personal reflection.
          </p>
        </header>

        {/* Main Card */}
        <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl px-12 py-14">
          <p className="text-center text-gray-200 text-lg mb-12">
            Total saved entries:{" "}
            <span className="font-semibold text-indigo-400">
              {moods.length}
            </span>
          </p>

          {/* Buttons area — LIMITED WIDTH */}
          <div className="flex flex-col items-center gap-10 px-6">
            {/* JSON Button */}
            <button
              onClick={downloadJSON}
              disabled={loading !== null}
              className="w-full max-w-sm h-16 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold flex items-center justify-center gap-4 transition active:scale-95 disabled:opacity-60"
            >
              <FaDownload className="text-2xl" />
              {loading === "json"
                ? "Preparing JSON..."
                : "Download JSON File"}
            </button>

            {/* CSV Button */}
            <button
              onClick={downloadCSV}
              disabled={loading !== null}
              className="w-full max-w-sm h-16 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold flex items-center justify-center gap-4 transition active:scale-95 disabled:opacity-60"
            >
              <FaFileCsv className="text-2xl" />
              {loading === "csv"
                ? "Preparing CSV..."
                : "Download CSV File"}
            </button>
          </div>

          {/* Empty State */}
          {moods.length === 0 && (
            <p className="mt-12 text-center text-sm text-gray-400">
              No mood data available yet. Start tracking your emotions to enable
              downloads.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
