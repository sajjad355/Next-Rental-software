import Data from "../data/data.json"
import { ErrorLog } from "../helper/log";


export const saveProducts = () => {

    try {
        if (localStorage.getItem('data')) { }
        else {
            localStorage.setItem('data', JSON.stringify(Data))
        }
    } catch (err) {
        ErrorLog("Save Error:" + err);
    }
};

export const updateProducts = (dataObj) => {

    try {
        { localStorage.setItem('data', JSON.stringify(dataObj)) }

    } catch (err) {
        ErrorLog("Save Error:" + err);
    }
};
