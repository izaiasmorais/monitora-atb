"use client";
import { PrescriptionFormData } from "../schemas/prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { useManualStore } from "@/store/use-manual";

export function PosologyCombobox({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
}) {
	const { isManually } = useManualStore();
	const { posologies, getPosologies } = usePrescriptions();
	const posologiesOptions = isManually
		? posologies
		: getPosologies(form.watch("medicine"));

	return (
		<Combobox
			form={form}
			options={posologiesOptions}
			entity="posology"
			translatedEntity="Posologia"
		/>
	);
}
