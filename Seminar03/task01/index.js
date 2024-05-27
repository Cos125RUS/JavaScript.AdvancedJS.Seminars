'use strict'

const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(Math.random() * 10)) {
                resolve(["News 1", "News 2"]);
            } else reject(new Error("Error"));
        }, 2000);
    });
}

const newsBox = document.querySelector('.news-container');
const btn = document.querySelector('.load-button');
btn.onclick = () => fetchNews()
    .then(data => data.forEach(element => {
        const pEl = document.createElement('p');
        pEl.innerHTML = element;
        newsBox.appendChild(pEl);
    }))
    .catch(err => console.error(err.message));