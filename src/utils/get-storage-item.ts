// utils/format-currency.ts
export const getStorageItem = (key?: string): any | null => {
	if (!key || typeof window === "undefined") {
		return null;
	}

	const item = window.localStorage.getItem(key);

	if (!item) {
		return null;
	}

	try {
		return JSON.parse(item);
	} catch (error) {
		return item;
	}
};
