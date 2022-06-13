/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { ErrorLog } from "../helper/log";

export const dayDifferenceCalculate = (toDate, fromDate) => {
    let result = 0;
    if (toDate && fromDate) {
        try {
            result = (toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24);

        } catch (err) {
            ErrorLog(err);
        }
    } else {
        ErrorLog("dayDifferenceCalculate()= daydiff invalid: date validation failed for fromDate or toDate)");
        throw new Error(
            "Invalid Start or End Date"
        );
    }

    return result;
};
