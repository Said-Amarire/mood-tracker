// DOM Elements
const addMoodBtn = document.getElementById('add-mood-btn');
const moodModal = document.getElementById('mood-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const saveMoodBtn = document.getElementById('save-mood-btn');
const moodText = document.getElementById('mood-text');
const moodColor = document.getElementById('mood-color');
const moodList = document.getElementById('mood-list');

// Show modal
addMoodBtn.addEventListener('click', () => {
    moodModal.classList.remove('hidden');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    moodModal.classList.add('hidden');
});

// Load moods from localStorage
let moods = JSON.parse(localStorage.getItem('moods')) || [];
renderMoods();

// Save mood
saveMoodBtn.addEventListener('click', () => {
    const mood = {
        text: moodText.value,
        color: moodColor.value,
        date: new Date().toLocaleString()
    };
    moods.push(mood);
    localStorage.setItem('moods', JSON.stringify(moods));
    renderMoods();
    moodText.value = '';
    moodColor.value = '#f87171';
    moodModal.classList.add('hidden');
});

// Render moods
function renderMoods() {
    moodList.innerHTML = '';
    moods.forEach((mood, index) => {
        const moodItem = document.createElement('div');
        moodItem.className = `p-4 mb-2 rounded text-white flex justify-between items-center`;
        moodItem.style.backgroundColor = mood.color;
        moodItem.innerHTML = `
            <div>
                <p class="font-bold">${mood.text}</p>
                <small>${mood.date}</small>
            </div>
            <button class="bg-gray-800 px-2 py-1 rounded" onclick="deleteMood(${index})">Delete</button>
        `;
        moodList.appendChild(moodItem);
    });
}

// Delete mood
function deleteMood(index) {
    moods.splice(index, 1);
    localStorage.setItem('moods', JSON.stringify(moods));
    renderMoods();
}
