import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { getLot } from "@/api/chart/get-lot";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const getLotSchema = z.object({
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

export function useGetLot() {
	const [lot, setLot] = useState<string | null>(null);

	const { mutateAsync, isLoading: isLoadingGetLot } = useMutation({
		mutationFn: getLot,
		onSuccess: (response) => {
			if (response.success === true) {
				setLot(response.data.lot === 0 ? "0" : response.data.lot.toFixed(1));
				toast.success("LOT calculado com sucesso.");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

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
		isLoadingGetLot,
		lot,
	};
}
