import {
    transformDate
} from "../../script/utils/transformDate.js";

export class CommitCard {
    constructor(name, email, date, message, avatar_url) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.avatar_url = avatar_url;

        this.commitElement = this._create();
    }

    _create(name, email, date, message, avatar_url) {

        const commitContainer = document.createElement('div');
        commitContainer.classList.add('slide');
        commitContainer.classList.add('swiper-slide');

        const commitDate = document.createElement('p');
        commitDate.classList.add('slide__date');
        commitDate.textContent = transformDate(this.date);

        commitContainer.appendChild(commitDate);

        const commitInfoBlock = document.createElement('div');
        commitInfoBlock.classList.add('slide__info-block');

        commitContainer.appendChild(commitInfoBlock);

        const commitIcon = document.createElement('img');
        commitIcon.classList.add('slide__icon');
        commitIcon.setAttribute('src', this.avatar_url);
        commitIcon.setAttribute('alt', 'аватар автора коммита');

        commitInfoBlock.appendChild(commitIcon);

        const commitInfo = document.createElement('div');
        commitInfo.classList.add('slide__info');

        commitInfoBlock.appendChild(commitInfo);

        const commitName = document.createElement('h4');
        commitName.classList.add('slide__name');
        commitName.textContent = this.name;

        commitInfo.appendChild(commitName);

        const commitEmail = document.createElement('p');
        commitEmail.classList.add('slide__email');
        commitEmail.textContent = this.email;

        commitInfo.appendChild(commitEmail);

        const commitMessage = document.createElement('p');
        commitMessage.classList.add('slide__text');
        commitMessage.textContent = this.message;

        commitContainer.appendChild(commitMessage);

        return commitContainer;
    }

}
