import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { createPrescription } from "@/api/prescriptions/create-prescriptions";
import { queryClient } from "@/lib/react-query";

const createPrescriptionsFormSchema = z.object({
	medicalRecord: z.string().min(1, "Número do prontuário é obrigatório"),
	name: z.string().min(1, "Nome do paciente é obrigatório"),
	unit: z.string().min(1, "Unidade é obrigatória"),
	medicine: z.string().min(1, "Medicamento é obrigatório"),
	via: z.string().min(1, "Via de administração é obrigatória"),
	dose: z.coerce.number().min(1, "Dose é obrigatória"),
	posology: z.string().min(1, "Posologia é obrigatória"),
	posologyDays: z.array(z.string()).min(1, "Dias de tratamento é obrigatório"),
});

export type CreatePrescriptionFormData = z.infer<typeof createPrescriptionsFormSchema>;

export function useCreatePrescription() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

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
		},
	});

	const { register, handleSubmitForm, control, setValue } = useFormMutation({
		schema: createPrescriptionsFormSchema,
		defaultValues: {
			medicalRecord: "",
			name: "",
			unit: "",
			medicine: "",
			via: "",
			dose: 0,
			posology: "",
			posologyDays: [],
		},
		onSubmit: (data) => {
			createPrescriptionFn({
				...data,
			});
		},
	});

	return {
		register,
		handleSubmitForm,
		control,
		setValue,
		isSheetOpen,
		setIsSheetOpen,
		isLoadingCreatePrescription,
	};
}
