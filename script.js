const container = document.querySelector(".container");

function randomColor(x) {
  let randomR = Math.floor(Math.random() * 255);
  let randomG = Math.floor(Math.random() * 255);
  let randomB = Math.floor(Math.random() * 255);
  let randColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

  x.style.backgroundColor = randColor;
}

function createGrid() {
  let max = 100;
  let gridSize = prompt("How many squares per side?");
  clearGrid();

  while (gridSize > 100) {
    gridSize = prompt(
      "You have exceeded the max number of squares per side. Please enter a new value."
    );
  }
  while (gridSize < 0 || isNaN(gridSize) == true) {
    gridSize = prompt("Invalid number. Please enter a new value.");
  }

  for (let j = 0; j < gridSize; j++) {
    const col = container.appendChild(document.createElement("div"));
    for (let k = 0; k < gridSize; k++) {
      const grid = document.createElement("div");
      grid.className = "box";
      grid.setAttribute("onmouseover", "randomColor(this)");
      col.appendChild(grid);
    }
  }
}

function clearGrid() {
  container.innerHTML = "";
}
