/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { ErrorLog } from "../helper/log";

export const dayDifferenceCalculate = (endDate, startDate) => {
    let result = 0;
    if (endDate && startDate) {
        try {
            result = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

        } catch (err) {
            ErrorLog(err);
        }
    } else {
        ErrorLog("dayDifferenceCalculate()= daydiff invalid: date validation failed for startdate or enddate)");
        throw new Error(
            "Invalid Start or End Date"
        );
    }

    return result;
};
