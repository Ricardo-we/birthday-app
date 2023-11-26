export const getSelectorItemName = (selectorItem: any, currentLan: string) => {
	// const { extra } = selectorItem;
	const extra = selectorItem?.extra ?? {};
	if (extra) {
		const { translations } = extra;
		if (translations && translations[currentLan]?.name)
			return translations[currentLan]?.name;
	}
	return selectorItem?.name;
};

export const getAutoCompleteSelectorItemOptionLabel = (
	option: any,
	user: any,
	selctorItemsDict: { [key: string]: any }
) =>
	!option?.label
		? getSelectorItemName(selctorItemsDict?.[option], user?.language)
		: option?.label;

export const getSelectorItemExtra = (selectorItem: any) => {
	const extra = selectorItem?.extra ?? {};
	return extra;
};
