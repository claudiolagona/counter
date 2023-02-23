let currentResult = document.getElementById('result');
let result = parseInt(currentResult.innerHTML);

const decreaseButton = document.querySelector('[data-decrease]');
const increaseButton = document.querySelector('[data-increase]');
const resetButton = document.querySelector('[data-reset]');

function decrease(num) {
    if(num > 0) {
        num --;
    }
    return num;
}

function increase(num) {
    num ++;
    return num;
}

function reset(num) {
    num = 0;
    return num;
}

decreaseButton.addEventListener('click', () => {
    result = decrease(result);
    currentResult.innerHTML = result;
});

increaseButton.addEventListener('click', () => {
    result = increase(result);
    currentResult.innerHTML = result;
});

resetButton.addEventListener('click', () => {
    result = reset(result);
    currentResult.innerHTML = result;
});