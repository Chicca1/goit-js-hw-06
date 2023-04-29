const a = document.querySelector(`#font-size-control`);
const b = document.querySelector(`#text`);

a.addEventListener(`input`, () => {
  text.style.fontSize = `${a.value}px`;
} 

);