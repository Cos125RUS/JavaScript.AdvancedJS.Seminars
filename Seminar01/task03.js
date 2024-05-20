'use strict'

const divs = document.querySelectorAll('div');
const arr = Array.from(divs);
arr.filter(element => element.dataset.active).forEach(element => console.log(element));