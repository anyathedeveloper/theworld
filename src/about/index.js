import "../pages/about.css";
import "../../node_modules/swiper/js/swiper.min.js";
import '../images/favicon.ico';
import Swiper from 'swiper';

import {
    CommitCardList
} from "../blocks/slider/__container/CommitCardList.js";

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

const commitList = new CommitCardList();

window.onload = () => {
    commitList.addCommits();
}
