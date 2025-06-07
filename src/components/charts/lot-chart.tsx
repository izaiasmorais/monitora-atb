"use client";
import { useGetLot } from "@/hooks/use-get-lot";
import { units } from "@/mocks/hospital-units";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picket";
import { Combobox } from "@/components/ui/combobox";
import { Form } from "../ui/form";
import { Skeleton } from "../ui/skeleton";

export function LotChart() {
	const { lot, form, isLoadingGetLot } = useGetLot();

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
							{isLoadingGetLot && (
								<LoaderCircle className="animate-spin" size={18} />
							)}
							Calcular LOT
						</Button>

						<div className="text-center items-center flex justify-center gap-4 border rounded-lg p-4 h-[80px]">
							{/* <div className="flex items-center gap-4">
								<div className="flex flex-col">
									<span>5 dias</span>
									<hr />
									<span>10 dias</span>
								</div>

								<span>x 100 =</span>
							</div> */}
							{isLoadingGetLot && <Skeleton className="w-full h-full" />}

							{!isLoadingGetLot && lot === null && (
								<span className="text-xs">
									Preencha os campos acima para calcular um determinado LOT
								</span>
							)}

							{!isLoadingGetLot && lot !== null && (
								<strong className="text-3xl font-medium">{lot} LOT</strong>
							)}
						</div>

						<span className="block text-xs text-muted-foreground">
							O cálculo acima indica que a duração da terapia foi de x dias.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
