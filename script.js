//Default grid size
let gridSize = 256;
let gridRows = 16;

const container = document.querySelector("#container");

//create total number of grid elements
function createGrid() {
  for (let i = 1; i <= gridSize; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.id = i;
    divBox.textContent = "";
    container.appendChild(divBox);
  }
}
createGrid();

let root = document.querySelector(":root");

function setDim() {
  gridRows = document.getElementById("userInput").value;
  if (gridRows > 100) {
    alert("Max dimensions of 100 x 100! Enter a smaller number.");
    return;
  } else {
    gridRows = Number(gridRows);
    gridSize = Math.pow(gridRows, 2); //length of grid squared for total number of elements
    root.style.setProperty("--grid-rows", gridRows); //set css variable to number of rows for a square
    removeAllChildNodes(container);
    createGrid();
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//mouse over changes background color from default white to black
const hover = document.getElementById("container");
hover.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black";
});
