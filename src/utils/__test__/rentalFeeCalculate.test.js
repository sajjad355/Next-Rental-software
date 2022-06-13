/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { rentalFeeCalculate } from "../rentalFeeCalculate";

describe("Rental fee calculate", () => {
    // Success Case
    test("3 * 4 = 12", () => {
        const result = rentalFeeCalculate(3, 4);
        expect(result).toEqual(12);
    });

    test("5 * 6 = 30", () => {
        const result = rentalFeeCalculate(5, 6);
        expect(result).toEqual(30);
    });

    // Error Case
    test("string * 6 = 30", () => {
        const result = rentalFeeCalculate("string", 6);
        expect(result).toEqual(NaN);
    });

});
