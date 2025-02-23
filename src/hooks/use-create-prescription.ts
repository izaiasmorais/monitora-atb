import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { createPrescription } from "@/api/prescriptions/create-prescriptions";
import { queryClient } from "@/lib/react-query";
import { useManualStore } from "@/store/use-manual";

const createPrescriptionsFormSchema = z.object({
	medicalRecord: z.string().min(1, "O Número do prontuário é obrigatório"),
	patientName: z.string().min(1, "O Nome do paciente é obrigatório"),
	unit: z.string().min(1, "A Unidade é obrigatória"),
	medicine: z.string().min(1, "O Medicamento é obrigatório"),
	via: z.string().min(1, "A Via de administração é obrigatória"),
	dose: z.coerce.string().min(1, "A Dose é obrigatória"),
	posology: z.string().min(1, "A Posologia é obrigatória"),
	treatmentDays: z.array(z.string()).min(1, "Defina os dias de tratamento"),
});

export type CreatePrescriptionFormData = z.infer<
	typeof createPrescriptionsFormSchema
>;

export function useCreatePrescription() {
	const { setIsManually } = useManualStore();
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const form = useFormMutation({
		schema: createPrescriptionsFormSchema,
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
