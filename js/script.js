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

// ..............................................................MENU__STICKY-START..................................
// let oldValue = 0;
// let newValue = 0;
// window.addEventListener('scroll', (e) => {
//     newValue = window.pageYOffset;
//     if (oldValue < newValue) {
//         // console.log("Up");
//         document.getElementById("header-desctopID").classList.remove("none__header-mobail");
//         document.getElementById("navbar").classList.remove("none__header-mobail2");
//         document.getElementById("navbar2").classList.remove("none__header-mobail3");
//     }
//     else if (oldValue > newValue) {
//         // console.log("Down");
//         document.getElementById("header-desctopID").classList.add("none__header-mobail");
//         document.getElementById("navbar").classList.add("none__header-mobail2");
//         document.getElementById("navbar2").classList.add("none__header-mobail3");
//     }
//     oldValue = newValue;
// });


document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
        const header = document.querySelector('.header__desctop') // находим header и записываем в константу
        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        window.addEventListener('scroll', () => { // при прокрутке страницы
            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
            const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.classList.add('header_hidden') // то скрываем header
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.classList.remove('header_hidden') // то отображаем header
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
    }
    onScrollHeader() // вызываем основную функцию onScrollHeader
});
document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
    const onScrollHeader1 = () => { // объявляем основную функцию onScrollHeader
        const header = document.querySelector('.header-mobail') // находим header и записываем в константу
        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        window.addEventListener('scroll', () => { // при прокрутке страницы
            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
            const headerHidden = () => header.classList.contains('header_hidden1') // узнаем скрыт header или нет
            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.classList.add('header_hidden1') // то скрываем header
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.classList.remove('header_hidden1') // то отображаем header
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
    }
    onScrollHeader1() // вызываем основную функцию onScrollHeader
});
// ..............................................................MENU__STICKY-END..................................
/////////////////////////////////////////////////////////////////////////////////////////////////
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
        500: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 2,
            spaceBetween: 0
        },
    }
})
/* ..........................................SWIPER СЛАЙДЕР КОНЕЦ........................ */