/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import { dayDifferenceCalculate } from "../dayDifferenceCalculate";


describe("date difference", () => {

    test("15 may - 12 may = 3", () => {
        const testData = dayDifferenceCalculate(
            new Date(`Thu May 15 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`),
            new Date(`Tue May 12 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`)
        );
        expect(testData).toEqual(3);
    });

    test("15 may - 11 may = 4", () => {
        const testData = dayDifferenceCalculate(
            new Date(`Thu May 15 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`),
            new Date(`Tue May 11 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`)
        );
        expect(testData).toEqual(4);
    });

    // Error case for startDate > endDate
    test("10 may - 11 may = 4", () => {
        const testData = dayDifferenceCalculate(
            new Date(`Thu May 10 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`),
            new Date(`Tue May 11 2022 10:10:10 GMT+0600 (Bangladesh Standard Time)`)
        );
        expect(testData).toBeLessThan(1);
    });
});