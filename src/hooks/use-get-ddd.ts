import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { getDdd } from "@/api/chart/get-ddd";
import { z } from "zod";

export const getDddSchema = z.object({
	unit: z.string().min(1, "Selecione uma unidade"),
	timeInterval: z.object({
		from: z.date(),
		to: z.date(),
	}),
});

export function useGetDdd() {
	const form = useFormMutation({
		schema: getDddSchema,
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

	const { mutate: getDddFn, isLoading: isLoadingGetDdd } = useMutation({
		mutationFn: getDdd,
		mutationKey: ["get-ddd"],
		onSuccess: () => {},
	});

	return {
		form,
		isLoadingGetDdd,
		getDddFn,
	};
}
