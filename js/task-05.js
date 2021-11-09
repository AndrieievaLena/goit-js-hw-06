const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output')
nameInputEl.addEventListener('input', (symbol =>
    symbol.currentTarget.value !== ''
        ? nameOutputEl.textContent = symbol.currentTarget.value
        : nameOutputEl.textContent = 'Anonymous'))
  