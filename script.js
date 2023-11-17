const wrapper = document.querySelectorAll('.wrapper');
const inputField = document.querySelectorAll('.input');
const submitBtn = document.querySelector('.submit');
const error = document.querySelectorAll('.error');
// Destructuring
const [fname, lname, email, pword] = wrapper;
const [inputFname, inputLname, inputEmail, inputPword] = inputField;
const [errorF, errorL, errorE, errorP] = error;

const regEx = new RegExp('^.+@.+\..+$');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputFname.value == '') {
    errorF.classList.remove('hidden');
    inputFname.style.borderColor = 'var(--red)';
  }
  if (inputLname.value == '') {
    errorL.classList.remove('hidden');
    inputLname.style.borderColor = 'var(--red)';
  }
  if (regEx.test(inputEmail.value) == false) {
    errorE.classList.remove('hidden');
    inputEmail.style.borderColor = 'var(--red)';
    inputEmail.value = 'example@email.com';
    inputEmail.style.color = 'var(--red)';
  }
  if (inputPword.value == '') {
    errorP.classList.remove('hidden');
    inputPword.style.borderColor = 'var(--red)';
  }
});