const inputRunner = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

inputRunner.addEventListener('input', () => textOutput.style.fontSize = `${inputRunner.value}px`);