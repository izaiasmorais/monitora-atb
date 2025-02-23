import { prescriptionFormData } from "@/mocks/prescription-form-data";

export function useDoses() {
	const allDoses = prescriptionFormData
		.flatMap((medication) => medication.doses)
		.filter((dose, index, self) => self.indexOf(dose) === index)
		.sort((a, b) => {
			const parseDose = (dose: string) => {
				const match = dose.match(/(\d+\.?\d*)\s*([A-Z]+)/i);
				if (!match) return { value: 0, unit: "", unitWeight: 0 };

				const value = parseFloat(match[1]);
				const unit = match[2].toUpperCase();

				const unitWeights: Record<string, number> = {
					UI: 1,
					MG: 2,
					G: 3,
				};

				return {
					value,
					unit,
					unitWeight: unitWeights[unit] || 0,
				};
			};

			const doseA = parseDose(a);
			const doseB = parseDose(b);

			if (doseA.unitWeight !== doseB.unitWeight) {
				return doseA.unitWeight - doseB.unitWeight;
			}

			return doseA.value - doseB.value;
		});

	return { allDoses };
}
