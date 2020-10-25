const sum = require('./sum');

test("assert sum 1 + 3 to equal to 3", () => {
	expect(sum(1,2)).toBe(4);
})