const menuFox = document.querySelector('.navs');
const menuItem4 = document.querySelectorAll('.nav__links');
const menuBtn4 = document.querySelector('.menu-btn');



menuBtn4.addEventListener('click', function () {
    menuBtn4.classList.toggle('active');
    menuFox.classList.toggle('active');
})
menuItem4.forEach(function (menuItem4) {
    menuItem4.addEventListener('click', function () {
        menuBtn4.classList.toggle('active');
        menuFox.classList.toggle('active');
    })
})


