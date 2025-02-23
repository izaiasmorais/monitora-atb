"use client";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";
import { useManualStore } from "@/store/use-manual";

export function DoseCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { isManually } = useManualStore();
	const { doses, getDoses } = usePrescriptions();
	const dosesOptions = isManually ? doses : getDoses(form.watch("medicine"));

	return (
		<Combobox
			form={form}
			options={dosesOptions}
			entity="dose"
			translatedEntity="Dose"
		/>
	);
}
