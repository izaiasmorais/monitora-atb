"use client";
import { hospitalUnits } from "@/mocks/hospital-units";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picket";
import { Combobox } from "@/components/ui/combobox";
import { Form } from "../ui/form";
import { useGetDdd } from "@/hooks/use-get-ddd";

export function DddChart() {
	const { form, isLoadingGetDdd } = useGetDdd();

	return (
		<div className="w-full space-y-4 rounded-lg border border-muted p-6 ">
			<strong>Dose Diária Definida (DDD) por 100 pacientes</strong>

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

						<Button variant="secondary" type="submit" className="w-full">
							{isLoadingGetDdd && <LoaderCircle className="animate-spin" />}{" "}
							Calcular DDD
						</Button>

						<div className="text-center items-center flex justify-center gap-4 border rounded-lg p-4 h-[80px]">
							<span className="text-xs">
								Preencha os campos acima para calcular um determinado DDD
							</span>
						</div>

						<span className="block text-xs text-muted-foreground">
							O cálculo acima indica que o uso do antimicrobiano prescrito
							durante o período resultou em x DDD por 100 pacientes.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
