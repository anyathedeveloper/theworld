import "./pages/index.css";
import './images/favicon.ico';
import img from './blocks/search/images/search.png';

import {
    DataStorage
} from "./script/modules/DataStorage.js";

import {
    NewsCardList
} from "./blocks/cards/__wrapper/NewsCardList.js";

import {
    SearchInput
} from "./blocks/search/SearchInput.js";

import {
    NEWS_CONTAINER
} from "./script/constants/elements.js";

import {
    API_KEY
} from "./script/constants/apikey.js";

new SearchInput(document.querySelector('.search__searchbar'),
        document.querySelector('.search__input'),
        new NewsCardList(NEWS_CONTAINER),
        document.querySelector('.search__button'),
        API_KEY,
        new DataStorage())
    .renderStorage();
