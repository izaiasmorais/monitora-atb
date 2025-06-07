"use client";
import { PrescriptionFormData } from "../schemas/prescription";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { units } from "@/mocks/hospital-units";

export function UnitCombobox({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
}) {
	return (
		<Combobox
			form={form}
			options={units}
			entity="unit"
			translatedEntity="Unidade"
		/>
	);
}
