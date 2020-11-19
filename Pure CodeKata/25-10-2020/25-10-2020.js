const navMenu = document.querySelectorAll('.nav__menu li');

navMenu.forEach(function(value) {
    value.addEventListener('click', function() {
        navMenu[0].classList.remove('active');
        navMenu[1].classList.remove('active');
        navMenu[2].classList.remove('active');
        navMenu[3].classList.remove('active');
        value.classList.add('active');
    })
});

navMenu[0].style.backgroundColor = 'green';
navMenu[0].style.color = 'red'

navMenu[1].setAttribute('style', 'background-color:green;')
navMenu[1].setAttribute('style', 'color:red;')

navMenu[3].classList.add('active');