import {
    DataStorage
} from "../modules/DataStorage.js";

import {
    capitalizeWord
} from "../utils/capitalizeWord.js";

import {
    TODAY,
    MCS_PER_DAY,
    MONTH_RUS,
    WEEK
} from "../constants/dates.js";

import {
    INQUIRY,
    WEEKLY_RESULTS,
    HEADINGS,
    GRID_MONTH,
    GRID_DAY,
    CHARTS,
    AMOUNT_OF_NEWS
} from "../constants/elements.js";


export class Statistics {
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
        this._makeTheInquiry();
        this._calculateCurrentDate();
        this._countMentions();
    }

    /* шапка запроса: поисковое слово (с большой буквы, в кавычках), 
                      новостей за неделю, 
                      упоминаний в заголовках */

    _makeTheInquiry() {
        const word = this.dataStorage.getWord();

        /* вы спросили + новостей за неделю */

        INQUIRY.textContent = '«' + capitalizeWord(word) + '»';
        WEEKLY_RESULTS.textContent = this.dataStorage.getData().totalResults;

        /* точные упоминания в заголовках (вкл. разный регистр) */

        let allTitles = 0;

        const articles = this.dataStorage.getData().articles;

        for (let i = 0; i < articles.length; i++) {
            if (articles[i].title.toLowerCase().includes(word.toLowerCase())) {
                allTitles += 1;
            }
        }
        return HEADINGS.textContent = allTitles;
    }

    /* актуальный месяц и дни недели в чарте */

    _calculateCurrentDate() {

        GRID_MONTH.textContent = MONTH_RUS.format(TODAY); /* подставляем текущий месяц в таблицу */

        let theWeek = [];

        for (let i = WEEK; i >= 0; i--) {
            const weeknumber = new Date(new Date().getTime() - i * MCS_PER_DAY).toLocaleDateString("ru", {
                day: "numeric"
            });
            const weekday = new Date(new Date().getTime() - i * MCS_PER_DAY).toLocaleDateString("ru", {
                weekday: "short"
            });

            const currentDate = weeknumber + ', ' + weekday;
            theWeek.push(currentDate);
        }

        for (let i = 0; i < theWeek.length; i++) {
            GRID_DAY[i].textContent = theWeek[i];
        }
    }

    /* считаем кол-во упоминаний в новостях каждый день */

    _countMentions() {

        const newsThatDay = {};

        this.dataStorage.getData().articles.forEach(item => {
            const day = new Date(item.publishedAt.substring(0, 10)).getDate();

            if (day in newsThatDay) {
                newsThatDay[day]++;
            } else {
                newsThatDay[day] = 1;
            }
        });

        const daysList = new Date().getDate();
        const currentWeek = new Map();
        for (let i = WEEK; i >= 0; i--) {
            currentWeek.set(daysList - i, 0);
        }

        const objNewsThatDay = Object.fromEntries(currentWeek.entries());
        this._renderChart(Object.assign(objNewsThatDay, newsThatDay));
    }

    /* отрисовываем чарт */

    _renderChart(data) {

        const weeklyNewsAmount = Object.values(data);

        for (let i = 0; i < weeklyNewsAmount.length; i++) {
            if (weeklyNewsAmount[i] !== 0) {
                CHARTS[i].style.width = `${weeklyNewsAmount[i]}%`;
                AMOUNT_OF_NEWS[i].textContent = weeklyNewsAmount[i];
            } else if (weeklyNewsAmount[i] === 0) {
                CHARTS[i].style.width = 0;
                AMOUNT_OF_NEWS[i].textContent = 0;
                AMOUNT_OF_NEWS[i].style.color = '#000';
            } else {
                return false;
            }
        }
    }
}
