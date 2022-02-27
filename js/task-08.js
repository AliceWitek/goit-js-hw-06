const form = document.querySelector(".login-form");

const manual = event => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Drogi Użytkowniku! Pamiętaj o uzupełnieniu wszystkich pól! Proszę, wróć do formularza i dokonaj niezbędnych zmian :)")
    } else {
        console.log(`email: ${email.value}, password: ${password.value}`);
        event.currentTarget.reset();
    }
}

form.addEventListener("submit", manual);