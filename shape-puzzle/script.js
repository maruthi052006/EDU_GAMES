const shapes = [
  { name: "circle", symbol: "⚪", color: "warning", label: "Circle" },
  { name: "square", symbol: "⬜", color: "primary", label: "Square" },
  { name: "triangle", symbol: "🔺", color: "success", label: "Triangle" },
  { name: "oval", symbol: "🟣", color: "info", label: "Oval" },
  { name: "rectangle", symbol: "🟪", color: "dark", label: "Rectangle" },
  { name: "star", symbol: "⭐", color: "secondary", label: "Star" },
  { name: "pentagon", symbol: "🛑", color: "danger", label: "Pentagon" },
  { name: "diamond", symbol: "🔷", color: "primary", label: "Diamond" },
  { name: "cube", symbol: "🧊", color: "info", label: "Cube" }
];


let placed = 0;

const dropZone = document.getElementById("dropZone");
const dragZone = document.getElementById("dragZone");
const result = document.getElementById("result");

function createSlotsAndShapes() {
  dropZone.innerHTML = "";
  dragZone.innerHTML = "";
  placed = 0;
  result.textContent = "";

  // Create slots
  shapes.forEach(shape => {
    const slot = document.createElement("div");
    slot.className = "shape-slot";
    slot.setAttribute("data-shape", shape.name);
    slot.textContent = shape.symbol;

    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", e => handleDrop(e, slot));
    dropZone.appendChild(slot);
  });

  // Shuffle and create draggable shapes
  const shuffled = [...shapes].sort(() => Math.random() - 0.5);
  shuffled.forEach(shape => {
    const div = document.createElement("div");
    div.className = `draggable-shape bg-${shape.color} text-${shape.color === 'warning' ? 'dark' : 'white'}`;
    div.setAttribute("draggable", "true");
    div.setAttribute("data-shape", shape.name);
    div.textContent = shape.label;

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("shape", shape.name);
    });

    dragZone.appendChild(div);
  });
}

function handleDrop(e, slot) {
  const draggedShape = e.dataTransfer.getData("shape");
  const correctShape = slot.getAttribute("data-shape");

  if (draggedShape === correctShape && !slot.classList.contains("matched")) {
    slot.textContent = draggedShape.charAt(0).toUpperCase() + draggedShape.slice(1);
    slot.classList.add("matched");
    placed++;

    if (placed === shapes.length) {
      result.textContent = "🎉 Great job! All shapes matched.";
      result.className = "text-success fs-5 mt-3";
    }
  } else if (!slot.classList.contains("matched")) {
    result.textContent = "❌ Oops! Try a different slot.";
    result.className = "text-danger fs-5 mt-3";
  }
}

function resetGame() {
  createSlotsAndShapes();
}

window.onload = createSlotsAndShapes;
