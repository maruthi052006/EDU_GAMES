const emojis = ['🐶', '🐱', '🍎', '🍌', '🚗', '🚲', '🌞', '🌛', '🐸', '🐵', '🍇', '🍓', '🚀', '✈️', '🌈', '⚽'];
let cardValues = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  const board = document.getElementById("gameBoard");
  board.innerHTML = "";
  const pairCount = 8 + Math.floor(Math.random() * 4); // 8–11 pairs
  cardValues = shuffle([...emojis.slice(0, pairCount), ...emojis.slice(0, pairCount)]);
  matchedPairs = 0;
  document.getElementById("result").textContent = "";
  firstCard = secondCard = null;
  lockBoard = false;

  cardValues.forEach((emoji) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = emoji;
    card.onclick = () => flipCard(card);
    board.appendChild(card);
  });
}

function flipCard(card) {
  if (lockBoard || card.classList.contains("flipped")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    lockBoard = true;
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === cardValues.length / 2) {
      document.getElementById("result").textContent = "🎉 You matched all pairs!";
    }
  } else {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }

  firstCard = secondCard = null;
  lockBoard = false;
}

window.onload = startGame;
