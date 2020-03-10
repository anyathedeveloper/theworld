import {
    NewsCard
} from "./NewsCard.js";

import {
    NOTHING_FOUND,
    PRELOADER,
    CONTENT
} from "../constants/elements.js";

export class NewsCardList {
    constructor(container, data) {
        this._data = data;
        this._container = container;
        this._setItems = 3;
        this._initialItems = 0;

        document.querySelector('.cards__more').onclick = () => this._render();
    }

    _addCard(source, title, publishedAt, description, urlToImage, url) {
        const {
            cardElement
        } = new NewsCard(source, title, publishedAt, description, urlToImage, url);
        this._container.appendChild(cardElement);
    }


    _render() {

        if (this._data.length === 0) {
            NOTHING_FOUND.classList.remove('hidden');
        } else {
            for (let i = this._initialItems; i < Math.min(this._initialItems + this._setItems, this._data.length); i++) {
                const items = this._data[i];
                this._addCard(items.source, items.title, items.publishedAt, items.description, items.urlToImage, items.url);

            }

            this._initialItems += this._setItems;
            if (this._initialItems >= this._data.length) {
                document.querySelector('.cards__more').classList.add('hidden');
            }
            return;
        }
    }

    _renderLoading(isLoading) {
        if (isLoading) {
            PRELOADER.classList.remove('hidden');
            CONTENT.classList.add('hidden');
            NOTHING_FOUND.classList.add('hidden');
        } else {
            PRELOADER.classList.add('hidden');
        }
    }

    _removeCard() {
        while (this._container.firstChild) {
            localStorage.clear();
            this._container.removeChild(this._container.firstChild);
        }
    }
}
