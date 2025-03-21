import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { getDot } from "@/api/chart/get-dot";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const getDotSchema = z.object({
	unit: z.string().min(1, "Selecione uma unidade"),
	timeInterval: z.object(
		{
			from: z.date({
				message: "Selecione uma data inicial.",
			}),
			to: z.date({
				message: "Selecione uma data final.",
			}),
		},
		{
			message: "Intervalo de tempo inválido.",
		}
	),
});

export function useGetDot() {
	const [dot, setDot] = useState<string | null>(null);

	const { mutateAsync, isLoading: isLoadingGetDot } = useMutation({
		mutationFn: getDot,
		onSuccess: (response) => {
			if (response.success === true) {
				setDot(response.data.dot === 0 ? "0" : response.data.dot.toFixed(1));
				toast.success("DOT calculado com sucesso.");
				return;
			}

			toast.error(response.error);
		},
	});

	const form = useFormMutation({
		schema: getDotSchema,
		defaultValues: {
			unit: "",
			timeInterval: {
				from: new Date(),
				to: new Date(),
			},
		},
		onSubmit: (data) => {
			mutateAsync({
				unit: data.unit,
				startDate:
					format(data.timeInterval.from, "yyyy-MM-dd") + "T00:00:00.000Z",
				endDate: format(data.timeInterval.to, "yyyy-MM-dd") + "T00:00:00.000Z",
			});
		},
	});

	return {
		form,
		isLoadingGetDot,
		dot,
	};
}
