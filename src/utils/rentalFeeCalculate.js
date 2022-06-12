/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { ErrorLog } from "../helper/log";

export const rentalFeeCalculate = (price, dayDiff) => {
  let rentalFee = 0;
  if (!isNaN(+dayDiff) && !isNaN(+price)) {
    try {
      rentalFee = dayDiff * price;
    } catch (err) {
      ErrorLog(err);
    }
  } else {
    ErrorLog("rentalFeeCalculate(): dayDiff or price is missing");
    throw new Error("rentalFeeCalculation(): dayDiff or price is missing");
  }

  return rentalFee;
};
