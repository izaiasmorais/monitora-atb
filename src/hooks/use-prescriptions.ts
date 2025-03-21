import { prescriptionFormData } from "@/mocks/prescription-form-data";
import { useDoses } from "./use-doses";

export function usePrescriptions() {
	const { allDoses } = useDoses();

	const medicines = prescriptionFormData.map((medication) => ({
		label: medication.name,
		value: medication.name,
	}));

	const allVias = prescriptionFormData
		.flatMap((medication) => medication.vias)
		.filter((via, index, self) => self.indexOf(via) === index);

	const allPosologies = prescriptionFormData
		.flatMap((medication) => medication.posologies)
		.filter((posology, index, self) => self.indexOf(posology) === index);

	const doses = allDoses.map((dose) => ({ label: dose, value: dose }));
	const vias = allVias.map((via) => ({ label: via, value: via }));
	const posologies = allPosologies.map((pos) => ({ label: pos, value: pos }));

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

	return {
		medicines,
		doses,
		vias,
		posologies,
		getDoses,
		getVias,
		getPosologies,
	};
}
