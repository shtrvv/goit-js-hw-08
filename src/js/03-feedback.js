import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';
let objectForm = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const objectElements = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};

form.elements.email.value = objectElements.email ?? '';
form.elements.message.value = objectElements.message ?? '';

function onFormInput(evt) {
    if (evt.target.name === 'email') {
        objectForm.email = evt.target.value;
    }
    if (evt.target.name === 'message') {
        objectForm.message = evt.target.value;
    }

    localStorage.setItem(LS_KEY, JSON.stringify(objectForm));
} 

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(objectForm);

    localStorage.removeItem(LS_KEY);
    form.reset();
}
