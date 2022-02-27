const $categories = document.querySelector('#categories');
const $items = document.querySelectorAll('.item');
console.log(`Number of categories:${$categories.children.length}`);
console.log("");
for (const item of $items) {
    console.log(`Category:${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
    console.log("");
}