let navToggle = document.querySelector('.toggle-box');
let navCon = document.querySelector('.navList-container');
let navList = document.querySelectorAll('.navList');
let navbar = document.querySelector('#navbar');
let order = document.querySelectorAll('#order');
let pop = document.querySelector('#pop');
let closePop = document.querySelector('#close');

// ativating navToggle while clicking.
function toggling(){
    navToggle.classList.toggle('active');
    navCon.classList.toggle('active');
}

//while clicking on navList close the navCon.
function navL(){
    navToggle.classList.remove('active');
    navCon.classList.remove('active');
}

// While scrolling navbar style
function nav(){
    navbar.classList.toggle('sticky', window.scrollY > 0);
}

// while clicking order buttons something pop
order.forEach(e => {
    e.onclick = function(){
        pop.classList.add('active');
    }
});

//while clicking on close pop will hide
closePop.onclick = function(){
    pop.classList.remove('active')
}


//all Events
navToggle.addEventListener('click', toggling);
navList.forEach((e,i,a) => e.addEventListener('click', navL));
window.addEventListener('scroll', nav);
