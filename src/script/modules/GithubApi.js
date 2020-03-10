export class GithubApi {
    constructor(url) {
        this.url = url;
    }

    getCommits() {
        return fetch(this.url)
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response.json());
                }
            })
            .then(data => {
                if (this.data === 0) {
                    return Promise.reject(`Ошибка: ${response.statusText}`);
                }
                return data;
            })
    }
}
