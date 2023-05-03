let currentValue = 0;
const counterValue = document.querySelector('#value');

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  currentValue++;
  counterValue.textContent = currentValue;
});

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
  currentValue--;
  counterValue.textContent = currentValue;
});