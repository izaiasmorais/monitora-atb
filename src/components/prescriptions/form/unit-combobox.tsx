"use client";
import { PrescriptionFormData } from "../schemas/prescription";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { hospitalUnits } from "@/mocks/hospital-units";

export function UnitCombobox({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
}) {
	return (
		<Combobox
			form={form}
			options={hospitalUnits.map((unit) => ({
				label: unit.name,
				value: unit.id,
			}))}
			entity="unit"
			translatedEntity="Unidade"
		/>
	);
}
