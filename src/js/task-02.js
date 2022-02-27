const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

ingredients.forEach(ingredient => {
    const list = document.createElement("li");
    list.textContent = ingredient;
    list.classList.add("item");
    document.querySelector("#ingredients").append(list);
});