/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import Data from "../data/data.json"
import { ErrorLog } from "../helper/log";


export const saveProducts = (dataObj) => {

    try {
        if (dataObj) {
            localStorage.setItem('data', JSON.stringify(dataObj))
        }
        else {
            if (!(localStorage.getItem('data')))
                localStorage.setItem('data', JSON.stringify(Data))
        }
    } catch (err) {
        ErrorLog("Save Error:" + err);
    }
};

export const getProducts = () => {

    try {
        let data = [];
        data = JSON.parse(localStorage.getItem("data"))
        return data;

    } catch (err) {
        ErrorLog("Get Error:" + err);
    }
};

export const removeProducts = () => {

    try {
        localStorage.removeItem("data");

    } catch (err) {
        ErrorLog("Remove Error:" + err);
    }
};

