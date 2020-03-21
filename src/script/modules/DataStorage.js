export class DataStorage {
    constructor() {}

    storeData(data) {
        const fromApi = JSON.stringify(data);
        localStorage.setItem('fromApi', fromApi);
    }

    storeWord(inputValue) {
        localStorage.setItem('word', inputValue);
    }

    getData() {
        return JSON.parse(localStorage.getItem('fromApi'));
    }

    getWord() {
        return localStorage.getItem('word')
    }
}
