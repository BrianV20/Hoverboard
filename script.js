const SQUARES = 400; //SCREAMING_SNAKE_CASE
//const COLORS = ["#C2E7DA", "#1A1B41", "#BAFF29", "#AD343E", "#BB0A21", "#C7EFCF", "#FB4D3D", "#03CEA4"];
const COLORS = ["#ea98da", "#5b6cf9", "#7ef29d", "#6ef195"];

const containerEl = document.querySelector("#container");

for(let i = 0; i < SQUARES; i++){
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    squareEl.addEventListener("mouseover", () => setColor(squareEl));
    squareEl.addEventListener("mouseout", () => removeColor(squareEl));

    containerEl.appendChild(squareEl);
}

function getRandomColor(){
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.background = "var(--secondary-color)";
    element.style.boxShadow = "0 0 2px var(--tertiary-color)";
}

const buttonToggleMode = document.querySelector("#toggleMode");
buttonToggleMode.addEventListener("click", changeMode);
function changeMode(){
    const HTML = document.querySelector("html");
    if(HTML.classList.contains("light")){
        HTML.classList.remove("light");
    }
    else {
        HTML.classList.add("light");
    }
}