const a = document.querySelector(`#validation-input`);
const minLength = parseInt(a.dataset.length);

a.addEventListener(`blur`, () => {
    if (a.value.length == minLength) {
        a.classList.remove(`invalid`);
        a.classList.add(`valid`);
    } else { 
        a.classList.remove(`valid`);
        a.classList.add(`invalid`);

    }
} 

);