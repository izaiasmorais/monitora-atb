export const translateNewPrescriptionsTableKeys = (key: string) => {
	const translations: Record<string, string> = {
		medicalRecord: "Prontuário",
		patientName: "Nome do Paciente",
		medicine: "Medicamento",
		unit: "Unidade",
		dose: "Dose",
		via: "Via",
		posology: "Posologia",
		treatmentDays: "Dias de Tratamento",
		createdAt: "Data de Criação",
		updatedAt: "Data de Atualização",
	};

	return translations[key] || key;
};
