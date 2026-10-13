const questions = [
  {
    question: "Which of these animals is a herbivore?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: true },
      { text: "Eagle", correct: false },
      { text: "Snake", correct: false }
    ]
  },
  {
    question: "Which ecosystem is home to polar bears?",
    answers: [
      { text: "Desert", correct: false },
      { text: "Rainforest", correct: false },
      { text: "Arctic", correct: true },
      { text: "Savannah", correct: false }
    ]
  },
  {
    question: "What do we call the process where plants make their food?",
    answers: [
      { text: "Digestion", correct: false },
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Fermentation", correct: false }
    ]
  },
  {
    question: "Which of the following helps reduce pollution?",
    answers: [
      { text: "Using plastic bags", correct: false },
      { text: "Planting trees", correct: true },
      { text: "Wasting water", correct: false },
      { text: "Burning garbage", correct: false }
    ]
  },
  {
    question: "What is the main source of energy for life on Earth?",
    answers: [
      { text: "The Moon", correct: false },
      { text: "The Sun", correct: true },
      { text: "Wind", correct: false },
      { text: "Fire", correct: false }
    ]
  },
  {
    question: "Which part of the plant carries water and nutrients from roots?",
    answers: [
      { text: "Leaves", correct: false },
      { text: "Stem", correct: true },
      { text: "Flower", correct: false },
      { text: "Fruit", correct: false }
    ]
  },
  {
    question: "What do we call animals that eat both plants and meat?",
    answers: [
      { text: "Herbivores", correct: false },
      { text: "Carnivores", correct: false },
      { text: "Omnivores", correct: true },
      { text: "Insectivores", correct: false }
    ]
  },
  {
    question: "Which gas is most important for plants to make food?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Helium", correct: false }
    ]
  },
  {
    question: "Which animal is known for changing colors?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Chameleon", correct: true },
      { text: "Elephant", correct: false },
      { text: "Frog", correct: false }
    ]
  },
  {
    question: "Which layer of Earth contains soil and living organisms?",
    answers: [
      { text: "Core", correct: false },
      { text: "Crust", correct: true },
      { text: "Mantle", correct: false },
      { text: "Inner Core", correct: false }
    ]
  },
    {
    question: "Which of these animals lives in water and on land?",
    answers: [
      { text: "Frog", correct: true },
      { text: "Tiger", correct: false },
      { text: "Eagle", correct: false },
      { text: "Camel", correct: false }
    ]
  },
  {
    question: "Which of these is a renewable resource?",
    answers: [
      { text: "Coal", correct: false },
      { text: "Wind", correct: true },
      { text: "Petrol", correct: false },
      { text: "Plastic", correct: false }
    ]
  },
  {
    question: "Which season comes after summer?",
    answers: [
      { text: "Winter", correct: false },
      { text: "Spring", correct: false },
      { text: "Monsoon", correct: true },
      { text: "Autumn", correct: false }
    ]
  },
  {
    question: "Which natural disaster shakes the ground?",
    answers: [
      { text: "Flood", correct: false },
      { text: "Earthquake", correct: true },
      { text: "Cyclone", correct: false },
      { text: "Volcano", correct: false }
    ]
  },
  {
    question: "Which organ helps birds fly?",
    answers: [
      { text: "Legs", correct: false },
      { text: "Beak", correct: false },
      { text: "Wings", correct: true },
      { text: "Tail", correct: false }
    ]
  },
  {
    question: "Which is the tallest animal?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Horse", correct: false },
      { text: "Lion", correct: false }
    ]
  },
  {
    question: "Which bird is known for its colorful feathers?",
    answers: [
      { text: "Crow", correct: false },
      { text: "Peacock", correct: true },
      { text: "Sparrow", correct: false },
      { text: "Pigeon", correct: false }
    ]
  },
  {
    question: "What is the role of bees in nature?",
    answers: [
      { text: "Pollination", correct: true },
      { text: "Digging", correct: false },
      { text: "Weaving", correct: false },
      { text: "Hunting", correct: false }
    ]
  },
  {
    question: "Where do penguins live?",
    answers: [
      { text: "Desert", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Mountains", correct: false },
      { text: "Jungle", correct: false }
    ]
  },
  {
    question: "Which of the following is a carnivore?",
    answers: [
      { text: "Cow", correct: false },
      { text: "Lion", correct: true },
      { text: "Goat", correct: false },
      { text: "Deer", correct: false }
    ]
  },
  {
    question: "What do you call a place where animals are protected?",
    answers: [
      { text: "Mall", correct: false },
      { text: "Sanctuary", correct: true },
      { text: "Museum", correct: false },
      { text: "Temple", correct: false }
    ]
  },
  {
    question: "Which planet is known as the blue planet?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Earth", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Which bird cannot fly?",
    answers: [
      { text: "Sparrow", correct: false },
      { text: "Ostrich", correct: true },
      { text: "Crow", correct: false },
      { text: "Parrot", correct: false }
    ]
  },
  {
    question: "Which natural resource do we drink every day?",
    answers: [
      { text: "Air", correct: false },
      { text: "Water", correct: true },
      { text: "Sand", correct: false },
      { text: "Oil", correct: false }
    ]
  },
  {
    question: "Which of these is not a tree?",
    answers: [
      { text: "Mango", correct: false },
      { text: "Bamboo", correct: false },
      { text: "Rose", correct: true },
      { text: "Neem", correct: false }
    ]
  },
  {
    question: "Which animal is known as the ship of the desert?",
    answers: [
      { text: "Horse", correct: false },
      { text: "Camel", correct: true },
      { text: "Ox", correct: false },
      { text: "Donkey", correct: false }
    ]
  },
  {
    question: "Which of these is a source of clean energy?",
    answers: [
      { text: "Coal", correct: false },
      { text: "Solar power", correct: true },
      { text: "Diesel", correct: false },
      { text: "Petrol", correct: false }
    ]
  },
  {
    question: "Which bird is a symbol of peace?",
    answers: [
      { text: "Peacock", correct: false },
      { text: "Dove", correct: true },
      { text: "Crow", correct: false },
      { text: "Owl", correct: false }
    ]
  },
  {
    question: "What causes day and night?",
    answers: [
      { text: "Moon's movement", correct: false },
      { text: "Earth's rotation", correct: true },
      { text: "Sun's movement", correct: false },
      { text: "Clouds", correct: false }
    ]
  },
  {
    question: "What is the main component of air that we breathe?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What do plants need to grow?",
    answers: [
      { text: "Milk, sunlight, soil", correct: false },
      { text: "Water, sunlight, soil", correct: true },
      { text: "Air, stones, darkness", correct: false },
      { text: "Plastic, water, wind", correct: false }
    ]
  },
  {
    question: "What do we call water falling from clouds?",
    answers: [
      { text: "Fog", correct: false },
      { text: "Snow", correct: false },
      { text: "Rain", correct: true },
      { text: "Steam", correct: false }
    ]
  },
  {
    question: "Which part of the plant grows underground?",
    answers: [
      { text: "Flower", correct: false },
      { text: "Root", correct: true },
      { text: "Stem", correct: false },
      { text: "Leaf", correct: false }
    ]
  },
  {
    question: "Which of these animals lays eggs?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: false },
      { text: "Turtle", correct: true },
      { text: "Goat", correct: false }
    ]
  },
  {
    question: "Which insect makes honey?",
    answers: [
      { text: "Butterfly", correct: false },
      { text: "Mosquito", correct: false },
      { text: "Honeybee", correct: true },
      { text: "Ant", correct: false }
    ]
  },
  {
    question: "Which tree gives us oxygen and shade?",
    answers: [
      { text: "Cactus", correct: false },
      { text: "Banyan", correct: true },
      { text: "Mushroom", correct: false },
      { text: "Fern", correct: false }
    ]
  },
  {
    question: "Where do fish live?",
    answers: [
      { text: "Sky", correct: false },
      { text: "Land", correct: false },
      { text: "Water", correct: true },
      { text: "Tree", correct: false }
    ]
  },
  {
    question: "What do cows eat?",
    answers: [
      { text: "Meat", correct: false },
      { text: "Insects", correct: false },
      { text: "Grass", correct: true },
      { text: "Other animals", correct: false }
    ]
  },
  {
    question: "Which of these is not found in a forest?",
    answers: [
      { text: "Trees", correct: false },
      { text: "Animals", correct: false },
      { text: "Buildings", correct: true },
      { text: "Birds", correct: false }
    ]
  },
  {
    question: "What is a habitat?",
    answers: [
      { text: "An animal's name", correct: false },
      { text: "Where an animal lives", correct: true },
      { text: "A food item", correct: false },
      { text: "An experiment", correct: false }
    ]
  },
  {
    question: "What do we call the young one of a dog?",
    answers: [
      { text: "Kitten", correct: false },
      { text: "Puppy", correct: true },
      { text: "Calf", correct: false },
      { text: "Cub", correct: false }
    ]
  },
  {
    question: "Which flower is called the 'king of flowers'?",
    answers: [
      { text: "Sunflower", correct: false },
      { text: "Lotus", correct: false },
      { text: "Rose", correct: true },
      { text: "Lily", correct: false }
    ]
  },
  {
    question: "What do we call the footprints of animals?",
    answers: [
      { text: "Steps", correct: false },
      { text: "Tracks", correct: true },
      { text: "Signs", correct: false },
      { text: "Paths", correct: false }
    ]
  },
  {
    question: "Which animal has a long trunk?",
    answers: [
      { text: "Deer", correct: false },
      { text: "Elephant", correct: true },
      { text: "Zebra", correct: false },
      { text: "Bear", correct: false }
    ]
  },
  {
    question: "Which part of the plant makes seeds?",
    answers: [
      { text: "Flower", correct: true },
      { text: "Leaf", correct: false },
      { text: "Stem", correct: false },
      { text: "Root", correct: false }
    ]
  },
  {
    question: "Which of the following is not alive?",
    answers: [
      { text: "Tree", correct: false },
      { text: "Stone", correct: true },
      { text: "Bird", correct: false },
      { text: "Fish", correct: false }
    ]
  }
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  selectedBtn.style.backgroundColor = isCorrect ? "#4caf50" : "#f44336";

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.style.backgroundColor = "#4caf50";
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `Great job, Eco Explorer! 🌿`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}
startQuiz();
