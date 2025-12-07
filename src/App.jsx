import { useState, useEffect } from 'react';
import MoodForm from './components/MoodForm';
import MoodList from './components/MoodList';

function App() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const storedMoods = localStorage.getItem('moods');
    if (storedMoods) setMoods(JSON.parse(storedMoods));
  }, []);

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const addMood = (mood, type) => {
    setMoods([...moods, { mood, type, timestamp: new Date().toLocaleString() }]);
  };

  const removeMood = (index) => {
    const newMoods = moods.filter((_, i) => i !== index);
    setMoods(newMoods);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Mood Tracker</h1>
      <MoodForm addMood={addMood} />
      <MoodList moods={moods} removeMood={removeMood} />
    </div>
  );
}

export default App;
