# 🌈 Mood Tracker Web Application

![Mood Tracker Banner](https://via.placeholder.com/1200x300?text=Mood+Tracker+Web+App)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://mood-tracker-ad.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Made with React](https://img.shields.io/badge/Made%20with-React-blue?style=for-the-badge)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-teal?style=for-the-badge)](https://tailwindcss.com/)

---

## 📌 Overview

**Mood Tracker** is a modern, responsive, and interactive web application that allows users to **log, track, and analyze their daily moods**. It provides an intuitive interface, smart insights, streak tracking, calendar visualization, and data export functionality.  

This project was developed as a **Capstone Project** for a **Front-End Web Development program**, demonstrating practical skills in React, Tailwind CSS, and modern web development practices.

**Live Demo:** [Click here to try it](https://mood-tracker-ad.vercel.app)

---

## 🚀 Features

- ✅ **Daily Mood Logging**: Add moods with descriptions and type (Happy, Sad, Angry, Excited).  
- 🗂 **Persistent Storage**: All data is saved locally using `localStorage`.  
- 📊 **Mood Statistics**: Weekly, monthly, and yearly mood analysis with charts.  
- 🔥 **Mood Streaks**: Track consecutive days of mood logging.  
- 📅 **Calendar View**: Visualize mood patterns over time.  
- 📥 **Export Data**: Download mood data as JSON or CSV.  
- 🧠 **Smart Insights**: Personalized logic-driven insights based on mood trends.  
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile.  
- 🧼 **Clean Architecture**: Modular, reusable components for scalable development.  

---

## 🧠 Smart Logic & AI Readiness

The application has a **smart logic layer** that analyzes mood patterns to provide actionable insights.  

> The project structure is designed for **future AI integration**, such as connecting to OpenAI APIs, without modifying core architecture.  

---

## 🛠 Technologies Used

- **React.js** (Vite)  
- **Tailwind CSS**  
- **JavaScript (ES6+)**  
- **React Router**  
- **Local Storage API**  
- **Git & GitHub**  
- **Figma** (UI planning)  

---

## 📁 Project Structure

```
Mood_Tracker
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── api
│   │   └── aiAnalysis.js
│   ├── assets
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── MoodAdvice.jsx
│   │   ├── MoodDownload.jsx
│   │   ├── MoodForm.jsx
│   │   ├── MoodItem.jsx
│   │   ├── MoodList.jsx
│   │   ├── MoodStats.jsx
│   │   ├── MoodStreak.jsx
│   │   ├── MoodTipsModal.jsx
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── CalendarView.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DownloadPage.jsx
│   │   ├── MoodInsights.jsx
│   │   └── Statistics.jsx
│   ├── utils
│   │   ├── helper.js
│   │   ├── localStorage.js
│   │   ├── moodAdvice.js
│   │   └── moodData.js
│   ├── .DS_Store
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .DS_Store
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
└── vite.config.js
```


---

## 🖼 Screenshots

### Dashboard
![Dashboard](https://github.com/Said-Amarire/mood-tracker/raw/main/public/images/dashboard.png)

### Statistics
![Statistics](https://github.com/Said-Amarire/mood-tracker/raw/main/public/images/statistics.png)

### Calendar View
![Calendar](https://github.com/Said-Amarire/mood-tracker/raw/main/public/images/calendar.png)

### Download Page
![Download](https://github.com/Said-Amarire/mood-tracker/raw/main/public/images/download.png)

> Replace placeholders with your actual app screenshots for a polished presentation.

---

## 📄 Pages Overview

- **Dashboard** – Add moods, view history, streaks, and tips  
- **Statistics** – Visualize weekly, monthly, yearly trends  
- **Mood Insights** – Smart insights and emotional patterns  
- **Calendar View** – Overview of moods by date  
- **Download Page** – Export mood data  
- **About** – Project and technical summary  

---

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Said-Amarire/mood-tracker.git
```
# Navigate to the project folder
cd mood-tracker

# Install dependencies
npm install

# Run the project locally
npm run dev
```
Open http://localhost:5173
 to view the app.
 ```

## 🧪 Usage Instructions
- Enter your mood description
- Select the mood type from the dropdown
- Click Add Mood to save
- Delete moods if necessary
- Explore statistics, streaks, and insights

## 📌 Data Handling
- Mood data is stored locally using localStorage
- No backend or database is required
- Data persists across sessions

## 👨‍💻 Author
**Said Amarire**
GitHub: github.com/Said-Amarire

## 📄 License
This project is licensed under the MIT License.
View License
