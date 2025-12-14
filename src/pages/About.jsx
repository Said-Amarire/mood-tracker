const About = () => {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Mood Tracker
          </h1>
  
          <p className="text-gray-700 mb-4">
            Mood Tracker is a front-end web application designed to help users
            record their daily emotions, reflect on patterns, and improve
            emotional awareness.
          </p>
  
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            Key Features
          </h2>
  
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Daily mood tracking with notes</li>
            <li>Streak tracking system</li>
            <li>Statistics and analytics</li>
            <li>AI-like mood insights</li>
            <li>Visual calendar view</li>
            <li>Export data as JSON or CSV</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            Technologies Used
          </h2>
  
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>Local Storage</li>
            <li>Git & GitHub</li>
          </ul>
  
          <p className="text-gray-600 mt-6 text-sm">
            This project was built as a capstone project to demonstrate
            front-end development skills and real-world application design.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  