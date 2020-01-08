const covers = [...document.querySelectorAll(".movie-covermin")];
covers.forEach(function (cover) {
    cover.onclick = function () {
        let modal = cover.getAttribute('data-target');
        document.getElementById(modal).classList.toggle('active');
    }
});

const closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.closest('.popup');
        modal.classList.toggle('active');
    }
});