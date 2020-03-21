import {
    THAT_DAY,
    THIS_DAY
} from "../../script/constants/dates.js";

import {
    NOTHING_FOUND,
    NEWS_CONTAINER,
    PRELOADER
} from "../../script/constants/elements.js";

import {
    NewsCardList
} from "../cards/__wrapper/NewsCardList.js";

import {
    DataStorage
} from "../../script/modules/DataStorage.js";

import {
    NewsApi
} from "../../script/modules/NewsApi.js";

export class SearchInput {
    constructor(form, input, container, searchButton, apiKey, dataStorage) {
        this._form = form;
        this._input = input;
        this._container = container;
        this._searchButton = searchButton;
        this._apiKey = apiKey;
        this._dataStorage = dataStorage;

        this._search = this._search.bind(this);

        this._form.addEventListener('submit', this._search);
        this._form.addEventListener('input', this._validate.bind(this));
    }

    _validate(event) {
        if (event.target.validity.valueMissing) {
            this._input.setCustomValidity('Нужно ввести ключевое слово');
        } else {
            this._input.setCustomValidity('');
        }
    }

    renderStorage() {
        if (this._dataStorage.getData()) {
            this._input.value = this._dataStorage.getWord();
            const articles = this._dataStorage.getData().articles;
            articles.length > 0 ? this._showResults(this._dataStorage.getData().articles) :
                NOTHING_FOUND.classList.remove('hidden');
        }
    }

    _search(event) {

        event.preventDefault();

        this._container.renderLoading(true);

        this._searchButton.setAttribute('disabled', 'true');
        this._input.setAttribute('disabled', 'true');

        const loadNews = new NewsApi(`https://newsapi.org/v2/everything?q=${this._input.value}&pageSize=100&from=${THAT_DAY}&to=${THIS_DAY}&sortBy=popularity&apiKey=${this._apiKey}`);

        loadNews.getNews()
            .then(data => {
                this._container.removeCard();
                this._dataStorage.storeData(data);
                this._dataStorage.storeWord(this._input.value);
                data.articles.length > 0 ? this._showResults(this._dataStorage.getData().articles) : NOTHING_FOUND.classList.remove('hidden');
            })
            .catch((error) => {
                alert(`Ошибка: ${error}`);
            })
            .finally(() => {
                this._container.renderLoading(false);
                this._searchButton.removeAttribute('disabled', 'true');
                this._input.removeAttribute('disabled', 'true');
            });
    }

    _showResults(data) {
        new NewsCardList(NEWS_CONTAINER, data).render();
    }

}
