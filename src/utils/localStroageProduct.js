import Data from "../data/data.json"
import { ErrorLog } from "../helper/log";


export const saveProducts = (dataObj) => {

    try {
        if (dataObj) {
            localStorage.setItem('data', JSON.stringify(dataObj))
        }
        else {
            if (localStorage.getItem('data')) { }
            else {
                localStorage.setItem('data', JSON.stringify(Data))
            }
        }
    } catch (err) {
        ErrorLog("Save Error:" + err);
    }
};