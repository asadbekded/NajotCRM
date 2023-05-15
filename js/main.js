const advantageList = document.querySelector('.advantage__list');
const advantageBtn = document.querySelector('.advantage__btn');
const playBtn1 = document.querySelector('.comment__item-btn1');
const playBtn2 = document.querySelector('.comment__item-btn2');
const playBtn3 = document.querySelector('.comment__item-btn3');
const playBtn4 = document.querySelector('.comment__item-btn4');
const firstVideo = document.querySelector('.comment__item-video1');
const secondVideo = document.querySelector('.comment__item-video2');
const thirdVideo = document.querySelector('.comment__item-video3');
const fourthVideo = document.querySelector('.comment__item-video4');
const pauseBtn1 = document.querySelector('.comment__item-btnPause1');
const pauseBtn2 = document.querySelector('.comment__item-btnPause2');
const pauseBtn3 = document.querySelector('.comment__item-btnPause3');
const pauseBtn4 = document.querySelector('.comment__item-btnPause4');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navs');
const menuItem = document.querySelectorAll('.nav__links');
const modeBtn = document.querySelector('.header__dark__btn');
const btn2 = document.querySelector('.ded')



// dark mode start 

modeBtn.addEventListener('click', function () {
    var setTheme = document.body;
    setTheme.classList.toggle("dark");

    var theme;
    if (setTheme.classList.contains("dark")) {
        theme = "Dark"
        console.log('Dark mode');
    } else {
        theme = "Light"
        console.log('Light mode');
    }

    localStorage.setItem('Theme', JSON.stringify(theme))
})
let GetTheme = JSON.parse(localStorage.getItem('Theme'));
if (GetTheme === 'Dark') {
    document.body.classList = 'dark';
}



btn2.addEventListener('click', function () {
    var setTheme = document.body;
    setTheme.classList.toggle("dark");

    var theme;
    if (setTheme.classList.contains("dark")) {
        theme = "Dark"
        console.log('Dark mode');
    } else {
        theme = "Light"
        console.log('Light mode');
    }

    localStorage.setItem('Theme', JSON.stringify(theme))
})
let GetBlogTheme = JSON.parse(localStorage.getItem('Theme'));
if (GetBlogTheme === 'Dark') {
    document.body.classList = 'dark';
}

// dark mode end 


advantageBtn.addEventListener('click', function () {
    if (advantageList.style.height == '293px') {
        advantageList.style.height = '100%';
    } else {
        advantageList.style.height = '293px';
    }
});

playBtn1.addEventListener('click', function () {
    firstVideo.play();
    secondVideo.pause();
    thirdVideo.pause();
    fourthVideo.pause();
    playBtn1.style.display = 'none';
    pauseBtn1.style.display = 'flex';
    pauseBtn1.style.opacity = "1"
});

pauseBtn1.addEventListener('click', function () {
    firstVideo.pause();
    playBtn1.style.display = 'flex';
    pauseBtn1.style.display = 'none';
});

playBtn2.addEventListener('click', function () {
    secondVideo.play();
    firstVideo.pause();
    thirdVideo.pause();
    fourthVideo.pause();
    playBtn2.style.display = 'none';
    pauseBtn2.style.display = 'flex';
    pauseBtn2.style.opacity = "1"

});

pauseBtn2.addEventListener('click', function () {
    secondVideo.pause();
    playBtn2.style.display = 'flex';
    pauseBtn2.style.display = 'none';
});

playBtn3.addEventListener('click', function () {
    thirdVideo.play();
    firstVideo.pause();
    secondVideo.pause();
    fourthVideo.pause();
    playBtn3.style.display = 'none';
    pauseBtn3.style.display = 'flex';
    pauseBtn3.style.opacity = "10"

});

pauseBtn3.addEventListener('click', function () {
    thirdVideo.pause();
    playBtn3.style.display = 'flex';
    pauseBtn3.style.display = 'none';
});

playBtn4.addEventListener('click', function () {
    fourthVideo.play();
    firstVideo.pause();
    secondVideo.pause();
    thirdVideo.pause();
    playBtn4.style.display = 'none';
    pauseBtn4.style.display = 'flex';
    pauseBtn4.style.opacity = "10"

});

pauseBtn4.addEventListener('click', function () {
    fourthVideo.pause();
    playBtn4.style.display = 'flex';
    pauseBtn4.style.display = 'none';
});

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




