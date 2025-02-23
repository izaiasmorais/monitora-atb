"use client";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { units } from "@/mocks/units";

export function UnitCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
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
