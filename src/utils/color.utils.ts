import { lessThan } from "./number.utils";

export function rgbSemaforization(
	lowerLimit: number,
	middleLimit: number,
	upperLimit: number,
	value: number
) {
	let r, g;
	let b = "00";

	if (value < lowerLimit) {
		r = "ff";
		g = "00";
	} else if (value < middleLimit) {
		var ratio = (value - lowerLimit) / (middleLimit - lowerLimit);
		r = "ff";
		g = Math.round(255 * ratio)
			.toString(16)
			.padStart(2, "0");
	} else if (value < upperLimit) {
		var ratio = (value - middleLimit) / (upperLimit - middleLimit);
		r = Math.round(255 * (1 - ratio))
			.toString(16)
			.padStart(2, "0");
		g = "ff";
	} else {
		r = "00";
		g = "ff";
	}

	return `#${r}${g}${b}`;
}

export const nonComplianceRateColor = (nonComplianceRate: number): string => {
	return rgbSemaforization(0, 0.5, 1, 1 - nonComplianceRate);
	// let red = 0;
	// let green = 0;

	// if (nonComplianceRate < 30) {
	// 	green = 255;
	// } else if (nonComplianceRate < 65) {
	// 	red = 255;
	// 	green = 255;
	// } else {
	// 	// green = 255;
	// 	red = 255;
	// 	green = 0;
	// }

	// return `rgb(${red}, ${green}, ${0})`;
};
