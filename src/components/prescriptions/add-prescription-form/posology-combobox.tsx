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
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { Check, ChevronsUpDown } from "lucide-react";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PosologyCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { getPosologies } = usePrescriptions();
	const posologies = getPosologies(form.watch("medicine"));

	return (
		<FormField
			control={form.control}
			name="posology"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Posologia</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									role="combobox"
									className={cn(
										"justify-between",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value
										? posologies.find(
												(posology) => posology.value === field.value
										  )?.label
										: "Selecionar Posologia"}
									<ChevronsUpDown className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="p-0">
							<Command>
								<CommandInput
									placeholder="Pesquisar posologia..."
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty className="p-4 text-center text-sm">
										Selecione um medicamento para exibir as posologias
										disponíveis.
									</CommandEmpty>

									<CommandGroup>
										{posologies.map((posology) => (
											<CommandItem
												value={posology.label}
												key={posology.value}
												onSelect={() => {
													field.onChange(posology.value);
												}}
											>
												{posology.label}
												<Check
													className={cn(
														"ml-auto",
														posology.value === field.value
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
