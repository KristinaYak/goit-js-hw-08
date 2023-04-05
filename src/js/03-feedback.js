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
onFormData();


formEl.addEventListener('input', throttle(event => {
    formValues[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValues));
}, 500)
);

 formEl.addEventListener('submit', event => {
    event.preventDefault();
    if (inputEl.value !== '' && textareaEl.value !== '') {
        console.log(formValues);
localStorage.removeItem(LOCALSTORAGE_KEY);
event.currentTarget.reset();
return;
    }
    alert(`All fields are required to be filled`);

    })
function onFormData(){
let savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedFormData) {
    formValues = JSON.parse(savedFormData);
    inputEl.value = formValues.email || '';
    textareaEl.value = formValues.message || '';

}
};


