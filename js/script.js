const h1 = document.querySelector('h1');
const header = document.querySelector('header');
const section = document.querySelector('section');

h1.addEventListener('click', () => {
    if (header.classList.contains('hidden')) {
        header.classList.remove('hidden');
        setTimeout(function () {
            header.classList.remove('visuallyhidden');
        }, 20);
    } else {
        header.classList.add('visuallyhidden');
        header.addEventListener('transitionend', function (e) {
            header.classList.add('hidden');
            section.classList.remove('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }

}, false);