const a = document.querySelector(`.login-form`);
a.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
    event.preventDefault();

let email  = a.elements.email.value;
let password = a.elements.password.value;

if (!email || !password) {
    alert('Please fill in all fields');
    return;
}

const b = {
    email,
    password
};

console.log(b);
a.reset();

};