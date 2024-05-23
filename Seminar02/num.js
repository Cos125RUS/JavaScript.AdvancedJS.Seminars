'use strict'

const inputEl = document.querySelector('#num');
const btnEl = document.querySelector('button');
const showEl = document.querySelector('.show');

btnEl.addEventListener('click', function (e) {
    e.preventDefault();
    try {
        if (isNaN(inputEl.value)) throw new Error('Not a Number!');
        showEl.innerText = 'Num = ' + inputEl.value;
    } catch (error) {
        showEl.innerText = error.message;
    }
});