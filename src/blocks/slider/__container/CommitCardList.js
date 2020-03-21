import {
    GithubApi
} from "../../../script/modules/GithubApi.js";

import {
    CommitCard
} from "../../slide/CommitCard.js";

import {
    SLIDER_CONTAINER
} from "../../../script/constants/elements.js";

import {
    GITHUB_API_ADDRESS
} from "../../../script/constants/apikey.js";

export class CommitCardList {
    constructor(container, data) {
        this._data = data;
        this._container = container;

    }

    _render(array) {
        const firstTwenty = array.slice(0, 20);
        firstTwenty.forEach(item => this._addSlide(item.commit.committer.name, item.commit.committer.email,
            item.commit.committer.date, item.commit.message, item.author.avatar_url));
    }

    _addSlide(name, email, date, message, avatar_url) {
        const {
            commitElement
        } = new CommitCard(name, email, date, message, avatar_url);
        this._container.appendChild(commitElement);
    }

    addCommits() {
        const apiCommits = new GithubApi(GITHUB_API_ADDRESS);

        apiCommits.getCommits()
            .then(data => {
                return data;
            })
            .then(data => {
                new CommitCardList(SLIDER_CONTAINER)._render(data);
            })
            .catch((error) => {
                alert(`Ошибка: ${error}`);
            })
    }
}
