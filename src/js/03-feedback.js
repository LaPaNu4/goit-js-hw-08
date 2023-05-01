var throttle = require('lodash.throttle');

const refs = {
  formInp: document.querySelector('form'),
  emailInp: document.querySelector('input'),
  messageInp: document.querySelector('textarea'),
};
const STOREGE_KEY = 'feedback-form-state';

let saveObj = {
  email: 'email',
  message: 'message',
};

refs.formInp.addEventListener('input', throttle(saveMassege, 500));
function saveMassege() {
  saveObj = {
    email: refs.emailInp.value,
    message: refs.messageInp.value,
  };

  localStorage.setItem(STOREGE_KEY, JSON.stringify(saveObj));
}
const updating = localStorage.getItem(STOREGE_KEY);
if (updating) {
  const saveObj = JSON.parse(updating);
  refs.emailInp.value = saveObj.email;
  refs.messageInp.value = saveObj.message;
}
refs.formInp.addEventListener('submit', e => {
  e.preventDefault();
  console.log(saveObj);
  localStorage.clear();
  refs.formInp.reset();
});
