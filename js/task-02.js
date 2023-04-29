const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});



ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});