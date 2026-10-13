const questions= [
  {
    question: "Who was the founder of the Maurya Empire?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
    answer: "Chandragupta Maurya"
  },
  {
    question: "The capital city of the Chola Dynasty was:",
    options: ["Madurai", "Tanjore", "Kanchipuram", "Uraiyur"],
    answer: "Tanjore"
  },
  {
    question: "Who wrote Arthashastra?",
    options: ["Kalidasa", "Kautilya", "Vishnu Sharma", "Banabhatta"],
    answer: "Kautilya"
  },
  {
    question: "Ashoka was famous for:",
    options: ["His wars", "His wealth", "His Buddhist principles", "His conquests"],
    answer: "His Buddhist principles"
  },
  {
    question: "Which South Indian king built the Brihadeeswarar Temple?",
    options: ["Rajaraja Chola I", "Raja Ravi Varma", "Krishna Deva Raya", "Narasimha"],
    answer: "Rajaraja Chola I"
  },
  {
    question: "Pallava kings were known for their:",
    options: ["Temples", "Poetry", "Battles", "Maritime trade"],
    answer: "Temples"
  },
  {
    question: "The Vijayanagara Empire was founded by:",
    options: ["Harihara and Bukka", "Raja Raja Chola", "Krishna Deva Raya", "Akbar"],
    answer: "Harihara and Bukka"
  },
  {
    question: "Which king famously fought against Alexander the Great?",
    options: ["Chandragupta", "Dhanananda", "Porus", "Ashoka"],
    answer: "Porus"
  },
  {
    question: "The Gupta period is known as the:",
    options: ["Iron Age", "Golden Age", "Medieval Age", "Stone Age"],
    answer: "Golden Age"
  },
  {
    question: "Which dynasty ruled Tamil Nadu before the Cholas?",
    options: ["Pandya", "Cheras", "Pallavas", "Satavahanas"],
    answer: "Pallavas"
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: ["Chennai", "Madurai", "Coimbatore", "Tiruchirapalli"],
    answer: "Chennai"
  },
  {
    question: "Which river flows through Tamil Nadu and is known as the 'Ganga of the South'?",
    options: ["Godavari", "Kaveri", "Krishna", "Narmada"],
    answer: "Kaveri"
  },
  {
    question: "Who was the first Indian President from Tamil Nadu?",
    options: ["Rajendra Prasad", "Sarvepalli Radhakrishnan", "Zakir Hussain", "APJ Abdul Kalam"],
    answer: "Sarvepalli Radhakrishnan"
  },
  {
    question: "Which ancient port city is located in Tamil Nadu?",
    options: ["Lothal", "Kaveripattinam", "Mohenjo Daro", "Dholavira"],
    answer: "Kaveripattinam"
  },
  {
    question: "When did India become a republic?",
    options: ["1947", "1950", "1952", "1962"],
    answer: "1950"
  },
  {
    question: "Which monument is known as the symbol of love?",
    options: ["India Gate", "Charminar", "Taj Mahal", "Qutub Minar"],
    answer: "Taj Mahal"
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"],
    answer: "Indira Gandhi"
  },
  {
    question: "Which freedom fighter is known as the 'Father of the Nation'?",
    options: ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "In which year was the Tamil Nadu state formed?",
    options: ["1956", "1969", "1950", "1947"],
    answer: "1956"
  },
  {
    question: "Which temple in Tamil Nadu is a UNESCO World Heritage site?",
    options: ["Meenakshi Temple", "Ramanathaswamy Temple", "Brihadeeswarar Temple", "Kapaleeshwarar Temple"],
    answer: "Brihadeeswarar Temple"
  },
  {
    question: "Which Indian state shares its border with Tamil Nadu in the north?",
    options: ["Kerala", "Karnataka", "Andhra Pradesh", "Telangana"],
    answer: "Andhra Pradesh"
  },
  {
    question: "The Indian Constitution came into force in which year?",
    options: ["1947", "1949", "1950", "1952"],
    answer: "1950"
  },
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Chennai", "Mumbai", "Bangalore", "Delhi"],
    answer: "Bangalore"
  },
  {
    question: "Which famous movement did Gandhiji lead in 1930?",
    options: ["Quit India Movement", "Civil Disobedience Movement", "Non-Cooperation Movement", "Salt March"],
    answer: "Salt March"
  },
  {
    question: "Which empire ruled over Tamil Nadu before the British?",
    options: ["Mughals", "Marathas", "Cholas", "Rajputs"],
    answer: "Cholas"
  },
  {
    question: "Which dam is built across the Kaveri River?",
    options: ["Mettur Dam", "Sardar Sarovar Dam", "Hirakud Dam", "Tehri Dam"],
    answer: "Mettur Dam"
  },
  {
    question: "Who is known as the 'Iron Man of India'?",
    options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Nehru", "Lal Bahadur Shastri"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which Indian leader gave the slogan 'Jai Jawan, Jai Kisan'?",
    options: ["Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Gandhi"],
    answer: "Lal Bahadur Shastri"
  },
  {
    question: "Which state is known as the 'Land of the Rising Sun' in India?",
    options: ["Tamil Nadu", "Assam", "Arunachal Pradesh", "Sikkim"],
    answer: "Arunachal Pradesh"
  },
  {
    question: "Which sea is to the east of Tamil Nadu?",
    options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Red Sea"],
    answer: "Bay of Bengal"
  },
  {
    question: "What is the currency of India?",
    options: ["Rupee", "Dollar", "Pound", "Euro"],
    answer: "Rupee"
  },
  {
    question: "Which state is famous for its backwaters?",
    options: ["Tamil Nadu", "Kerala", "Goa", "Odisha"],
    answer: "Kerala"
  },
  {
    question: "Which Indian leader is called the 'Missile Man'?",
    options: ["Vikram Sarabhai", "Homi Bhabha", "APJ Abdul Kalam", "Narendra Modi"],
    answer: "APJ Abdul Kalam"
  },
  {
    question: "In which year did the British leave India?",
    options: ["1945", "1947", "1950", "1952"],
    answer: "1947"
  },
  {
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    options: ["Pongal", "Holi", "Diwali", "Navratri"],
    answer: "Diwali"
  },
  {
    question: "Which Indian state is known for producing tea?",
    options: ["Assam", "Gujarat", "Punjab", "Bihar"],
    answer: "Assam"
  },
  {
    question: "Who built the Qutub Minar?",
    options: ["Akbar", "Qutub-ud-din Aibak", "Shah Jahan", "Babur"],
    answer: "Qutub-ud-din Aibak"
  },
  {
    question: "Which freedom fighter was hanged at the age of 23?",
    options: ["Gandhi", "Bhagat Singh", "Subhas Chandra Bose", "Jawaharlal Nehru"],
    answer: "Bhagat Singh"
  },
  {
    question: "Which dance form is classical to Tamil Nadu?",
    options: ["Kathak", "Bharatanatyam", "Odissi", "Mohiniyattam"],
    answer: "Bharatanatyam"
  },
  {
    question: "What is the name of the highest civilian award in India?",
    options: ["Padma Shri", "Bharat Ratna", "Padma Bhushan", "Ashoka Chakra"],
    answer: "Bharat Ratna"
  },
  {
    question: "Which Indian state has the longest coastline?",
    options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Kerala"],
    answer: "Gujarat"
  },
  {
    question: "Where is the Parliament of India located?",
    options: ["Mumbai", "Delhi", "Kolkata", "Hyderabad"],
    answer: "Delhi"
  },
  {
    question: "Which Indian city is known as the 'City of Joy'?",
    options: ["Chennai", "Hyderabad", "Kolkata", "Bangalore"],
    answer: "Kolkata"
  },
  {
    question: "Which is the highest mountain peak in India?",
    options: ["Mount Everest", "Kanchenjunga", "Nanda Devi", "Anamudi"],
    answer: "Kanchenjunga"
  },
  {
    question: "Who was the first Indian to go to space?",
    options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"],
    answer: "Rakesh Sharma"
  },
  {
    question: "Which famous Tamil Nadu leader started the Self-Respect Movement?",
    options: ["Kamarajar", "M.G. Ramachandran", "Periyar", "C.N. Annadurai"],
    answer: "Periyar"
  },
  {
    question: "What is the smallest state in India by area?",
    options: ["Goa", "Sikkim", "Tripura", "Manipur"],
    answer: "Goa"
  },
  {
    question: "Which ancient university existed in Bihar?",
    options: ["Nalanda", "Takshashila", "Vikramashila", "Kanchipuram"],
    answer: "Nalanda"
  },
  {
    question: "What is the national song of India?",
    options: ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Ae Mere Watan Ke Logon"],
    answer: "Vande Mataram"
  },
  {
    question: "What is India's national fruit?",
    options: ["Banana", "Mango", "Apple", "Guava"],
    answer: "Mango"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selectedBtn, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  resultContainer.style.display = "block";
  resultText.textContent = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestion;
