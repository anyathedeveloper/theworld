const TODAY = new Date();
const WEEK_AGO = new Date(TODAY.setDate(TODAY.getDate() - 6));
const THAT_DAY = WEEK_AGO.toISOString().slice(0, 10);
const THIS_DAY = new Date().toISOString().slice(0, 10);
const MCS_PER_DAY = 24 * 60 * 60 * 1000;
const MONTH_RUS = new Intl.DateTimeFormat("ru", {
    month: "long",
});
const WEEK = 6;

export {
    TODAY,
    WEEK_AGO,
    THAT_DAY,
    THIS_DAY,
    MCS_PER_DAY,
    MONTH_RUS,
    WEEK
};
