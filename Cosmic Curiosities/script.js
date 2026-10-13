const questions = [
  {
    question: "What is the hottest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "What is the name of our galaxy?",
    answers: [
      { text: "Andromeda", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Milky Way", correct: true },
      { text: "Black Eye", correct: false }
    ]
  },
  {
    question: "Which planet is known for its beautiful rings?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Neptune", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the name of the first satellite sent into space?",
    answers: [
      { text: "Apollo", correct: false },
      { text: "Sputnik", correct: true },
      { text: "Voyager", correct: false },
      { text: "Luna", correct: false }
    ]
  },
  {
  question: "Which planet is known as the Red Planet?",
  answers: [
    { text: "Mars", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Saturn", correct: false },
    { text: "Earth", correct: false }
  ]
},
{
  question: "Which celestial body causes tides on Earth?",
  answers: [
    { text: "Sun", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Moon", correct: true },
    { text: "Mars", correct: false }
  ]
},
{
  question: "What is the Sun mainly made of?",
  answers: [
    { text: "Helium and Oxygen", correct: false },
    { text: "Nitrogen and Carbon", correct: false },
    { text: "Hydrogen and Helium", correct: true },
    { text: "Oxygen and Hydrogen", correct: false }
  ]
},
{
  question: "Which planet is the largest in our solar system?",
  answers: [
    { text: "Saturn", correct: false },
    { text: "Uranus", correct: false },
    { text: "Neptune", correct: false },
    { text: "Jupiter", correct: true }
  ]
},
{
  question: "Which planet rotates on its side?",
  answers: [
    { text: "Mars", correct: false },
    { text: "Earth", correct: false },
    { text: "Uranus", correct: true },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "What galaxy is closest to the Milky Way?",
  answers: [
    { text: "Andromeda", correct: true },
    { text: "Whirlpool", correct: false },
    { text: "Messier 87", correct: false },
    { text: "Triangulum", correct: false }
  ]
},
{
  question: "What is a black hole?",
  answers: [
    { text: "A giant rock", correct: false },
    { text: "A region of space with no gravity", correct: false },
    { text: "A region of space where gravity pulls so much that not even light can escape", correct: true },
    { text: "A collapsed star that no longer moves", correct: false }
  ]
},
{
  question: "What is the smallest planet in our solar system?",
  answers: [
    { text: "Pluto", correct: false },
    { text: "Mars", correct: false },
    { text: "Mercury", correct: true },
    { text: "Venus", correct: false }
  ]
},
{
  question: "Which planet has a storm called the Great Red Spot?",
  answers: [
    { text: "Saturn", correct: false },
    { text: "Jupiter", correct: true },
    { text: "Uranus", correct: false },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "Which planet is the farthest from the Sun?",
  answers: [
    { text: "Uranus", correct: false },
    { text: "Neptune", correct: true },
    { text: "Pluto", correct: false },
    { text: "Saturn", correct: false }
  ]
},
{
  question: "Which astronaut was the first to walk on the Moon?",
  answers: [
    { text: "Buzz Aldrin", correct: false },
    { text: "Neil Armstrong", correct: true },
    { text: "Yuri Gagarin", correct: false },
    { text: "John Glenn", correct: false }
  ]
},
{
  question: "Which is the brightest object in our night sky after the Moon?",
  answers: [
    { text: "Sirius", correct: false },
    { text: "Venus", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Mars", correct: false }
  ]
},
{
  question: "What is a comet mainly made of?",
  answers: [
    { text: "Metal", correct: false },
    { text: "Gas and lava", correct: false },
    { text: "Ice, dust, and rock", correct: true },
    { text: "Sand and wind", correct: false }
  ]
},
{
  question: "What is the name of NASA’s most famous space telescope?",
  answers: [
    { text: "Voyager", correct: false },
    { text: "Kepler", correct: false },
    { text: "Hubble", correct: true },
    { text: "Cassini", correct: false }
  ]
},
{
  question: "Which space mission first landed humans on the Moon?",
  answers: [
    { text: "Apollo 11", correct: true },
    { text: "Apollo 13", correct: false },
    { text: "Gemini 7", correct: false },
    { text: "Sputnik 1", correct: false }
  ]
},
{
  question: "What is the shape of the Milky Way galaxy?",
  answers: [
    { text: "Oval", correct: false },
    { text: "Spiral", correct: true },
    { text: "Circular", correct: false },
    { text: "Irregular", correct: false }
  ]
},
{
  question: "Which planet has the longest day?",
  answers: [
    { text: "Venus", correct: true },
    { text: "Earth", correct: false },
    { text: "Mars", correct: false },
    { text: "Saturn", correct: false }
  ]
},
{
  question: "How long does Earth take to orbit the Sun?",
  answers: [
    { text: "365 days", correct: true },
    { text: "30 days", correct: false },
    { text: "100 days", correct: false },
    { text: "180 days", correct: false }
  ]
},
{
  question: "What is a meteor called when it hits Earth’s surface?",
  answers: [
    { text: "Comet", correct: false },
    { text: "Asteroid", correct: false },
    { text: "Meteorite", correct: true },
    { text: "Meteor", correct: false }
  ]
},
{
  question: "Which planet has blue-colored clouds due to methane?",
  answers: [
    { text: "Neptune", correct: true },
    { text: "Uranus", correct: false },
    { text: "Earth", correct: false },
    { text: "Jupiter", correct: false }
  ]
},
{
  question: "Which gas is most abundant in Jupiter’s atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Hydrogen", correct: true },
    { text: "Carbon dioxide", correct: false },
    { text: "Nitrogen", correct: false }
  ]
},
{
  question: "How many planets are in our solar system?",
  answers: [
    { text: "7", correct: false },
    { text: "8", correct: true },
    { text: "9", correct: false },
    { text: "10", correct: false }
  ]
},
{
  question: "Which spacecraft went beyond our solar system?",
  answers: [
    { text: "Cassini", correct: false },
    { text: "Apollo 11", correct: false },
    { text: "Voyager 1", correct: true },
    { text: "Chandrayaan", correct: false }
  ]
},
{
  question: "What protects Earth from harmful solar radiation?",
  answers: [
    { text: "Magnetic field", correct: true },
    { text: "Gravity", correct: false },
    { text: "Clouds", correct: false },
    { text: "Mountains", correct: false }
  ]
},
{
  question: "What is the largest moon of Saturn?",
  answers: [
    { text: "Titan", correct: true },
    { text: "Ganymede", correct: false },
    { text: "Callisto", correct: false },
    { text: "Phobos", correct: false }
  ]
},
{
  question: "Which planet is known for its giant icy rings?",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Uranus", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "What causes a solar eclipse?",
  answers: [
    { text: "Earth comes between Sun and Moon", correct: false },
    { text: "Moon comes between Earth and Sun", correct: true },
    { text: "Sun comes between Earth and Mars", correct: false },
    { text: "Sun explodes", correct: false }
  ]
},
{
  question: "What is the distance between Earth and Sun called?",
  answers: [
    { text: "Solar unit", correct: false },
    { text: "Planetary scale", correct: false },
    { text: "Light year", correct: false },
    { text: "Astronomical unit (AU)", correct: true }
  ]
},
{
  question: "Who was the first human in space?",
  answers: [
    { text: "Neil Armstrong", correct: false },
    { text: "Yuri Gagarin", correct: true },
    { text: "Rakesh Sharma", correct: false },
    { text: "Buzz Aldrin", correct: false }
  ]
},
{
  question: "Which mission successfully landed on Mars?",
  answers: [
    { text: "Viking 1", correct: true },
    { text: "Apollo 13", correct: false },
    { text: "Chandrayaan", correct: false },
    { text: "Luna 2", correct: false }
  ]
},
{
  question: "What is the coldest planet in our solar system?",
  answers: [
    { text: "Uranus", correct: true },
    { text: "Neptune", correct: false },
    { text: "Mars", correct: false },
    { text: "Pluto", correct: false }
  ]
},
  {
    question: "What is the name of the closest star to Earth after the Sun?",
    answers: [
      { text: "Proxima Centauri", correct: true },
      { text: "Alpha Centauri A", correct: false },
      { text: "Betelgeuse", correct: false },
      { text: "Sirius", correct: false }
    ]
  },
  {
    question: "What is the boundary around a black hole called?",
    answers: [
      { text: "Event Horizon", correct: true },
      { text: "Gravitational Field", correct: false },
      { text: "Dark Zone", correct: false },
      { text: "Black Belt", correct: false }
    ]
  },
  {
    question: "Which planet is known for its extreme greenhouse effect?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What is the largest type of star known in the universe?",
    answers: [
      { text: "Red Supergiant", correct: true },
      { text: "White Dwarf", correct: false },
      { text: "Neutron Star", correct: false },
      { text: "Yellow Dwarf", correct: false }
    ]
  },
  {
    question: "Which planet is famous for having giant dust storms?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Neptune", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "How many moons does Mars have?",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "0", correct: false }
    ]
  },
  {
    question: "What is the name of the galaxy that contains our Solar System?",
    answers: [
      { text: "Milky Way", correct: true },
      { text: "Andromeda", correct: false },
      { text: "Whirlpool", correct: false },
      { text: "Triangulum", correct: false }
    ]
  },
  {
    question: "Which element powers the sun through nuclear fusion?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Carbon", correct: false },
      { text: "Oxygen", correct: false }
    ]
  },
  {
    question: "What is a comet primarily made of?",
    answers: [
      { text: "Ice and dust", correct: true },
      { text: "Gas", correct: false },
      { text: "Metal", correct: false },
      { text: "Rock", correct: false }
    ]
  },
  {
    question: "Which is the largest volcano in the Solar System?",
    answers: [
      { text: "Olympus Mons", correct: true },
      { text: "Mauna Kea", correct: false },
      { text: "Mount Everest", correct: false },
      { text: "Vesuvius", correct: false }
    ]
  },
  {
    question: "Which part of the sun is visible during a solar eclipse?",
    answers: [
      { text: "Corona", correct: true },
      { text: "Core", correct: false },
      { text: "Photosphere", correct: false },
      { text: "Chromosphere", correct: false }
    ]
  },
  {
    question: "Which spacecraft was the first to visit Pluto?",
    answers: [
      { text: "New Horizons", correct: true },
      { text: "Voyager 1", correct: false },
      { text: "Cassini", correct: false },
      { text: "Pioneer 10", correct: false }
    ]
  },
  {
    question: "What kind of celestial object is Halley's Comet?",
    answers: [
      { text: "Short-period comet", correct: true },
      { text: "Asteroid", correct: false },
      { text: "Long-period comet", correct: false },
      { text: "Dwarf planet", correct: false }
    ]
  },
  {
    question: "What is the Kuiper Belt?",
    answers: [
      { text: "A region of icy bodies beyond Neptune", correct: true },
      { text: "A ring around Saturn", correct: false },
      { text: "An asteroid field between Mars and Jupiter", correct: false },
      { text: "A band of stars", correct: false }
    ]
  },
  {
    question: "What is the term for a group of stars forming a pattern?",
    answers: [
      { text: "Constellation", correct: true },
      { text: "Cluster", correct: false },
      { text: "Galaxy", correct: false },
      { text: "Nebula", correct: false }
    ]
  },
  {
    question: "What is the cosmic speed limit?",
    answers: [
      { text: "Speed of light", correct: true },
      { text: "Speed of sound", correct: false },
      { text: "Escape velocity", correct: false },
      { text: "Orbital speed", correct: false }
    ]
  },
  {
    question: "Which telescope is in orbit and captures deep-space images?",
    answers: [
      { text: "Hubble Space Telescope", correct: true },
      { text: "Keck Observatory", correct: false },
      { text: "ALMA", correct: false },
      { text: "Arecibo Telescope", correct: false }
    ]
  },
  {
    question: "What does NASA stand for?",
    answers: [
      { text: "National Aeronautics and Space Administration", correct: true },
      { text: "National Aerospace and Space Association", correct: false },
      { text: "North American Space Agency", correct: false },
      { text: "National Astrophysics Science Agency", correct: false }
    ]
  },
  {
    question: "Which moon is the largest in the solar system?",
    answers: [
      { text: "Ganymede", correct: true },
      { text: "Titan", correct: false },
      { text: "Callisto", correct: false },
      { text: "Europa", correct: false }
    ]
  },
  {
    question: "What is a shooting star actually?",
    answers: [
      { text: "A meteor burning in Earth's atmosphere", correct: true },
      { text: "A small star falling", correct: false },
      { text: "A comet tail", correct: false },
      { text: "A space probe", correct: false }
    ]
  }


  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `Q${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
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

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 🌟`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
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
