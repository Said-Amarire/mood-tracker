import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="app-container bg-gray-900 shadow-xl rounded-2xl p-8 md:p-12 space-y-10 fade-in">
        {/* Title */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to Mood Tracker
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Mood Tracker is your personal companion for understanding emotions,
            improving well-being, and reflecting on your daily feelings.
          </p>
        </header>

        {/* What is Mood Tracker */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            What is Mood Tracker?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Mood Tracker is a web application that allows you to track your emotions on a daily basis.
            By recording your moods and optional notes, you can start to see patterns and gain insights 
            into your emotional health. It's designed to help anyone understand themselves better and 
            make conscious decisions for a healthier lifestyle.
          </p>
        </section>

        {/* How it helps */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            How Mood Tracker Helps You
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By using Mood Tracker consistently, you can:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2">
            <li>Gain awareness of your daily emotions and mood fluctuations.</li>
            <li>Identify triggers that impact your mental well-being.</li>
            <li>Track improvements in your mood over weeks and months.</li>
            <li>Stay motivated to maintain positive habits and emotional balance.</li>
            <li>Reflect on your day through optional notes linked to each mood.</li>
          </ul>
        </section>

        {/* How it Works */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            How it Works
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Using Mood Tracker is simple:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2">
            <li>Select your mood from a variety of emojis representing your feelings.</li>
            <li>Add an optional note describing your day or experiences.</li>
            <li>Save your entry to store it securely in your browser.</li>
            <li>View your mood history in a list or calendar view to analyze patterns.</li>
            <li>Check your streaks to stay consistent and motivated.</li>
            <li>Get smart insights based on your recorded moods and trends.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            Benefits of Using Mood Tracker
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Mood Tracker helps you take charge of your emotional health by providing:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2">
            <li>A clear picture of your emotional trends over time.</li>
            <li>Self-reflection tools to understand causes of stress or happiness.</li>
            <li>Encouragement to build better habits and reduce negative emotions.</li>
            <li>Personalized insights based on your daily input (logic-driven, ready for AI integration in future updates).</li>
            <li>A private and secure way to track your mood without sharing data externally.</li>
          </ul>
        </section>

        {/* Target Users */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            Who Should Use Mood Tracker?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Mood Tracker is perfect for:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2">
            <li>Anyone looking to understand their emotional patterns.</li>
            <li>People wanting to improve mental health and well-being.</li>
            <li>Students, professionals, and individuals with a busy lifestyle.</li>
            <li>Anyone who wants to reflect on their day and track moods over time.</li>
          </ul>
        </section>

        {/* Final Note */}
        <section className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-400">
            Final Notes
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Mood Tracker focuses on simplicity, privacy, and user experience. 
            It provides a clean, intuitive interface where you can track your emotions, 
            see trends, and gradually improve your well-being. 
            Whether you want to explore your emotional patterns or develop healthier habits, 
            Mood Tracker is a reliable daily companion.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;
