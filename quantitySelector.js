const minusButton1 = document.getElementById('minus1');
const plusButton1 = document.getElementById('plus1');

const numberElement1 = document.getElementById('number1');

minusButton1.addEventListener('click', () => {
    let currentValue = parseInt(numberElement1.innerText);
    if (!isNaN(currentValue) && currentValue > 0) {
        numberElement1.innerText = currentValue - 1;
    }
});

plusButton1.addEventListener('click', () => {
    let currentValue = parseInt(numberElement1.innerText);
    if (!isNaN(currentValue)) {
        numberElement1.innerText = currentValue + 1;
    }
});


const minusButton2 = document.getElementById('minus2');
const plusButton2 = document.getElementById('plus2');

const numberElement2 = document.getElementById('number2');

minusButton2.addEventListener('click', () => {
    let currentValue = parseInt(numberElement2.innerText);
    if (!isNaN(currentValue) && currentValue > 0) {
        numberElement2.innerText = currentValue - 1;
    }
});

plusButton2.addEventListener('click', () => {
    let currentValue = parseInt(numberElement2.innerText);
    if (!isNaN(currentValue)) {
        numberElement2.innerText = currentValue + 1;
    }
});

const minusButton3 = document.getElementById('minus3');
const plusButton3 = document.getElementById('plus3');

const numberElement3 = document.getElementById('number3');

minusButton3.addEventListener('click', () => {
    let currentValue = parseInt(numberElement3.innerText);
    if (!isNaN(currentValue) && currentValue > 0) {
        numberElement3.innerText = currentValue - 1;
    }
})

plusButton3.addEventListener('click', () => {
    let currentValue = parseInt(numberElement3.innerText);
    if (!isNaN(currentValue)) {
        numberElement3.innerText = currentValue + 1;
    }
});