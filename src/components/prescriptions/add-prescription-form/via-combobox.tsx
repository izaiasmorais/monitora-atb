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

export function ViaCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { getVias } = usePrescriptions();
	const vias = getVias(form.watch("medicine"));

	return (
		<FormField
			control={form.control}
			name="via"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Via</FormLabel>
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
										? vias.find((via) => via.value === field.value)?.label
										: "Selecionar Via"}
									<ChevronsUpDown className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="p-0">
							<Command>
								<CommandInput placeholder="Pesquisar via..." className="h-9" />
								<CommandList>
									<CommandEmpty className="p-4 text-center text-sm">
										Selecione um medicamento para exibir as vias disponíveis.
									</CommandEmpty>
									<CommandGroup>
										{vias.map((via) => (
											<CommandItem
												value={via.label}
												key={via.value}
												onSelect={() => {
													field.onChange(via.value);
												}}
											>
												{via.label}
												<Check
													className={cn(
														"ml-auto",
														via.value === field.value
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
