import {
    NOTHING_FOUND,
    CONTENT
} from "../constants/elements.js";

import {
    transformDate
} from "../utils/transformDate.js";

export class NewsCard {
    constructor(source, title, publishedAt, description, urlToImage, url) {
        this.source = source;
        this.title = title;
        this.publishedAt = publishedAt;
        this.description = description;
        this.urlToImage = urlToImage;
        this.url = url;

        this.cardElement = this._create();
    }

    _create(source, title, publishedAt, description, urlToImage, url) {

        NOTHING_FOUND.classList.add('hidden');
        CONTENT.classList.remove('hidden');

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-item');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-item__pic');
        cardImage.setAttribute('alt', this.title);
        cardImage.setAttribute('src', this.urlToImage);
        cardImage.setAttribute('target', '_blank');
        cardImage.addEventListener('error', function () {
            cardImage.setAttribute('src', 'https://i.imgur.com/w2353ZP.jpg')
        });

        const cardDate = document.createElement('p');
        cardDate.classList.add('card-item__date');
        cardDate.textContent = transformDate(this.publishedAt);

        const cardTitle = document.createElement('a');
        cardTitle.classList.add('card-item__title');
        cardTitle.setAttribute('href', this.url);
        cardTitle.textContent = this.title;
        cardTitle.setAttribute('target', '_blank');

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-item__text');
        cardDescription.textContent = this.description;

        const cardSource = document.createElement('a');
        cardSource.classList.add('card-item__source');
        cardSource.setAttribute('href', this.url);
        cardSource.textContent = this.source.name;
        cardSource.setAttribute('target', '_blank');

        cardContainer.appendChild(cardImage);
        cardContainer.appendChild(cardDate);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        cardContainer.appendChild(cardSource);

        return cardContainer;

    }

};
