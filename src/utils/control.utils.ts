import { filterByKey } from "./array.utils";

export const getStrategyExecution = (strategy: any) => {
	const currentYear = new Date().getFullYear();
	const executions = strategy?.executions || [];
	const filter = filterByKey(executions, "year", currentYear);
	return filter.length > 0 && filter[0];
};
