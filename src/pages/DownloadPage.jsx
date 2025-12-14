import MoodDownload from "../components/MoodDownload";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Download Your Mood Data
        </h1>

        <MoodDownload />
      </div>
    </div>
  );
};

export default DownloadPage;
