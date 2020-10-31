const textAni = document.getElementById('text-in-box');
const text = document.querySelector('.head_text')

function paraText() {
    text.style.transform = `translate(0, ${window.scrollY * -0.3}%)`
}

function aniText() {
    if(window.scrollY > 500) {
        textAni.classList.remove('fade-down');
        textAni.classList.add('fade-up');
    } else {
        textAni.classList.remove('fade-up');
        textAni.classList.add('fade-down');
    }
}

function run() {
    document.addEventListener('scroll', function() {
        paraText();
        aniText();
    });
}
run();