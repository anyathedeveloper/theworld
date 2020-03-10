import "../pages/about.css";
import "../../node_modules/swiper/js/swiper.min.js";
import '../images/favicon.ico';
import Swiper from 'swiper';

import {
    CommitCardList
} from "../script/components/CommitCardList.js";

var mySwiper = new Swiper('.slider__container', {
    'direction': 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
setTimeout(() => {
    mySwiper.update()
}, 1000)

window.onload = new CommitCardList()._addCommits();
