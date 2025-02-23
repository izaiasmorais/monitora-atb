import { useState } from "react";
import { toast } from "sonner";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { useManualStore } from "@/store/use-manual";
import { editPrescription } from "@/api/prescriptions/edit-prescription";
import { prescriptionFormSchema } from "@/components/prescriptions/schemas/prescription";

export function useEditPrescription() {
	const { setIsManually } = useManualStore();
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const [prescriptionId, setPrescriptionId] = useState("");

	const { mutate: editPrescriptionFn, isLoading: isLoadingEditPrescription } =
		useMutation({
			mutationFn: editPrescription,
			mutationKey: ["edit-prescription"],
			onSuccess: (data) => {
				if (data.success) {
					queryClient.invalidateQueries({
						queryKey: ["prescriptions"],
					});
					toast.success("Prescrição editada com sucesso!");
					setIsSheetOpen(false);
					setIsManually(false);
					form.reset();
				}
			},
		});

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
			editPrescriptionFn({
				prescriptionId,
				body: { ...data },
			});
		},
	});

	return {
		form,
		isLoadingEditPrescription,
		isSheetOpen,
		setIsSheetOpen,
		setPrescriptionId,
	};
}
