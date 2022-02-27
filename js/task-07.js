const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

let font = () => {
    text.style.fontSize = `${input.value}px`
}

input.addEventListener("input", font);