const body = document.getElementsByTagName("body")[0];
const currentColorSpan = document.getElementById("currentColor");

const setColor = (color) => {
    body.style.backgroundColor = color;
    currentColorSpan.textContent = color;
};

// Predefined color buttons
const greenBtn = document.getElementById("colorGreen");
const redBtn = document.getElementById("colorRed");
const blueBtn = document.getElementById("colorBlue");
const randomBtn = document.getElementById("randomColor");

greenBtn.addEventListener("click", () => setColor("#27ae60"));
redBtn.addEventListener("click", () => setColor("#e74c3c"));
blueBtn.addEventListener("click", () => setColor("#2980ef"));

randomBtn.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    setColor(randomColor);
});

// Set initial color display
setColor("#ffffff");

