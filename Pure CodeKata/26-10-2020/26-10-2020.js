const nav = document.querySelector('nav');
const navCon = document.querySelector('.nav');
const navMenuList = document.querySelectorAll('.nav__menu li');
const navLogo = document.querySelector('.nav__logo');

function navScrollDown (){
    if(window.pageYOffset < 1) {
        nav.style.backgroundColor = 'transparent';
        navCon.style.padding = '20px 40px';
        navLogo.style.fontSize = '2.5rem'

    } else {
        nav.style.backgroundColor = '#3d3d3d';
        navCon.style.padding = '10px 40px';
        navLogo.style.fontSize = '1.75rem'
    }
};

window.onscroll = navScrollDown;

navMenuList.forEach(function(value) {
    value.addEventListener('click', function() {
        navMenuList[0].classList.remove('nav__menu--active')
        navMenuList[1].classList.remove('nav__menu--active')
        navMenuList[2].classList.remove('nav__menu--active')
        navMenuList[3].classList.remove('nav__menu--active')
        value.classList.add('nav__menu--active');
    })
})