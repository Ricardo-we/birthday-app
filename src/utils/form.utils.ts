export interface createFormOnSubmitHandlerOptions {
	resetOnSubmit: boolean;
}

type formikOnSubmitFunc = (values: any, helpers?: any) => any;

export const defaultSubmitHandler = async (
	values: any,
	formikHelpers: any,
	onSubmit?: formikOnSubmitFunc
) => {
	formikHelpers.setSubmitting(true);
	onSubmit && (await onSubmit(values, formikHelpers));
	formikHelpers.setSubmitting(false);
};

export function createFormOnSubmitHandler(
	onSubmit?: formikOnSubmitFunc,
	options?: createFormOnSubmitHandlerOptions
) {
	return async (values: any, formikHelpers: any) => {
		await defaultSubmitHandler(values, formikHelpers, onSubmit);
		if (options?.resetOnSubmit) formikHelpers.resetForm();
	};
}
