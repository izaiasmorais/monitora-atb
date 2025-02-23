"use client";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { useManualStore } from "@/store/use-manual";

export function ViaCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
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
