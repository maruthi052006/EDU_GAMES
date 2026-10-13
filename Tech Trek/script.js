const questions = [
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Which of the following is a renewable source of energy?",
    answers: [
      { text: "Coal", correct: false },
      { text: "Solar Power", correct: true },
      { text: "Petroleum", correct: false },
      { text: "Natural Gas", correct: false }
    ]
  },
  {
    question: "What does 'reduce' in 'reduce, reuse, recycle' mean?",
    answers: [
      { text: "Use again", correct: false },
      { text: "Throw away", correct: false },
      { text: "Use less", correct: true },
      { text: "Fix items", correct: false }
    ]
  },
  {
    question: "Which of these is most harmful to oceans?",
    answers: [
      { text: "Paper", correct: false },
      { text: "Plastic", correct: true },
      { text: "Sand", correct: false },
      { text: "Leaves", correct: false }
    ]
  },
  {
    question: "What can you do to help the environment?",
    answers: [
      { text: "Leave lights on", correct: false },
      { text: "Recycle waste", correct: true },
      { text: "Use more plastic", correct: false },
      { text: "Ignore pollution", correct: false }
    ]
  },
  {
    question: "Which part of the plant absorbs water from the soil?",
    answers: [
      { text: "Stem", correct: false },
      { text: "Root", correct: true },
      { text: "Leaf", correct: false },
      { text: "Flower", correct: false }
    ]
  },
  {
    question: "What force pulls things toward Earth?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Friction", correct: false },
      { text: "Gravity", correct: true },
      { text: "Electricity", correct: false }
    ]
  },
  {
    question: "Which organ pumps blood throughout the body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "What do bees collect from flowers?",
    answers: [
      { text: "Honey", correct: false },
      { text: "Pollen", correct: true },
      { text: "Water", correct: false },
      { text: "Soil", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "100°C", correct: true },
      { text: "50°C", correct: false },
      { text: "200°C", correct: false },
      { text: "0°C", correct: false }
    ]
  },
  {
    question: "What do you call animals that eat only plants?",
    answers: [
      { text: "Carnivores", correct: false },
      { text: "Omnivores", correct: false },
      { text: "Herbivores", correct: true },
      { text: "Scavengers", correct: false }
    ]
  },
  {
    question: "What causes day and night?",
    answers: [
      { text: "Moonlight", correct: false },
      { text: "Earth's rotation", correct: true },
      { text: "Sun's movement", correct: false },
      { text: "Clouds", correct: false }
    ]
  },
  {
    question: "Which gas do humans breathe in?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false }
    ]
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    question: "Which sense is used for hearing?",
    answers: [
      { text: "Eyes", correct: false },
      { text: "Nose", correct: false },
      { text: "Ears", correct: true },
      { text: "Skin", correct: false }
    ]
  },
  {
    question: "What is the center of our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Moon", correct: false },
      { text: "Sun", correct: true },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which part of the body helps us to breathe?",
    answers: [
      { text: "Lungs", correct: true },
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Stomach", correct: false }
    ]
  },
  {
    question: "Which natural satellite orbits the Earth?",
    answers: [
      { text: "Sun", correct: false },
      { text: "Moon", correct: true },
      { text: "Venus", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which sense helps you taste food?",
    answers: [
      { text: "Tongue", correct: true },
      { text: "Eyes", correct: false },
      { text: "Ears", correct: false },
      { text: "Nose", correct: false }
    ]
  },
  {
    question: "What do you call water in the form of gas?",
    answers: [
      { text: "Steam", correct: true },
      { text: "Ice", correct: false },
      { text: "Liquid", correct: false },
      { text: "Dew", correct: false }
    ]
  },
  {
  question: "What is the main source of energy for the Earth?",
  answers: [
    { text: "The Moon", correct: false },
    { text: "The Sun", correct: true },
    { text: "Stars", correct: false },
    { text: "Volcanoes", correct: false }
  ]
},
{
  question: "Which part of the plant conducts photosynthesis?",
  answers: [
    { text: "Root", correct: false },
    { text: "Leaf", correct: true },
    { text: "Stem", correct: false },
    { text: "Flower", correct: false }
  ]
},
{
  question: "Which planet has rings?",
  answers: [
    { text: "Venus", correct: false },
    { text: "Saturn", correct: true },
    { text: "Mars", correct: false },
    { text: "Mercury", correct: false }
  ]
},
{
  question: "What is the boiling point of water?",
  answers: [
    { text: "0°C", correct: false },
    { text: "100°C", correct: true },
    { text: "50°C", correct: false },
    { text: "200°C", correct: false }
  ]
},
{
  question: "Which gas is most abundant in the Earth's atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: false },
    { text: "Nitrogen", correct: true },
    { text: "Hydrogen", correct: false }
  ]
},
{
  question: "What is the process of liquid changing to gas called?",
  answers: [
    { text: "Condensation", correct: false },
    { text: "Evaporation", correct: true },
    { text: "Precipitation", correct: false },
    { text: "Melting", correct: false }
  ]
},
{
  question: "Which animal is known to have the strongest bite?",
  answers: [
    { text: "Lion", correct: false },
    { text: "Crocodile", correct: true },
    { text: "Shark", correct: false },
    { text: "Bear", correct: false }
  ]
},
{
  question: "What force pulls objects toward Earth?",
  answers: [
    { text: "Magnetism", correct: false },
    { text: "Gravity", correct: true },
    { text: "Friction", correct: false },
    { text: "Air Pressure", correct: false }
  ]
},
{
  question: "Which organ pumps blood in the body?",
  answers: [
    { text: "Liver", correct: false },
    { text: "Heart", correct: true },
    { text: "Brain", correct: false },
    { text: "Kidney", correct: false }
  ]
},
{
  question: "Which vitamin do we get from sunlight?",
  answers: [
    { text: "Vitamin A", correct: false },
    { text: "Vitamin C", correct: false },
    { text: "Vitamin D", correct: true },
    { text: "Vitamin B", correct: false }
  ]
},
{
  question: "Which instrument is used to measure temperature?",
  answers: [
    { text: "Barometer", correct: false },
    { text: "Thermometer", correct: true },
    { text: "Hygrometer", correct: false },
    { text: "Anemometer", correct: false }
  ]
},
{
  question: "Which planet is called the 'Red Planet'?",
  answers: [
    { text: "Earth", correct: false },
    { text: "Mars", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Neptune", correct: false }
  ]
},
{
  question: "Which animal is the largest mammal?",
  answers: [
    { text: "Elephant", correct: false },
    { text: "Blue Whale", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Hippopotamus", correct: false }
  ]
},
{
  question: "What part of the body helps you to breathe?",
  answers: [
    { text: "Heart", correct: false },
    { text: "Lungs", correct: true },
    { text: "Stomach", correct: false },
    { text: "Brain", correct: false }
  ]
},
{
  question: "Which of these is not a sense organ?",
  answers: [
    { text: "Eye", correct: false },
    { text: "Nose", correct: false },
    { text: "Ear", correct: false },
    { text: "Heart", correct: true }
  ]
},
{
  question: "How many legs do insects have?",
  answers: [
    { text: "4", correct: false },
    { text: "6", correct: true },
    { text: "8", correct: false },
    { text: "10", correct: false }
  ]
},
{
  question: "Which part of the body is the control center?",
  answers: [
    { text: "Brain", correct: true },
    { text: "Heart", correct: false },
    { text: "Lungs", correct: false },
    { text: "Stomach", correct: false }
  ]
},
{
  question: "Which of these helps plants to grow?",
  answers: [
    { text: "Moonlight", correct: false },
    { text: "Sunlight", correct: true },
    { text: "Wind", correct: false },
    { text: "Sand", correct: false }
  ]
},
{
  question: "How many planets are there in our solar system?",
  answers: [
    { text: "7", correct: false },
    { text: "8", correct: true },
    { text: "9", correct: false },
    { text: "10", correct: false }
  ]
},
{
  question: "What is the water cycle process where clouds form?",
  answers: [
    { text: "Evaporation", correct: false },
    { text: "Condensation", correct: true },
    { text: "Precipitation", correct: false },
    { text: "Sublimation", correct: false }
  ]
},
{
  question: "Which simple machine is used to lift heavy objects?",
  answers: [
    { text: "Pulley", correct: true },
    { text: "Screw", correct: false },
    { text: "Wheel", correct: false },
    { text: "Lever", correct: false }
  ]
},
{
  question: "Which animal lays eggs?",
  answers: [
    { text: "Dog", correct: false },
    { text: "Cat", correct: false },
    { text: "Snake", correct: true },
    { text: "Cow", correct: false }
  ]
},
{
  question: "What is the center of an atom called?",
  answers: [
    { text: "Electron", correct: false },
    { text: "Proton", correct: false },
    { text: "Nucleus", correct: true },
    { text: "Neutron", correct: false }
  ]
},
{
  question: "Which sense is used to taste food?",
  answers: [
    { text: "Eyes", correct: false },
    { text: "Tongue", correct: true },
    { text: "Ears", correct: false },
    { text: "Skin", correct: false }
  ]
},
{
  question: "Which part of the plant absorbs water?",
  answers: [
    { text: "Stem", correct: false },
    { text: "Root", correct: true },
    { text: "Leaf", correct: false },
    { text: "Flower", correct: false }
  ]
},
{
  question: "What do bees collect from flowers?",
  answers: [
    { text: "Leaves", correct: false },
    { text: "Pollen", correct: true },
    { text: "Water", correct: false },
    { text: "Fruit", correct: false }
  ]
}

  // ... (30 more questions will continue in next message due to length)
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
  answerButtonsElement.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function showScore() {
  scoreSection.classList.remove("hidden");
  scoreText.innerText = `You got ${score} out of ${questions.length} correct!`;
  questionElement.innerText = "";
  answerButtonsElement.innerHTML = "";
  nextButton.classList.add("hidden");
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
  handleNextButton();
});

startGame();
