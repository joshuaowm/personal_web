let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    fill: "row",
    },
    spaceBetween: 20,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    speed: 1000,
    loop: false, // ❌ disable loop to prevent grid issues
    breakpoints: {
    0: {
    slidesPerView: 1,
    grid: {
        rows: 1,
    },
    },
    768: {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    },
},
});

