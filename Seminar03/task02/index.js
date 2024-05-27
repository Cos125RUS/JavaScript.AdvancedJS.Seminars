'use strict'

const inputEl = document.querySelector('.input');
const saveBtn = document.querySelector('.save');
const loadBtn = document.querySelector('.load');
const clearBtn = document.querySelector('.clear');
const viewBox = document.querySelector('.view');

saveBtn.onclick = () => {
    localStorage.setItem('text', inputEl.value);
    inputEl.value = '';
    alert('Saved to LocalStorage');
}

loadBtn.onclick = () => viewBox.innerHTML = localStorage.getItem('text');

clearBtn.onclick = () => {
    inputEl.value = '';
    viewBox.innerHTML = '';
    localStorage.removeItem('text');
    alert('LocalStorage cleared');
}
