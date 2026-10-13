const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What galaxy do we live in?",
    answers: [
      { text: "Andromeda Galaxy", correct: false },
      { text: "Whirlpool Galaxy", correct: false },
      { text: "Milky Way Galaxy", correct: true },
      { text: "Cartwheel Galaxy", correct: false }
    ]
  },
  {
    question: "Which is the hottest planet in our solar system?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "What is a light-year a measure of?",
    answers: [
      { text: "Brightness", correct: false },
      { text: "Distance", correct: true },
      { text: "Time", correct: false },
      { text: "Speed", correct: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the Sun primarily made of?",
    answers: [
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Carbon", correct: false }
    ]
  },
  {
    question: "Which planet is known for its beautiful rings?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Which planet is tilted on its side?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Which celestial body orbits a planet?",
    answers: [
      { text: "Comet", correct: false },
      { text: "Moon", correct: true },
      { text: "Asteroid", correct: false },
      { text: "Meteor", correct: false }
    ]
  },
  {
    question: "How long does the Earth take to orbit the Sun?",
    answers: [
      { text: "365 days", correct: true },
      { text: "30 days", correct: false },
      { text: "180 days", correct: false },
      { text: "400 days", correct: false }
    ]
  },
  {
    question: "Which is the only planet that supports life?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "What causes night and day on Earth?",
    answers: [
      { text: "Earth's revolution", correct: false },
      { text: "Earth's rotation", correct: true },
      { text: "Moon's orbit", correct: false },
      { text: "Sun’s rotation", correct: false }
    ]
  },
  {
    question: "What is the name of our natural satellite?",
    answers: [
      { text: "Moon", correct: true },
      { text: "Phobos", correct: false },
      { text: "Europa", correct: false },
      { text: "Titan", correct: false }
    ]
  },
  {
    question: "Which planet has a giant red spot?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "Which gas is essential for us to breathe?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false }
    ]
  },
  {
    question: "What is the name of the first man on the moon?",
    answers: [
      { text: "Yuri Gagarin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Alan Shepard", correct: false }
    ]
  },
  {
    question: "What type of galaxy is the Milky Way?",
    answers: [
      { text: "Elliptical", correct: false },
      { text: "Spiral", correct: true },
      { text: "Irregular", correct: false },
      { text: "Barred", correct: false }
    ]
  },
  {
    question: "Which instrument is used to see stars?",
    answers: [
      { text: "Microscope", correct: false },
      { text: "Telescope", correct: true },
      { text: "Binocular", correct: false },
      { text: "Periscope", correct: false }
    ]
  },
  {
    question: "Which force keeps planets in orbit?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Gravity", correct: true },
      { text: "Friction", correct: false },
      { text: "Electricity", correct: false }
    ]
  },
  {
  question: "Which planet is known for its prominent ring system?",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Uranus", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "What is the name of our moon?",
  answers: [
    { text: "Luna", correct: true },
    { text: "Phobos", correct: false },
    { text: "Titan", correct: false },
    { text: "Europa", correct: false }
  ]
},
{
  question: "Which is the largest planet in our solar system?",
  answers: [
    { text: "Jupiter", correct: true },
    { text: "Saturn", correct: false },
    { text: "Neptune", correct: false },
    { text: "Earth", correct: false }
  ]
},
{
  question: "What is the smallest planet in our solar system?",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Mars", correct: false },
    { text: "Venus", correct: false },
    { text: "Pluto", correct: false }
  ]
},
{
  question: "Which planet is called Earth's twin due to similar size and composition?",
  answers: [
    { text: "Venus", correct: true },
    { text: "Mars", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "Which planet has a day longer than its year?",
  answers: [
    { text: "Venus", correct: true },
    { text: "Mercury", correct: false },
    { text: "Mars", correct: false },
    { text: "Earth", correct: false }
  ]
},
{
  question: "What is the Kuiper Belt?",
  answers: [
    { text: "A region of icy bodies beyond Neptune", correct: true },
    { text: "The asteroid belt between Mars and Jupiter", correct: false },
    { text: "A ring around Saturn", correct: false },
    { text: "A type of space station", correct: false }
  ]
},
{
  question: "What is the most common type of star in the Milky Way?",
  answers: [
    { text: "Red dwarf", correct: true },
    { text: "White dwarf", correct: false },
    { text: "Neutron star", correct: false },
    { text: "Supergiant", correct: false }
  ]
},
{
  question: "Which planet spins on its side relative to its orbit?",
  answers: [
    { text: "Uranus", correct: true },
    { text: "Neptune", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Mars", correct: false }
  ]
},
{
  question: "What protects Earth from solar radiation?",
  answers: [
    { text: "Magnetic field", correct: true },
    { text: "Ozone layer", correct: false },
    { text: "Gravity", correct: false },
    { text: "Moon", correct: false }
  ]
},
{
  question: "What is the term for a star explosion?",
  answers: [
    { text: "Supernova", correct: true },
    { text: "Black hole", correct: false },
    { text: "Nova", correct: false },
    { text: "Comet", correct: false }
  ]
},
{
  question: "Which space agency landed the first human on the Moon?",
  answers: [
    { text: "NASA", correct: true },
    { text: "ISRO", correct: false },
    { text: "Roscosmos", correct: false },
    { text: "ESA", correct: false }
  ]
},
{
  question: "Which space mission first landed humans on the Moon?",
  answers: [
    { text: "Apollo 11", correct: true },
    { text: "Apollo 13", correct: false },
    { text: "Gemini 5", correct: false },
    { text: "Sputnik 1", correct: false }
  ]
},
{
  question: "What is the name of the rover that landed on Mars in 2021?",
  answers: [
    { text: "Perseverance", correct: true },
    { text: "Curiosity", correct: false },
    { text: "Spirit", correct: false },
    { text: "Opportunity", correct: false }
  ]
},
{
  question: "Which planet has the fastest rotation?",
  answers: [
    { text: "Jupiter", correct: true },
    { text: "Mercury", correct: false },
    { text: "Saturn", correct: false },
    { text: "Earth", correct: false }
  ]
},
{
  question: "What is the name of the first artificial satellite?",
  answers: [
    { text: "Sputnik 1", correct: true },
    { text: "Explorer 1", correct: false },
    { text: "Luna 2", correct: false },
    { text: "Apollo 1", correct: false }
  ]
},
{
  question: "Which telescope is famous for its deep space images?",
  answers: [
    { text: "Hubble Space Telescope", correct: true },
    { text: "Kepler Telescope", correct: false },
    { text: "James Webb Telescope", correct: false },
    { text: "Chandra X-ray Observatory", correct: false }
  ]
},
{
  question: "What is the name of the boundary where Earth's atmosphere ends and space begins?",
  answers: [
    { text: "Kármán line", correct: true },
    { text: "Van Allen belt", correct: false },
    { text: "Thermosphere", correct: false },
    { text: "Stratosphere", correct: false }
  ]
},
{
  question: "Which planet has a Great Red Spot?",
  answers: [
    { text: "Jupiter", correct: true },
    { text: "Saturn", correct: false },
    { text: "Neptune", correct: false },
    { text: "Mars", correct: false }
  ]
},
{
  question: "What is the name of the new powerful space telescope launched in 2021?",
  answers: [
    { text: "James Webb Space Telescope", correct: true },
    { text: "Kepler Space Telescope", correct: false },
    { text: "Hubble Space Telescope", correct: false },
    { text: "Spitzer Space Telescope", correct: false }
  ]
},
{
  question: "Which planet is known as the 'Ice Giant' along with Neptune?",
  answers: [
    { text: "Uranus", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Saturn", correct: false },
    { text: "Venus", correct: false }
  ]
},
{
  question: "What is the name of the largest volcano in the solar system?",
  answers: [
    { text: "Olympus Mons", correct: true },
    { text: "Mauna Kea", correct: false },
    { text: "Mount Everest", correct: false },
    { text: "Vesuvius", correct: false }
  ]
},
{
  question: "Which planet has blue methane clouds?",
  answers: [
    { text: "Neptune", correct: true },
    { text: "Uranus", correct: false },
    { text: "Earth", correct: false },
    { text: "Saturn", correct: false }
  ]
},
{
  question: "How many Earths can fit inside the Sun?",
  answers: [
    { text: "About 1 million", correct: true },
    { text: "About 10,000", correct: false },
    { text: "About 100", correct: false },
    { text: "About 5,000", correct: false }
  ]
},
{
  question: "What is the main gas in Earth's atmosphere?",
  answers: [
    { text: "Nitrogen", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Carbon dioxide", correct: false },
    { text: "Hydrogen", correct: false }
  ]
}
// Add 30 more similarly formatted questions here...
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  scoreSection.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = true;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function showScore() {
  resetState();
  scoreSection.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again";
  nextButton.classList.remove("hidden");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
