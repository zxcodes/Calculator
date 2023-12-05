function isNullOrEmptyInput(input) {
	if (input.length == 0 || input == null) {
		return true;
	}

	return false;
}

function countOperators(input) {
	let count = 0;
	let operator = "+";

	for (let i = 0; i < input.length; i++) {
		if (input[i] == operator) {
			count++;
		}
	}

	return count;
}

function checkConsecutive(input) {
	let operators = ["+", "-", "*", "/"];
	let count = 0;
	let countCurrent = 0;
	let counts = [];

	operators.forEach((element) => {
		for (let i = 0; i < input.length; i++) {
			if (input[i] === element) {
				countCurrent++;
				count = Math.max(count, countCurrent);
			} else {
				countCurrent = 0;
			}
		}

		counts.push(count);
	});

	return Math.max(...counts);
}

module.exports = { isNullOrEmptyInput, countOperators, checkConsecutive };
