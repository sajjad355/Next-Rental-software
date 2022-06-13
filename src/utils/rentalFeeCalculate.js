/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { ErrorLog } from "../helper/log";

export const rentalFeeCalculate = (priceOfProduct, dayDifference) => {
  let result = 0;
  if (dayDifference && priceOfProduct) {
    try {
      result = dayDifference * priceOfProduct;
    } catch (err) {
      ErrorLog(err);
    }
  } else {
    ErrorLog("rentalFeeCalculate(): dayDifference or priceOfProduct is missing");
    throw new Error("rentalFeeCalculation(): dayDifference or priceOfProduct is missing");
  }

  return result;
};
