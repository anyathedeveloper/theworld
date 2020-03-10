export class NewsApi {
    constructor(url) {
        this.url = url;
    }

    getNews() {
        return fetch(this.url)
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response.json());
                }
                return new Promise.reject(console.log(response.status));
            })
            .then(data => {
                if (this.data === 0) {
                    return Promise.reject(`Ошибка: ${response.statusText}`);
                }
                return data;
            })
    }
}
