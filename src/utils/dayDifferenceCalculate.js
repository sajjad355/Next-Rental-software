import { ErrorLog } from "../helper/log";

export const dayDifferenceCalculate = (endDate, startDate) => {
    let dayDiff = 0;
    if (!isNaN(+endDate) && !isNaN(+startDate)) {
        console.log(endDate);
        console.log(startDate);
        try {
            dayDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

        } catch (err) {
            console.log(err);
        }
    } else {
        ErrorLog("dayDifferenceCalculate()= daydiff invalid: date validation failed for startdate or enddate)");
        throw new Error(
            "Invalid Start or End Date"
        );
    }
    console.log(dayDiff)

    return dayDiff;
};
