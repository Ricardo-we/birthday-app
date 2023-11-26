export function calcPercentageVariation(
	realAmount: number,
	originalAmount: number
) {
	return ((realAmount - originalAmount) / originalAmount) * 100;
}

export function lessThan(lessThanNumber: number, ...numbers: number[]) {
	return (
		numbers.sort((a, b) => b - a).find(number => number < lessThanNumber) ??
		lessThanNumber
	);
}
