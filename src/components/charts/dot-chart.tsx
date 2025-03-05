"use client";
import { useGetdot } from "@/hooks/use-get-dot";
import { units } from "@/mocks/units";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picket";
import { Combobox } from "@/components/ui/combobox";
import { Form } from "../ui/form";

export function DotChart() {
	const { form, isLoadingGetDot } = useGetdot();

	return (
		<div className="w-full space-y-4 rounded-lg border border-muted p-6 ">
			<strong>Dias de terapia (DOT)</strong>

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
							disabled={isLoadingGetDot}
						>
							{isLoadingGetDot && <LoaderCircle className="animate-spin" />}
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

						<span className="block text-xs text-muted-foreground">
							O cálculo acima indica que todos os antibióticos prescritos
							durante o período somaram 50 dias de terapia.
						</span>
					</form>
				</Form>
			</div>
		</div>
	);
}
