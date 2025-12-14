const MoodTipsModal = ({ isOpen, onClose, tips }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Daily Mood Tips
          </h2>
  
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {tips && tips.length > 0 ? (
              tips.map((tip, index) => <li key={index}>{tip}</li>)
            ) : (
              <li>No tips available today.</li>
            )}
          </ul>
  
          <button
            onClick={onClose}
            className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default MoodTipsModal;
  