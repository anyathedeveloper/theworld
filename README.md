# anyathedeveloper.github.io

# **Проект NEWSANALYZER, диплом** 
## версия v3.0.0
### автор: Аня Фокова, Яндекс.Практикум

Проект NEWSANALYZER собирает новости по ключевому запросу за последнюю неделю, выводит их на главную страницу и анализирует частотность. 

## Первый этап проекта: вёрстка и инфраструктура

В разработке первого этапа использовались: HTML, CSS, Вебпак, JS для активации слайдера [Swiper](https://swiperjs.com/). 

## Второй этап проекта: JS

В разработке второго этапа использовался чистый JS ES6. 

## Функционал 

После ввода ключевого слова из [News API](https://newsapi.org/) берутся новости по запросу за последнюю неделю, сначала сохраняются в локальном хранилище браузера, потом размещаются в карточки, структура которых строится при помощи JS. Во время поиска работает прелоадер, если поиск безуспешен, появляется блок безуспешного поиска. Информация из локального хранилища используется для составления графика аналитики на странице с аналитикой. 

По тому же принципу из [GitHub API](https://developer.github.com/v3/) берётся информация о последних 20 коммитах и размещается на странице "О проекте".

### что изменилось в новой версии (v3.0.0):

Косметические изменения: 

- иконка фейсбука заменена на иконку линкедина, 
- некрасивый квадратный аутлайн у инпута и кнопок убран и/или заменен на бокс-шедоу,
- заполнена секция "О себе", 
- в футере указана ссылка на [News API](https://newsapi.org/) в соответствии с правилами пользования. 

## Как развернуть проект у себя 

- скачайте все файлы или клонируйте их себе [с актуальной рабочей ветки гитхаба](https://github.com/anyathedeveloper/theworld),
- запустите `$ npm install` через GIT-терминал, чтобы загрузить и установить все плагины, 
- команда `$ npm run build` сделает локальную сборку, 
- команда `$ npm run dev` сделает сборку на локальном сервере и откроет сайт в браузере, 
- команда `$ npm run deploy` зальёт проект на GH-PAGES, хостинг ГитХаба. 

## Как открыть проект в интернете

[Ссылка на страницу на GH-pages](https://anyathedeveloper.github.io/theworld/index.html)
