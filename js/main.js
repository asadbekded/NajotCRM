let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navs');
let menuItem = document.querySelectorAll('.nav__links');
let modeBtn = document.querySelector('.header__dark__btn');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


// dark mode start 

modeBtn.addEventListener('click', function () {
    var setTheme = document.body;
    setTheme.classList.toggle("dark");

    var theme;
     if(setTheme.classList.contains("dark")){
        theme = "Dark"
        console.log('Dark mode');
     }else{
        theme = "Light"
        console.log('Light mode');
     }

    localStorage.setItem('Theme', JSON.stringify(theme))
})
let GetTheme = JSON.parse(localStorage.getItem('Theme'));
if(GetTheme === 'Dark'){
    document.body.classList = 'dark'
}


// dark mode end 