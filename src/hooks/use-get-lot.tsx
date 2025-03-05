import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { getLot } from "@/api/chart/get-lot";
import { z } from "zod";

export const getLotSchema = z.object({
	unit: z.string().min(1, "Selecione uma unidade"),
	timeInterval: z.object({
		from: z.date(),
		to: z.date(),
	}),
});

export function useGetLot() {
	const form = useFormMutation({
		schema: getLotSchema,
		defaultValues: {
			unit: "",
			timeInterval: {
				from: new Date(),
				to: new Date(),
			},
		},
		onSubmit: (data) => {
			console.log({
				unit: data.unit,
				initialDate: format(data.timeInterval.from, "dd/MM/yyyy"),
				finalDate: format(data.timeInterval.to, "dd/MM/yyyy"),
			});
		},
	});

	const { mutate: getLotFn, isLoading: isLoadingGetLot } = useMutation({
		mutationFn: getLot,
		mutationKey: ["get-lot"],
		onSuccess: () => {},
	});

	return {
		form,
		isLoadingGetLot,
		getLotFn,
	};
}
