const sets = [
  { items: ["Dog", "Cat", "Banana", "Rabbit"], odd: "Banana" },
  { items: ["Car", "Bike", "Plane", "Apple"], odd: "Apple" },
  { items: ["Sun", "Moon", "Star", "Carrot"], odd: "Carrot" },
  { items: ["Rose", "Lily", "Tulip", "Chair"], odd: "Chair" },
  { items: ["Red", "Blue", "Green", "Table"], odd: "Table" },
  { items: ["Lion", "Tiger", "Elephant", "Orange"], odd: "Orange" },
  { items: ["Math", "Science", "History", "Burger"], odd: "Burger" },
  { items: ["Guitar", "Piano", "Drums", "Mango"], odd: "Mango" },
  { items: ["Circle", "Square", "Triangle", "Pizza"], odd: "Pizza" },
  { items: ["Bat", "Ball", "Wicket", "Banana"], odd: "Banana" },
  { items: ["Shirt", "Pants", "Shoes", "Strawberry"], odd: "Strawberry" },
  { items: ["Pen", "Pencil", "Notebook", "Ice Cream"], odd: "Ice Cream" },
  { items: ["Bus", "Train", "Bike", "Tomato"], odd: "Tomato" },
  { items: ["Doctor", "Nurse", "Pilot", "Chocolate"], odd: "Chocolate" },
  { items: ["Apple", "Mango", "Chair", "Grapes"], odd: "Chair" },
  { items: ["Football", "Basketball", "Volleyball", "Cake"], odd: "Cake" },
  { items: ["Table", "Chair", "Fan", "Banana"], odd: "Banana" },
  { items: ["Soap", "Shampoo", "Toothpaste", "Laptop"], odd: "Laptop" },
  { items: ["Rain", "Snow", "Fog", "Pizza"], odd: "Pizza" },
  { items: ["Duck", "Hen", "Goose", "Mobile"], odd: "Mobile" },
  { items: ["Ant", "Bee", "Spider", "Pen"], odd: "Pen" },
  { items: ["Fan", "Cooler", "Heater", "Ball"], odd: "Ball" },
  { items: ["Sand", "Stone", "Rock", "Toy"], odd: "Toy" },
  { items: ["Water", "Juice", "Milk", "Shoe"], odd: "Shoe" },
  { items: ["Knife", "Fork", "Spoon", "Balloon"], odd: "Balloon" },
  { items: ["Bag", "Pen", "Book", "Apple"], odd: "Apple" },
  { items: ["Tiger", "Leopard", "Cheetah", "Carrot"], odd: "Carrot" },
  { items: ["Bus", "Car", "Bike", "Candy"], odd: "Candy" },
  { items: ["Phone", "Laptop", "Tablet", "Onion"], odd: "Onion" },
  { items: ["Candle", "Lamp", "Bulb", "Tomato"], odd: "Tomato" },
  { items: ["Keyboard", "Mouse", "Monitor", "Potato"], odd: "Potato" },
  { items: ["Eagle", "Crow", "Sparrow", "Sofa"], odd: "Sofa" },
  { items: ["Ring", "Necklace", "Bracelet", "Burger"], odd: "Burger" },
  { items: ["Drum", "Flute", "Guitar", "Socks"], odd: "Socks" },
  { items: ["Clock", "Watch", "Timer", "Juice"], odd: "Juice" },
  { items: ["Paint", "Brush", "Palette", "Pizza"], odd: "Pizza" },
  { items: ["Tie", "Belt", "Scarf", "Cake"], odd: "Cake" },
  { items: ["Tennis", "Cricket", "Chess", "Soup"], odd: "Soup" },
  { items: ["Bat", "Ball", "Wicket", "Juice"], odd: "Juice" },
  { items: ["Train", "Plane", "Cycle", "Coffee"], odd: "Coffee" },
  { items: ["Bread", "Butter", "Jam", "Helmet"], odd: "Helmet" },
  { items: ["Mouse", "Rat", "Hamster", "Chair"], odd: "Chair" },
  { items: ["Flower", "Tree", "Bush", "Spoon"], odd: "Spoon" },
  { items: ["Blue", "Green", "Yellow", "Shoes"], odd: "Shoes" },
  { items: ["Rabbit", "Hamster", "Guinea Pig", "Pen"], odd: "Pen" },
  { items: ["Pen", "Chalk", "Marker", "Orange"], odd: "Orange" },
  { items: ["Notebook", "Book", "Diary", "Fries"], odd: "Fries" },
  { items: ["Table", "Desk", "Bench", "Ice Cream"], odd: "Ice Cream" },
  { items: ["Bed", "Pillow", "Blanket", "Apple"], odd: "Apple" },
  { items: ["Lamp", "Torch", "Candle", "Socks"], odd: "Socks" }
];

let currentSet = 0;

function loadSet() {
  const gameArea = document.getElementById("items");
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  gameArea.innerHTML = "";

  const set = sets[currentSet];
  const shuffled = [...set.items].sort(() => Math.random() - 0.5);

  shuffled.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark";
    btn.textContent = item;
    btn.onclick = () => checkOdd(item, set.odd);
    gameArea.appendChild(btn);
  });
}

function checkOdd(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "✅ Correct! That's the odd one!";
    feedback.className = "text-success";
  } else {
    feedback.textContent = `❌ Nope! The odd one was \"${correct}\"`;
    feedback.className = "text-danger";
  }
}

function nextSet() {
  currentSet = (currentSet + 1) % sets.length;
  loadSet();
}

window.onload = loadSet;
