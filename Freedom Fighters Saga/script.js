const questions = [
  {
    question: "Who is known as the Father of the Nation in India?",
    options: ["Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which freedom fighter formed the 'Azad Hind Fauj'?",
    options: ["Lala Lajpat Rai", "Bal Gangadhar Tilak", "Subhas Chandra Bose", "Bhagat Singh"],
    answer: "Subhas Chandra Bose"
  },
  {
    question: "Which revolutionary was hanged at the age of 23?",
    options: ["Chandrashekhar Azad", "Bhagat Singh", "Sukhdev", "Rajguru"],
    answer: "Bhagat Singh"
  },
  {
    question: "What slogan is associated with Subhas Chandra Bose?",
    options: ["Jai Hind", "Do or Die", "Inquilab Zindabad", "Vande Mataram"],
    answer: "Give me blood and I will give you freedom"
  },
  {
    question: "Which movement did Mahatma Gandhi launch in 1942?",
    options: ["Non-Cooperation Movement", "Civil Disobedience", "Quit India Movement", "Salt Satyagraha"],
    answer: "Quit India Movement"
  },
  {
    question: "Who was the first woman to become President of the Indian National Congress?",
    options: ["Indira Gandhi", "Sarojini Naidu", "Annie Besant", "Rani Lakshmibai"],
    answer: "Annie Besant"
  },
  {
    question: "Where did the Jallianwala Bagh massacre take place?",
    options: ["Delhi", "Amritsar", "Lucknow", "Ahmedabad"],
    answer: "Amritsar"
  },
  {
    question: "Which British officer was responsible for the Jallianwala Bagh massacre?",
    options: ["Lord Curzon", "General Dyer", "Lord Mountbatten", "Winston Churchill"],
    answer: "General Dyer"
  },
  {
    question: "Which freedom fighter was also a poet and wrote ‘Sarfaroshi ki Tamanna’?",
    options: ["Ram Prasad Bismil", "Sukhdev", "Rajguru", "Chandrashekhar Azad"],
    answer: "Ram Prasad Bismil"
  },
  {
    question: "Who said 'Swaraj is my birthright and I shall have it'?",
    options: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Jawaharlal Nehru", "Dadabhai Naoroji"],
    answer: "Bal Gangadhar Tilak"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.addEventListener('click', () => checkAnswer(option));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.textContent = "🎉 Quiz Completed!";
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

nextBtn.addEventListener('click', showQuestion);

// Start the game
showQuestion();
