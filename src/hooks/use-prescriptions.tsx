import { prescriptionFormData } from "@/mocks/data";

export function usePrescriptions() {
	const medicines = prescriptionFormData.map((medication) => ({
		label: medication.name,
		value: medication.name,
	}));

	function getDoses(medName: string) {
		const med = prescriptionFormData.find((m) => m.name === medName);
		return med ? med.doses.map((dose) => ({ label: dose, value: dose })) : [];
	}

	function getVias(medName: string) {
		const med = prescriptionFormData.find((m) => m.name === medName);
		return med ? med.vias.map((via) => ({ label: via, value: via })) : [];
	}

	function getPosologies(medName: string) {
		const med = prescriptionFormData.find((m) => m.name === medName);
		return med ? med.posologies.map((pos) => ({ label: pos, value: pos })) : [];
	}

	return { medicines, getDoses, getVias, getPosologies };
}
