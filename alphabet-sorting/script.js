const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let currentLetters = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame(length) {
  currentLetters = alphabet.slice(0, length);
  initTiles();
}

function initTiles() {
  const shuffled = shuffle([...currentLetters]);
  const container = $("#sortable");
  container.empty();

  shuffled.forEach(letter => {
    const tile = $(`<div class="letter-tile">${letter}</div>`);
    container.append(tile);
  });

  container.sortable();
  $("#feedback").text("");
}

function checkOrder() {
  const userOrder = [];
  $("#sortable .letter-tile").each(function () {
    userOrder.push($(this).text());
  });

  const correct = userOrder.join("") === currentLetters.join("");
  const feedback = $("#feedback");

  if (correct) {
    feedback.text("🎉 Correct Order! Well done!")
      .removeClass().addClass("text-success fw-bold");

    // Optional: Confetti animation or modal
  } else {
    feedback.text("❌ Try Again!").removeClass().addClass("text-danger fw-bold");
  }
}

function shuffleAgain() {
  initTiles();
}
