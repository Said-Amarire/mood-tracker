# Mood Tracker

## Overview
Mood Tracker is a simple React application that allows users to log and track their daily moods. Users can add a mood with a description and type (Happy, Sad, Angry, Excited), view their past entries, and delete moods they no longer want. The application stores data locally using `localStorage` for persistence across sessions.

## Features
- Add mood with text description and type
- View list of moods with timestamps
- Color-coded moods for better visualization
- Delete moods from the list
- Data saved locally using `localStorage`
- Responsive design using Tailwind CSS

## Tech Stack
- React.js
- Tailwind CSS
- Vite for project setup and development
- localStorage for data persistence

## Getting Started

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Said-Amarire/mood-tracker.git
```
## 2 Navigate to the project directory:
cd mood-tracker

## 3 Install dependencies:
npm install

## Run the Project
npm run dev

Open http://localhost:5173
 in your browser to view the application.

## Usage
Type your mood description
Select mood type from the dropdown
Click "Add Mood" to save it
Delete any mood by clicking "Delete"

### Folder Structure
```
MOOD-TRACKER/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MoodForm.jsx
│   │   └── MoodList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
└── README.md
```

## Author
Said Amarire

## License
This project is licensed under the MIT License.