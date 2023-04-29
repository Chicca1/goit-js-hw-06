const items = document.querySelectorAll('li.item');
let count = 0;

items.forEach(item => {
  count++;
});

console.log(`Number of categories: ${count}`);

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryName} / Elements: ${categoryItems.length}`);
});