// {/* <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form> */}

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = "feedback-form-state";

let formValues = {};

const onFormInput = event => {
    formValues[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(onFormInput));
};

const onFormSubmit = event => {
    event.preventDefault();
    if (inputEl.value !== '' && textareaEl.value !== '') {
        console.log(formValues);
localStorage.removeItem(LOCALSTORAGE_KEY);
event.target.reset();
return;
    }
    alert(`All fields are required to be filled`);

    };
const onFormData = () => {
const savedFornData = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedFornData) {
    formValues = JSON.parse(savedFornData);
    inputEl.value = formValues.email || '';
    textareaEl.value = formValues.message || '';

}
};


