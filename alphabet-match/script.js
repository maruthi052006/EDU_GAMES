const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const draggablesContainer = document.getElementById('draggables');
const dropzonesContainer = document.getElementById('dropzones');
const result = document.getElementById('result');
const progress = document.getElementById('progress');

let matched = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function resetGame() {
  draggablesContainer.innerHTML = '';
  dropzonesContainer.innerHTML = '';
  matched = 0;
  progress.textContent = `0 / 26 Matched`;
  result.textContent = '';
  loadGame();
}

function loadGame() {
  const shuffled = shuffle([...alphabet]);

  shuffled.forEach(letter => {
    const drag = document.createElement('div');
    drag.className = 'drag-box';
    drag.setAttribute('draggable', 'true');
    drag.id = letter;
    drag.textContent = letter;
    draggablesContainer.appendChild(drag);
  });

  shuffled.forEach(letter => {
    const drop = document.createElement('div');
    drop.className = 'drop-box';
    drop.dataset.letter = letter;
    drop.textContent = letter.toLowerCase();
    dropzonesContainer.appendChild(drop);
  });

  initDragDrop();
}

function initDragDrop() {
  const drags = document.querySelectorAll('.drag-box');
  const drops = document.querySelectorAll('.drop-box');

  drags.forEach(drag => {
    drag.addEventListener('dragstart', () => {
      drag.classList.add('dragging');
    });
    drag.addEventListener('dragend', () => {
      drag.classList.remove('dragging');
    });
  });

  drops.forEach(drop => {
    drop.addEventListener('dragover', e => e.preventDefault());
    drop.addEventListener('drop', () => {
      const dragged = document.querySelector('.dragging');
      if (!dragged) return;

      if (dragged.id === drop.dataset.letter) {
        drop.textContent = dragged.id;
        drop.classList.add('correct');
        dragged.remove();
        matched++;
        progress.textContent = `${matched} / 26 Matched`;
        result.textContent = "✅ Great job!";
        result.className = "text-success fs-4 mt-3";

        if (matched === 26) {
          result.textContent = "🎉 You matched all letters!";
        }
      } else {
        drop.classList.add('wrong');
        setTimeout(() => drop.classList.remove('wrong'), 1000);
        result.textContent = "❌ Try again!";
        result.className = "text-danger fs-4 mt-3";
      }
    });
  });
}

window.onload = loadGame;
