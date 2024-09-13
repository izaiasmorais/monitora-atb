"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const medicines = [
	{
		value: "polimixina b",
		label: "Polimixina B",
	},
	{
		value: "gentamicina",
		label: "Gentamicina",
	},
	{
		value: "ciprofloxacino inj",
		label: "Ciprofloxacino Inj",
	},
	{
		value: "metronidazol inj",
		label: "Metronidazol Inj",
	},
	{
		value: "cefepime",
		label: "Cefepime",
	},
	{
		value: "piperacilina",
		label: "Piperacilina",
	},
	{
		value: "vancomicina",
		label: "Vancomicina",
	},
	{
		value: "meropenem",
		label: "Meropenem",
	},
	{
		value: "tigeciclina",
		label: "Tigeciclina",
	},
	{
		value: "fluconazol inj",
		label: "Fluconazol Inj",
	},
	{
		value: "levofloxacino cpd",
		label: "Levofloxacino Cpd",
	},
	{
		value: "claritromicina cpd",
		label: "Claritromicina Cpd",
	},
	{
		value: "cefazolina",
		label: "Cefazolina",
	},
	{
		value: "ceftriaxona",
		label: "Ceftriaxona",
	},
	{
		value: "oxacilina",
		label: "Oxacilina",
	},
	{
		value: "azitromicina inj",
		label: "Azitromicina Inj",
	},
	{
		value: "clindamicina",
		label: "Clindamicina",
	},
	{
		value: "anidulafungina",
		label: "Anidulafungina",
	},
	{
		value: "ivermectina",
		label: "Ivermectina",
	},
	{
		value: "cefoxitina",
		label: "Cefoxitina",
	},
	{
		value: "ampicilina",
		label: "Ampicilina",
	},
];

export function MedicinesCombobox() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					size="sm"
					className="w-full justify-between"
				>
					{value
						? medicines.find((framework) => framework.value === value)?.label
						: "Medicamento"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search medicamento..." />
					<CommandList>
						<CommandEmpty>Nenhum medicamento encontrado.</CommandEmpty>
						<CommandGroup>
							{medicines.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === framework.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{framework.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
