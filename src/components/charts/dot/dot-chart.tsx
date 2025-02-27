"use client";
import { useGetdot } from "@/hooks/use-get-dot";
import { Form } from "../../ui/form";
import { DotCombobox } from "./dot-combobox";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { units } from "@/mocks/units";
import { DotDatePicker } from "./dot-date-picker";
import { Button } from "@/components/ui/button";

export function DotChart() {
	const { form, isLoadingGetDot } = useGetdot();
	const { medicines } = usePrescriptions();

	return (
		<div className="w-full space-y-4 rounded-lg border border-muted p-6 bg-white">
			<strong>Dias de terapia (DOT)</strong>

			<div className="flex ml-auto">
				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="w-full space-y-4">
						<DotCombobox
							entity="medicine"
							translatedEntity="Medicamento"
							options={medicines}
							form={form}
						/>

						<DotCombobox
							entity="unit"
							translatedEntity="Unidade"
							options={units}
							form={form}
						/>

						<DotDatePicker form={form} />

						<Button type="submit" className="w-full">
							Calcular DOT
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

							<strong className="text-3xl font-medium">50 DOT</strong>
						</div>

						<span className="block text-sm text-muted-foreground">
							O cálculo acima indica que o antibiótico Amoxicilina foi prescrito
							em 5 dias, durante um intervalo de 10 dias, assim gerando 50 DOT.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
