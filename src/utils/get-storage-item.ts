// utils/format-currency.ts
export const getStorageItem = (key?: string): any | null => {
	if (!key || typeof window === "undefined") {
		return null;
	}

	const item = window.localStorage.getItem(key);

	// Se o item não existir, retorna null
	if (!item) {
		return null;
	}

	// Tenta fazer o parse do JSON; se falhar, retorna o item como string
	try {
		return JSON.parse(item);
	} catch (error) {
		return item; // Retorna o valor original se não for um JSON válido
	}
};
