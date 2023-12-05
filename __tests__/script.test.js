const { describe, test, expect } = require("@jest/globals");
const { isNullOrEmptyInput, countOperators, checkConsecutive } = require("../scripts/validator");

describe("check input", () => {
	test("check for empty or null input", () => {
		const input = "";

		expect(isNullOrEmptyInput(input)).toBe(true);
	});

	test("check number of math operators", () => {
		const inputs = ["50+10+20"];

		expect(countOperators(inputs[0])).toBe(2);
	});

	test("check consecutive math operators", () => {
		const inputs = ["--50", "50--", "50***", "//50", "1+50"];

		expect(checkConsecutive(inputs[0])).toBe(2);
		expect(checkConsecutive(inputs[1])).toBe(2);
		expect(checkConsecutive(inputs[2])).toBe(3);
		expect(checkConsecutive(inputs[3])).toBe(2);
		expect(checkConsecutive(inputs[4])).toBe(1);
	});
});
