// Write your code here!

const YOUR_NAME = "kelvin";

const main = document.querySelector("main#main");
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = `${YOUR_NAME} is the champion`;
