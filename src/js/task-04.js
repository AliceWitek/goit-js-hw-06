let counterValue = 0;

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const minus = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

const plus = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};

buttonMinus.addEventListener("click", minus);
buttonPlus.addEventListener("click", plus);