"use strict"
// ............................................................................................
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};
///////////////////////////////////////////////////////////////////
function toggleMe(x) {

    if (!x) return true;

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

    return true;
}
document.getElementById("bags__form-nav").addEventListener('click', () => toggleMe(document.getElementById("bags__form-inside")));
document.getElementById("bags__color-nav").addEventListener('click', () => toggleMe(document.getElementById("bags__color-inside")));
document.getElementById("bags__material-nav").addEventListener('click', () => toggleMe(document.getElementById("bags__material-inside")));

/* ..........................................SWIPER СЛАЙДЕР НАЧАЛО........................ */
var swiper1 = new Swiper('.swiper1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 1,
            // spaceBetween: 100
        },
    }
})
/* ..........................................SWIPER СЛАЙДЕР КОНЕЦ........................ */