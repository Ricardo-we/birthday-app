export function localStorageExists(storageKey: string) {
	const storedItemExists =
		typeof window !== "undefined" && !!localStorage.getItem(storageKey);
	return storedItemExists;
}
