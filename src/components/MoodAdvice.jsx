const MoodAdvice = ({ summary, advice }) => {
    if (!summary) return null;
  
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          AI Mood Insights
        </h2>
  
        <p className="text-indigo-600 font-medium mb-4">
          {summary}
        </p>
  
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {advice.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MoodAdvice;
  