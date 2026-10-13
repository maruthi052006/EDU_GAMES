// 🌍 Globe Trotters: Continents & Oceans Explorer
// ------------------------------------------------

// --- Data for each section ---
const continentQuestions = [
  { question: "Which continent is known as the 'Dark Continent'?", answer: "Africa" },
  { question: "Which continent is the smallest in land area?", answer: "Australia" },
  { question: "Which continent has the most countries?", answer: "Africa" },
  { question: "Which continent is home to the Himalayas?", answer: "Asia" },
  { question: "Which continent is almost completely covered in ice?", answer: "Antarctica" }
];

const oceanQuestions = [
  { question: "Which is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "Which ocean lies between Africa and Australia?", answer: "Indian Ocean" },
  { question: "Which ocean is the smallest?", answer: "Arctic Ocean" },
  { question: "Which ocean borders the east coast of the United States?", answer: "Atlantic Ocean" },
  { question: "Which ocean surrounds Antarctica?", answer: "Southern Ocean" }
];

const hemisphereQuestions = [
  { question: "Which hemisphere is the continent of Africa located in?", answer: "Both Northern and Southern Hemispheres" },
  { question: "Which hemisphere does Australia lie in?", answer: "Southern Hemisphere" },
  { question: "In which hemisphere is North America located?", answer: "Northern Hemisphere" },
  { question: "In which hemisphere is most of South America located?", answer: "Southern Hemisphere" },
  { question: "In which hemisphere does Europe lie?", answer: "Northern Hemisphere" }
];

// --- Current question indices ---
let continentIndex = 0;
let oceanIndex = 0;
let hemisphereIndex = 0;

// --- Functions to load and display questions ---
function loadContinentQuestion() {
  const box = document.getElementById("continent-questions");
  if (continentIndex < continentQuestions.length) {
    const q = continentQuestions[continentIndex];
    box.innerHTML = `<p><strong>Question:</strong> ${q.question}</p>
                     <p><em>Answer:</em> ${q.answer}</p>`;
  } else {
    box.innerHTML = "<p>🎉 You've completed all continent questions!</p>";
  }
}

function nextContinentQuestion() {
  continentIndex++;
  loadContinentQuestion();
}

function loadOceanQuestion() {
  const box = document.getElementById("ocean-questions");
  if (oceanIndex < oceanQuestions.length) {
    const q = oceanQuestions[oceanIndex];
    box.innerHTML = `<p><strong>Question:</strong> ${q.question}</p>
                     <p><em>Answer:</em> ${q.answer}</p>`;
  } else {
    box.innerHTML = "<p>🌊 You've completed all ocean questions!</p>";
  }
}

function nextOceanQuestion() {
  oceanIndex++;
  loadOceanQuestion();
}

function loadHemisphereQuestion() {
  const box = document.getElementById("hemisphere-questions");
  if (hemisphereIndex < hemisphereQuestions.length) {
    const q = hemisphereQuestions[hemisphereIndex];
    box.innerHTML = `<p><strong>Question:</strong> ${q.question}</p>
                     <p><em>Answer:</em> ${q.answer}</p>`;
  } else {
    box.innerHTML = "<p>🧭 You've completed all hemisphere challenges!</p>";
  }
}

function nextHemisphereQuestion() {
  hemisphereIndex++;
  loadHemisphereQuestion();
}

// --- Initialize all quizzes on page load ---
window.onload = () => {
  loadContinentQuestion();
  loadOceanQuestion();
  loadHemisphereQuestion();
};
