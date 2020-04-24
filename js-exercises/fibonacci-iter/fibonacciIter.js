const fibonacciIter = {
	[Symbol.iterator]() {
		let firstNum = 1;
		let secondNum = 2;
		let current;
		return {
			next() {
				current = firstNum;
				firstNum = secondNum;
				secondNum = firstNum + current;
				return { value: current, done: false };
			},
			return(value) {
				return { value, done: true };
			}
		};
	}
};

export { fibonacciIter };
