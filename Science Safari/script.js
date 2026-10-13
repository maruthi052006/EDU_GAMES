const questions = [
  {
    question: "What planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false }
    ]
  },
  {
    question: "How many bones are in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "210", correct: false },
      { text: "198", correct: false },
      { text: "201", correct: false }
    ]
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    answers: [
      { text: "Stem", correct: false },
      { text: "Leaf", correct: true },
      { text: "Root", correct: false },
      { text: "Flower", correct: false }
    ]
  },
  {
    question: "Which organ is responsible for pumping blood?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Lungs", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "100°C", correct: true },
      { text: "90°C", correct: false },
      { text: "80°C", correct: false },
      { text: "120°C", correct: false }
    ]
  },
  {
    question: "Which gas do humans need to breathe to survive?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false }
    ]
  },
  {
    question: "Which planet is the largest in the solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Gold", correct: false },
      { text: "Quartz", correct: false }
    ]
  },
  {
    question: "Which vitamin is produced when the skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin C", correct: false }
    ]
  },
  {
    question: "What is the center of an atom called?",
    answers: [
      { text: "Electron", correct: false },
      { text: "Nucleus", correct: true },
      { text: "Proton", correct: false },
      { text: "Neutron", correct: false }
    ]
  },
  {
    question: "Which planet has rings around it?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Earth", correct: false },
      { text: "Saturn", correct: true },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "What force keeps us on the ground?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Electricity", correct: false },
      { text: "Gravity", correct: true },
      { text: "Friction", correct: false }
    ]
  },
  {
    question: "Which part of the cell contains DNA?",
    answers: [
      { text: "Nucleus", correct: true },
      { text: "Cytoplasm", correct: false },
      { text: "Membrane", correct: false },
      { text: "Mitochondria", correct: false }
    ]
  },
  {
    question: "What tool is used to see tiny objects?",
    answers: [
      { text: "Thermometer", correct: false },
      { text: "Microscope", correct: true },
      { text: "Barometer", correct: false },
      { text: "Telescope", correct: false }
    ]
  },
  {
    question: "Which gas makes up most of the Earth’s atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What do bees collect and use to make honey?",
    answers: [
      { text: "Nectar", correct: true },
      { text: "Pollen", correct: false },
      { text: "Water", correct: false },
      { text: "Leaves", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
      { text: "Earth", correct: false }
    ]
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false }
    ]
  },
  {
    question: "What is the process by which plants make their food?",
    answers: [
      { text: "Photosynthesis", correct: true },
      { text: "Respiration", correct: false },
      { text: "Digestion", correct: false },
      { text: "Evaporation", correct: false }
    ]
  },
  {
    question: "Which gas is needed for a fire to burn?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false }
    ]
  },
  {
    question: "Which human organ helps in breathing?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Lungs", correct: true },
      { text: "Heart", correct: false },
      { text: "Stomach", correct: false }
    ]
  },
  {
    question: "What is the main source of energy for Earth?",
    answers: [
      { text: "Wind", correct: false },
      { text: "Coal", correct: false },
      { text: "The Sun", correct: true },
      { text: "Electricity", correct: false }
    ]
  },
  {
    question: "What do we call animals that eat only plants?",
    answers: [
      { text: "Carnivores", correct: false },
      { text: "Herbivores", correct: true },
      { text: "Omnivores", correct: false },
      { text: "Insectivores", correct: false }
    ]
  },
  {
    question: "Which part of the human body is used for thinking?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Brain", correct: true },
      { text: "Kidney", correct: false }
    ]
  },
  {
    question: "What is the process of changing from a liquid to a gas?",
    answers: [
      { text: "Melting", correct: false },
      { text: "Condensation", correct: false },
      { text: "Evaporation", correct: true },
      { text: "Freezing", correct: false }
    ]
  },
  {
    question: "What is the name of the galaxy we live in?",
    answers: [
      { text: "Andromeda", correct: false },
      { text: "Milky Way", correct: true },
      { text: "Orion", correct: false },
      { text: "Pegasus", correct: false }
    ]
  },
  {
    question: "Which is the smallest unit of life?",
    answers: [
      { text: "Organ", correct: false },
      { text: "Cell", correct: true },
      { text: "Tissue", correct: false },
      { text: "Organism", correct: false }
    ]
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
  question: "Which organ in the human body pumps blood?",
  answers: [
    { text: "Heart", correct: true },
    { text: "Lungs", correct: false },
    { text: "Liver", correct: false },
    { text: "Kidneys", correct: false }
  ]
},
{
  question: "Which is the largest organ in the human body?",
  answers: [
    { text: "Skin", correct: true },
    { text: "Liver", correct: false },
    { text: "Brain", correct: false },
    { text: "Lungs", correct: false }
  ]
},
{
  question: "What is the boiling point of water?",
  answers: [
    { text: "100°C", correct: true },
    { text: "0°C", correct: false },
    { text: "50°C", correct: false },
    { text: "212°C", correct: false }
  ]
},
{
  question: "Which scientist developed the theory of relativity?",
  answers: [
    { text: "Albert Einstein", correct: true },
    { text: "Isaac Newton", correct: false },
    { text: "Galileo Galilei", correct: false },
    { text: "Marie Curie", correct: false }
  ]
},
{
  question: "What part of the plant conducts photosynthesis?",
  answers: [
    { text: "Leaf", correct: true },
    { text: "Root", correct: false },
    { text: "Stem", correct: false },
    { text: "Flower", correct: false }
  ]
},
{
  question: "Which is the hardest natural substance on Earth?",
  answers: [
    { text: "Diamond", correct: true },
    { text: "Iron", correct: false },
    { text: "Gold", correct: false },
    { text: "Quartz", correct: false }
  ]
},
{
  question: "Which gas is most abundant in the Earth’s atmosphere?",
  answers: [
    { text: "Nitrogen", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: false },
    { text: "Hydrogen", correct: false }
  ]
},
{
  question: "What is the center of an atom called?",
  answers: [
    { text: "Nucleus", correct: true },
    { text: "Electron", correct: false },
    { text: "Proton", correct: false },
    { text: "Neutron", correct: false }
  ]
},
{
  question: "Which vitamin is produced when skin is exposed to sunlight?",
  answers: [
    { text: "Vitamin D", correct: true },
    { text: "Vitamin A", correct: false },
    { text: "Vitamin C", correct: false },
    { text: "Vitamin B12", correct: false }
  ]
},
{
  question: "What is the main function of white blood cells?",
  answers: [
    { text: "Fight infection", correct: true },
    { text: "Carry oxygen", correct: false },
    { text: "Clot blood", correct: false },
    { text: "Store fat", correct: false }
  ]
},
{
  question: "Which simple machine is found in scissors?",
  answers: [
    { text: "Lever", correct: true },
    { text: "Pulley", correct: false },
    { text: "Wheel and axle", correct: false },
    { text: "Inclined plane", correct: false }
  ]
},
{
  question: "What causes tides on Earth?",
  answers: [
    { text: "Moon's gravity", correct: true },
    { text: "Sunlight", correct: false },
    { text: "Wind", correct: false },
    { text: "Earth's rotation", correct: false }
  ]
},
{
  question: "Which part of the human brain controls balance?",
  answers: [
    { text: "Cerebellum", correct: true },
    { text: "Cerebrum", correct: false },
    { text: "Medulla", correct: false },
    { text: "Hypothalamus", correct: false }
  ]
},
{
  question: "Which element is a liquid metal at room temperature?",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Iron", correct: false },
    { text: "Silver", correct: false },
    { text: "Gold", correct: false }
  ]
},
{
  question: "What kind of energy is stored in food?",
  answers: [
    { text: "Chemical energy", correct: true },
    { text: "Heat energy", correct: false },
    { text: "Nuclear energy", correct: false },
    { text: "Light energy", correct: false }
  ]
},
{
  question: "Which animal is known for changing its color to blend in?",
  answers: [
    { text: "Chameleon", correct: true },
    { text: "Frog", correct: false },
    { text: "Snake", correct: false },
    { text: "Lizard", correct: false }
  ]
},
{
  question: "Which blood type is known as the universal donor?",
  answers: [
    { text: "O negative", correct: true },
    { text: "A positive", correct: false },
    { text: "B negative", correct: false },
    { text: "AB positive", correct: false }
  ]
},
{
  question: "Which layer of the Earth is liquid?",
  answers: [
    { text: "Outer core", correct: true },
    { text: "Mantle", correct: false },
    { text: "Crust", correct: false },
    { text: "Inner core", correct: false }
  ]
},
{
  question: "Which gas is released during respiration?",
  answers: [
    { text: "Carbon dioxide", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false }
  ]
},
{
  question: "Which part of the flower becomes fruit?",
  answers: [
    { text: "Ovary", correct: true },
    { text: "Petal", correct: false },
    { text: "Sepal", correct: false },
    { text: "Anther", correct: false }
  ]
},
{
  question: "What is the human body's primary source of energy?",
  answers: [
    { text: "Carbohydrates", correct: true },
    { text: "Proteins", correct: false },
    { text: "Fats", correct: false },
    { text: "Vitamins", correct: false }
  ]
},
{
  question: "Which scientist discovered gravity?",
  answers: [
    { text: "Isaac Newton", correct: true },
    { text: "Albert Einstein", correct: false },
    { text: "Nikola Tesla", correct: false },
    { text: "Galileo Galilei", correct: false }
  ]
},
{
  question: "Which planet has the most moons?",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Mars", correct: false },
    { text: "Earth", correct: false },
    { text: "Venus", correct: false }
  ]
},
{
  question: "What is the name of the process where liquid becomes gas?",
  answers: [
    { text: "Evaporation", correct: true },
    { text: "Condensation", correct: false },
    { text: "Melting", correct: false },
    { text: "Freezing", correct: false }
  ]
},
{
  question: "Which part of the eye controls the amount of light that enters?",
  answers: [
    { text: "Pupil", correct: true },
    { text: "Lens", correct: false },
    { text: "Cornea", correct: false },
    { text: "Iris", correct: false }
  ]
},
{
  question: "Which instrument is used to measure temperature?",
  answers: [
    { text: "Thermometer", correct: true },
    { text: "Barometer", correct: false },
    { text: "Hygrometer", correct: false },
    { text: "Anemometer", correct: false }
  ]
}

  
  // You can continue adding up to 50 here
];


const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  scoreSection.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  if (correct) score++;

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function setStatusClass(element, correct) {
  element.style.backgroundColor = correct ? "#00ffae" : "#ff4d4d";
  element.style.color = "#000";
}

function showScore() {
  resetState();
  scoreSection.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerText = "Play Again";
  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});

startGame();
