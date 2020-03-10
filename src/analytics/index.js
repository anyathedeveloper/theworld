import "../pages/analytics.css";
import '../images/favicon.ico';

import {
    Statistics
} from "../script/components/Statistics.js"; 

import {
    DataStorage
} from "../script/modules/DataStorage.js";


window.onload = () => new Statistics(new DataStorage());
