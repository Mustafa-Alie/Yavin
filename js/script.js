'use strict'

function userScroll() {
    const navbar = document.querySelector('.navbar');

    //listen to the vertical scroll on the window object
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white');
            navbar.classList.add('navbar-custom');
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.remove('navbar-custom');
        }
    });
};

//run the function when the content is loaded:
document.addEventListener('DOMContentLoaded', userScroll);


//Counting effect:
function countingEffect(id, num) {
    const counter = document.getElementById(id)
    setInterval(() => {
        if (counter.textContent < num)
            counter.textContent = Number(counter.textContent) + 1;
    }, 10);
};

function init() {
    const index = document.getElementById('index') ? document.getElementById('index') : '';
    if (index) {
        countingEffect('counter-customers', 650);
        countingEffect('counter-issues', 496);
        countingEffect('counter-reviews', 312);
        countingEffect('counter-cases', 978);
    }

};

document.addEventListener('DOMContentLoaded', init);

/////////////////
//up button:
const upBtn = document.getElementById('up');
const upContainer = document.querySelector('.up-container')

upBtn.addEventListener('click', window.scrollTo(0, 0))

//listen to the vertical scroll on the window object
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        upContainer.classList.remove('d-none')
        upContainer.classList.add('d-block')

    } else {
        upContainer.classList.remove('d-block');
        upContainer.classList.add('d-none')
    }
});




