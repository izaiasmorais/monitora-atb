export const getStorageItem = (key: string): string | null => {
	if (typeof window === "undefined") {
		return null; // Retorna null no lado do servidor
	}

	const item = localStorage.getItem(key);

	if (!item) {
		return null;
	}

	return item;
};
