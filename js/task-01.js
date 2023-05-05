const categoriesList = document.getElementById('categories');
const categoriesItems = Array.from(categoriesList.children);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});





