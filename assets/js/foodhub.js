'use strict';


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const navToggleBtn = document.querySelector('.menu-toggle-btn');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {


  navToggleFunc();

});


// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}

const fullmenu = document.getElementById('fullmenu');
fullmenu.addEventListener('click', function () {

  console.log('clicked');
  window.open('https://www.flipbookpdf.net/web/site/041f1a883dac6d1f9674fb42ca67e6ba5cced3e5202209.pdf.html', '_blank');
})

