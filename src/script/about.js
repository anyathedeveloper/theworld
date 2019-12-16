import "../pages/about.css";
import "../../node_modules/swiper/js/swiper.min.js";
import '../images/favicon.ico';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    'direction': 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    fadeEffect: {
        crossFade: 'true'
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
