"use client";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { Input } from "@/components/ui/input";

const hospitalUnits = [
	{ label: "Unidade de Urgência e Emergência", value: "urgencia-emergencia" },
	{ label: "Unidade de Terapia Intensiva (UTI) Adulto", value: "uti-adulto" },
	{
		label: "Unidade de Terapia Intensiva (UTI) Pediátrica",
		value: "uti-pediatrica",
	},
	{
		label: "Unidade de Terapia Intensiva (UTI) Neonatal",
		value: "uti-neonatal",
	},
	{ label: "Centro Cirúrgico", value: "centro-cirurgico" },
	{
		label: "Unidade de Internação Clínica Médica",
		value: "internacao-clinica-medica",
	},
	{ label: "Unidade de Internação Cirúrgica", value: "internacao-cirurgica" },
	{ label: "Maternidade", value: "maternidade" },
	{
		label: "Unidade de Diagnóstico - Laboratório",
		value: "diagnostico-laboratorio",
	},
	{ label: "Unidade de Diagnóstico - Imagem", value: "diagnostico-imagem" },
	{
		label: "Ambulatório de Especialidades",
		value: "ambulatorio-especialidades",
	},
	{ label: "Unidade de Oncologia (Instituto do Amor)", value: "oncologia" },
	{ label: "Farmácia Hospitalar", value: "farmacia-hospitalar" },
	{ label: "Unidade de Reabilitação", value: "reabilitacao" },
] as const;

export function UnitSelect({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	return (
		<FormField
			control={form.control}
			name="unit"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Unidade</FormLabel>

					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									{...field}
									variant="outline"
									role="combobox"
									className={cn(
										"justify-between",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value
										? hospitalUnits.find((unit) => unit.value === field.value)
												?.label
										: "Selecionar Unidade"}

									<ChevronsUpDown className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-[400px] p-0">
							<Command>
								<CommandInput
									placeholder="Pesquisar Unidade..."
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty>Nenhuma Unidade Encontrada.</CommandEmpty>

									<CommandGroup>
										{hospitalUnits.map((unit) => (
											<CommandItem
												value={unit.label}
												key={unit.value}
												onSelect={() => {
													field.onChange(unit.value);
												}}
											>
												{unit.label}
												<Check
													className={cn(
														"ml-auto",
														unit.value === field.value
															? "opacity-100"
															: "opacity-0"
													)}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
