"use client";
import { PrescriptionFormData } from "../schemas/prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { useManualStore } from "@/store/use-manual";

export function ViaCombobox({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
}) {
	const { isManually } = useManualStore();
	const { vias, getVias } = usePrescriptions();
	const viasOptions = isManually ? vias : getVias(form.watch("medicine"));

	return (
		<Combobox
			form={form}
			options={viasOptions}
			entity="via"
			translatedEntity="Via de Administração"
		/>
	);
}
