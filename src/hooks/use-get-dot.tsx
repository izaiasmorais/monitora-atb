import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { createPrescription } from "@/api/prescriptions/create-prescriptions";
import { z } from "zod";
import { format } from "date-fns";

export const getDotSchema = z.object({
	medicine: z.string().min(1, "Selecione um medicamento"),
	unit: z.string().min(1, "Selecione uma unidade"),
	timeInterval: z.object({
		from: z.date(),
		to: z.date(),
	}),
});

export type GetDotData = z.infer<typeof getDotSchema>;

export function useGetdot() {
	const form = useFormMutation({
		schema: getDotSchema,
		defaultValues: {
			medicine: "",
			unit: "all",
			timeInterval: {
				from: new Date(),
				to: new Date(),
			},
		},
		onSubmit: (data) => {
			console.log({
				medicie: data.medicine,
				unit: data.unit,
				initialDate: format(data.timeInterval.from, "dd/MM/yyyy"),
				finalDate: format(data.timeInterval.to, "dd/MM/yyyy"),
			});
		},
	});

	const { mutate: getDotFn, isLoading: isLoadingGetDot } = useMutation({
		mutationFn: createPrescription,
		mutationKey: ["get-dot"],
		onSuccess: () => {},
	});

	return {
		form,
		isLoadingGetDot,
	};
}
