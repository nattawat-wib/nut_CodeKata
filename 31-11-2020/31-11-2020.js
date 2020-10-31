const textAni = document.getElementById('text-in-box');
const text = document.querySelector('.head_text')

function paraText() {
    text.style.transform = `translate(0, ${window.scrollY * -0.3}%)`
}

function aniText() {
    if (window.scrollY > 500) {
        textAni.classList.remove('fade-down');
        textAni.classList.add('fade-up');
    } else {
        textAni.classList.remove('fade-up');
        textAni.classList.add('fade-down');
    }
}

const spanToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

spanToggle.addEventListener('click', function () {
    navMenu.classList.toggle('span-nav');
});

const eye = document.getElementById('eye');
const bodyEl = document.querySelector('body')

function mouseMove({ pageX, pageY }) {
  const {left, top} =  eye.getBoundingClientRect();

  const eyeCenterX = left + eye.offsetWidth / 2;
  const eyeCenterY = top + eye.offsetHeight / 2;
  const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
  const angle = radian *180 / Math.PI * -1;
  eye.style.transform = `translate(${angle}px, ${angle}px)`;
}



function run() {
    document.addEventListener('scroll', function () {
        paraText();
        aniText();
        bodyEl.addEventListener('mousemove', mouseMove);

    });
}
run();