const container = document.querySelector("#container");
let gridSize = 256;
let gridRows = 16;

function createGrid() {
  for (let i = 1; i <= gridSize; i++) {
    const verticalBox = document.createElement("div");
    verticalBox.classList.add("box");
    verticalBox.id = i;
    verticalBox.textContent = "";
    container.appendChild(verticalBox);
  }
}
createGrid();

let root = document.querySelector(":root");

function setDim() {
  gridRows = document.getElementById("userInput").value;
  gridRows = Number(gridRows);
  gridSize = Math.pow(gridRows, 2);
  root.style.setProperty("--grid-rows", gridRows);
  removeAllChildNodes(container);
  createGrid();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const hover = document.getElementById("container");
hover.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black";
});
