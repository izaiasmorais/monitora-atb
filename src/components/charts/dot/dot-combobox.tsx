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
import type { GetDotData } from "@/hooks/use-get-dot";
import { useState } from "react";

interface ComboboxProps {
	options: { label: string; value: string }[];
	entity: "medicine" | "unit";
	translatedEntity: string;
	form: UseFormReturn<GetDotData>;
}

export function DotCombobox({
	options,
	entity,
	translatedEntity,
	form,
}: ComboboxProps) {
	const [open, setOpen] = useState(false);

	return (
		<FormField
			control={form.control}
			name={entity}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{translatedEntity}</FormLabel>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									className={cn(
										"justify-between",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value
										? options.find((option) => option.value === field.value)
												?.label
										: "Selecionar " + translatedEntity}
									<ChevronsUpDown className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-[400px] p-0">
							<Command>
								<CommandInput
									placeholder={`Pesquisar ${translatedEntity.toLocaleLowerCase()}...`}
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty>
										{entity === "medicine" && "Nenhum medicamento encontrado."}

										{entity === "unit" && "Nenhuma unidade encontrada."}

										{entity !== "medicine" &&
											entity !== "unit" &&
											`Selecione um medicamento para exibir as ${translatedEntity.toLocaleLowerCase()}s disponiveis.`}
									</CommandEmpty>
									<CommandGroup>
										{options.map((option) => (
											<CommandItem
												value={option.label}
												key={option.value}
												onSelect={() => {
													field.onChange(option.value);
													setOpen(false);
												}}
											>
												{option.label}
												<Check
													className={cn(
														"ml-auto",
														option.value === field.value
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
