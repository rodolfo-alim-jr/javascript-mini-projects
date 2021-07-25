let count = 0;
let countText = document.querySelector('.count').textContent;

const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const btnReset = document.getElementById('btn-reset');

btnIncrease.addEventListener('click', () => {
    count += 1;
    document.querySelector('.count').textContent = count;
})

btnDecrease.addEventListener('click', () => {
    count -= 1;
    document.querySelector('.count').textContent = count;
})

btnReset.addEventListener('click', () => {
    count = 0;
    document.querySelector('.count').textContent = count;
})