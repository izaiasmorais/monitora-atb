"use client";
import { useGetLot } from "@/hooks/use-get-lot";
import { units } from "@/mocks/units";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picket";
import { Combobox } from "@/components/ui/combobox";
import { Form } from "../ui/form";

export function LotChart() {
	const { form, isLoadingGetLot } = useGetLot();

	return (
		<div className="w-full space-y-4 rounded-lg border border-muted p-6 ">
			<strong>Duração da terapia (LOT)</strong>

			<div className="flex ml-auto">
				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="w-full space-y-4">
						<Combobox
							form={form}
							options={units}
							entity="unit"
							emptyMessage="Nenhuma unidade encontrada."
							translatedEntity="Unidade"
							placeholder="Selecione uma unidade"
						/>

						<DatePicker
							form={form}
							label="Intervalo de Tempo"
							placeholder="Selecione um intervalo"
							entity="timeInterval"
						/>

						<Button
							variant="secondary"
							type="submit"
							className="w-full"
							disabled={isLoadingGetLot}
						>
							{isLoadingGetLot && <LoaderCircle className="animate-spin" />}
							Calcular LOT
						</Button>

						<div className="text-center items-center flex justify-center gap-4 border rounded-lg p-4">
							<div className="flex items-center gap-4">
								<div className="flex flex-col">
									<span>5 dias</span>
									<hr />
									<span>10 dias</span>
								</div>

								<span>x 100 =</span>
							</div>

							<strong className="text-3xl font-medium">50 LOT</strong>
						</div>

						<span className="block text-xs text-muted-foreground">
							O cálculo acima indica que a duração da terapia foi de 50 dias.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
