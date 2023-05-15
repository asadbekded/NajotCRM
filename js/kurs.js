const menuFox1 = document.querySelector('.navs');
const menuItem5 = document.querySelectorAll('.nav__links');
const menuBtn5 = document.querySelector('.menu-btn');


menuBtn5.addEventListener('click', function () {
    menuBtn5.classList.toggle('active');
    menuFox1.classList.toggle('active');
})
menuItem5.forEach(function (menuItem5) {
    menuItem5.addEventListener('click', function () {
        menuBtn5.classList.toggle('active');
        menuFox1.classList.toggle('active');
    })
})


