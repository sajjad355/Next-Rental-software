/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { ErrorLog } from "../helper/log";

export const rentalFeeCalculate = (price, dayDiff) => {
  let result = 0;
  if (dayDiff && price) {
    try {
      result = dayDiff * price;
    } catch (err) {
      ErrorLog(err);
    }
  } else {
    ErrorLog("rentalFeeCalculate(): dayDiff or price is missing");
    throw new Error("rentalFeeCalculation(): dayDiff or price is missing");
  }

  return result;
};
