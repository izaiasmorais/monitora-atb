"use client";
import { PrescriptionFormData } from "../schemas/prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";

export function MedicineCombobox({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
}) {
	const { medicines } = usePrescriptions();

	return (
		<Combobox
			form={form}
			options={medicines}
			entity="medicine"
			translatedEntity="Medicamento"
		/>
	);
}
