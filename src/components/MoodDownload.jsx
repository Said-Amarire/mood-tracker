import { getMoods } from "../utils/localStorage";

const MoodDownload = () => {
  const moods = getMoods();

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(moods, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mood-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadCSV = () => {
    if (!moods.length) return;

    const headers = ["date", "mood", "note"];
    const rows = moods.map((m) =>
      headers.map((h) => `"${m[h] || ""}"`).join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mood-data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Export Your Data
      </h2>

      <div className="flex justify-center gap-4">
        <button
          onClick={downloadJSON}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Download JSON
        </button>

        <button
          onClick={downloadCSV}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default MoodDownload;
