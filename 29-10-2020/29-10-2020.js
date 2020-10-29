const nav = document.querySelector('nav');
const navCon = document.querySelector('.nav')
const navBar = document.querySelectorAll('nav ul ul');
const navMenuList = document.querySelectorAll('nav ul li a');
const navLogo = document.querySelector('.nav__logo');

window.onscroll = function() {
    if (pageYOffset < 100) {
        navLogo.style.color = '#ECF0F1';
        nav.style.backgroundColor = 'transparent';
        navCon.style.padding = '20px 40px';
        navMenuList.forEach((x) => x.style.color = '#ECF0F1' )
        navBar.forEach((x) => x.style.backgroundColor = 'transparent')
        

    } else {
        navLogo.style.color = '#34495E';
        nav.style.backgroundColor = '#ECF0F1 ';
        navCon.style.padding = '0 40px';
        navMenuList.forEach((x) => x.style.color = '#34495E' )
        navBar.forEach((x) => x.style.backgroundColor = '#ECF0F1')
    }
}