const nav = document.querySelector('nav');
const navMenu = document.querySelectorAll('nav ul a');
const navLogo = document.querySelector('.nav__logo');
const navCon = document.querySelector('.nav');
const navSubMenu = document.querySelectorAll('nav ul ul');

window.onscroll = function () {
    if(pageYOffset > 100) {
        nav.style.backgroundColor = '#ECF0F1 ';
        navMenu.forEach( function (value){ 
            value.style.color = '#2C3E50' 
        });
        navLogo.style.color = '#2C3E50';
        navCon.style.padding = '0 20px'
        navSubMenu.forEach((value)=> {
            value.style.backgroundColor = '#ECF0F1';
        })
          

    } else {
        nav.style.backgroundColor = 'transparent'
        navMenu.forEach( function (value){ 
            value.style.color = '#ECF0F1' 
        });
        navLogo.style.color = '#ECF0F1';
        navCon.style.padding = '20px 60px';
        navSubMenu.forEach((value)=> {
            value.style.backgroundColor = 'transparent';
        })
    }
}


// window.onscroll = function() {
//     if(pageYOffset > 100) {
//         $('nav').css('backgroundColor', '#ECF0F1 ');

//     } else {

//     }
// }