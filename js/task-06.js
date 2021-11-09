const textInputEl = document.querySelector('#validation-input');
const inputSymbolLength = textInputEl.getAttribute('data-length');

textInputEl.addEventListener('blur', function (event) {
    textInputEl.classList.add('invalid')
    if (event.currentTarget.value.length === Number(inputSymbolLength)) {
       textInputEl.classList.replace('invalid', 'valid')
    }
})