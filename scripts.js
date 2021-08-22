const html = document.querySelector("html");
const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "container");
let squareCount = 16;
createGrid(squareCount);
//Creates squareCount div elements in CONTAINER
function createGrid(squareCount) {
  body.appendChild(container);
  for (let i = 0; i <= squareCount * squareCount; i++) {
    container.style.gridTemplateColumns = `repeat(${squareCount},1fr)`;
    container.style.gridTemplateRows = `repeat(${squareCount},1fr)`;
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "gridDiv");
    divElement.setAttribute("id", `elementID${i}`);
    container.appendChild(divElement);
    divElement.addEventListener("mouseenter", function (e) {
      const hoverElement = document.getElementById(e.target.id);
      hoverElement.setAttribute("class", "Hover");
    });
  }
}
//Clears the grid
const clearButton = document.createElement("button");
body.appendChild(clearButton);
clearButton.textContent = "Clear";
clearButton.addEventListener("click", function () {
  //Change all CONTAINER child classes to gridDiv, i.e clear the grid.
  container.querySelectorAll("div").forEach((element) => {
    element.setAttribute("class", "gridDiv");
  });
  //Prompts the user for an input;
  userInput = parseInt(prompt("Table size, maximum of 100"));
  if (userInput > 100) {
    userInput = parseInt(prompt("Maximum of 100, enter again"));
  }
  //Removes the container
  container.querySelectorAll("div").forEach((element) => {
    container.removeChild(element);
  });
  //invokes createGrid
  createGrid(userInput);
});
