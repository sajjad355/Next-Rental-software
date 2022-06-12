/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { rentalFeeCalculate } from "../rentalFeeCalculate";

describe("Rental fee calculate", () => {
    test("3 * 4 = 12", () => {
        const result = rentalFeeCalculate(3, 4);
        expect(result).toEqual(12);
    });

    test("5 * 6 = 30", () => {
        const result = rentalFeeCalculate(5, 6);
        expect(result).toEqual(30);
    });
});
