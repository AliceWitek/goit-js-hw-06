function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector("body");
const btn = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
const change = () => {
    const random = getRandomHexColor();
    color.style.backgroundColor = random;
    newColor.innerHTML = random;
}

btn.addEventListener("click", change);