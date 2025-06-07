export function translateMedicinesTableKeys(key: string): string {
	const translations: Record<string, string> = {
		id: "ID",
		name: "Nome",
		description: "Descrição",
		doses: "Doses",
		vias: "Vias",
		posologies: "Posologias",
		createdAt: "Criado em",
		updatedAt: "Atualizado em",
		actions: "Ações",
	};

	return translations[key] || key;
}
