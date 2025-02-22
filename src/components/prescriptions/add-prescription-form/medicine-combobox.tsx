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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";

export function MedicineCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { medicines } = usePrescriptions();

	return (
		<FormField
			control={form.control}
			name="medicine"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Medicamento</FormLabel>
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
										? medicines.find(
												(medicine) => medicine.value === field.value
										  )?.label
										: "Selecionar Medicamento"}
									<ChevronsUpDown className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="p-0">
							<Command>
								<CommandInput
									placeholder="Pesquisar medicamento..."
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty>Nenhum medicamento encontrado.</CommandEmpty>
									<CommandGroup>
										{medicines.map((medicine) => (
											<CommandItem
												value={medicine.label}
												key={medicine.value}
												onSelect={() => {
													field.onChange(medicine.value);
												}}
											>
												{medicine.label}
												<Check
													className={cn(
														"ml-auto",
														medicine.value === field.value
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
