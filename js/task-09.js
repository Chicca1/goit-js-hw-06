function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const a = document.querySelector(`.change-color`);
const b = document.querySelector(`.color`);
const c = document.querySelector(`body`);

a.addEventListener(`click`, () => {
  const d = getRandomHexColor();
  c.style.backgroundColor = d;
  b.textContent = d;
});