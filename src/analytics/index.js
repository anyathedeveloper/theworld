import "../pages/analytics.css";
import '../images/favicon.ico';

import {
    Statistics
} from "../blocks/results/Statistics.js";

import {
    DataStorage
} from "../script/modules/DataStorage.js";

const dataStorage = new DataStorage();

window.onload = () => new Statistics(dataStorage);
