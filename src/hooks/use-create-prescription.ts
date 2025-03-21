import { useState } from "react";
import { toast } from "sonner";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { createPrescription } from "@/api/prescriptions/create-prescriptions";
import { queryClient } from "@/lib/react-query";
import { useManualStore } from "@/store/use-manual";
import { prescriptionFormSchema } from "@/components/prescriptions/schemas/prescription";

export function useCreatePrescription() {
	const { setIsManually } = useManualStore();
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const form = useFormMutation({
		schema: prescriptionFormSchema,
		defaultValues: {
			medicalRecord: "",
			patientName: "",
			unit: "",
			medicine: "",
			via: "",
			dose: "",
			posology: "",
			treatmentDays: [],
		},
		onSubmit: (data) => {
			createPrescriptionFn(data);
		},
	});

	const {
		mutate: createPrescriptionFn,
		isLoading: isLoadingCreatePrescription,
	} = useMutation({
		mutationFn: createPrescription,
		mutationKey: ["create-prescription"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["prescriptions"],
			});
			toast.success("Prescrição criada com sucesso!");
			setIsSheetOpen(false);
			form.reset();
			setIsManually(false);
		},
	});

	return {
		form,
		isLoadingCreatePrescription,
		isSheetOpen,
		setIsSheetOpen,
	};
}
