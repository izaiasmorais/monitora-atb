"use client";
import { useGetDot } from "@/hooks/use-get-dot";
import { hospitalUnits } from "@/mocks/hospital-units";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picket";
import { Combobox } from "@/components/ui/combobox";
import { Form } from "../ui/form";
import { Skeleton } from "../ui/skeleton";

export function DotChart() {
	const { dot, form, isLoadingGetDot } = useGetDot();

	return (
		<div className="w-full space-y-4 rounded-lg border border-muted p-6 ">
			<strong>Dias de terapia (DOT)</strong>

			<div className="flex ml-auto">
				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="w-full space-y-4">
						<Combobox
							form={form}
							options={hospitalUnits.map((unit) => ({
								label: unit.name,
								value: unit.id,
							}))}
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
							disabled={isLoadingGetDot}
						>
							{isLoadingGetDot && (
								<LoaderCircle className="animate-spin" size={18} />
							)}
							Calcular DOT
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
							{isLoadingGetDot && <Skeleton className="w-full h-full" />}

							{!isLoadingGetDot && dot === null && (
								<span className="text-xs">
									Preencha os campos acima para calcular um determinado DOT
								</span>
							)}

							{!isLoadingGetDot && dot !== null && (
								<strong className="text-3xl font-medium">{dot} DOT</strong>
							)}
						</div>

						<span className="block text-xs text-muted-foreground">
							O cálculo acima indica que todos os antibióticos prescritos
							durante o período somaram x dias de terapia.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
