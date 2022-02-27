const textInput = document.querySelector("input");

const check = () => {
    if (textInput.value.length.toString() === textInput.dataset.length) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
}

textInput.addEventListener("blur", check);