import "./about.css";
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    'direction': 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'true',
    spaceBetween: 16,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
