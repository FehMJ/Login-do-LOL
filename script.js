const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');   
}

const handFocusOut = ({ target }) => {
    if (target.value === '')  {
        const span = target.previousElementSibling;
        span.classList.remove('span-active'); 
    }     
}

const handChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {     
      button.removeAttribute('disabled');  
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handFocus));
inputs.forEach((input) => input.addEventListener('focusout', handFocusOut));
inputs.forEach((input) => input.addEventListener('input', handChange));