"use client";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import type { CreatePrescriptionFormData } from "./add-prescription-sheet";
import type { UseFormSetValue } from "react-hook-form";
import { ptBR } from "date-fns/locale";

interface PosologyDaysPickerProps {
	posologyDays: (string | undefined)[] | undefined;
	setValue: UseFormSetValue<CreatePrescriptionFormData>;
}

export function PosologyDaysPicker({
	setValue,
	posologyDays,
}: PosologyDaysPickerProps) {
	const [selectedDates, setSelectedDates] = React.useState<Date[]>(() => {
		const formattedDates = defaultFormattedDates();
		return formattedDates ? formattedDates : [];
	});

	const handleSelect = (dates: Date[] | undefined) => {
		setSelectedDates(dates || []);
		const formattedDates = dates?.map((date) => date.toISOString());
		if (formattedDates) setValue("posologyDays", formattedDates);
	};

	function defaultFormattedDates() {
		if (posologyDays) {
			const formattedDates = posologyDays
				.map((date) => {
					if (date !== undefined) {
						return new Date(date);
					}
				})
				.filter(Boolean) as Date[];
			return formattedDates;
		}
		return [];
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"justify-start text-left font-normal",
						selectedDates.length === 0 && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{selectedDates.length === 1 ? (
						format(selectedDates[0], "PPP", { locale: ptBR })
					) : selectedDates.length > 1 ? (
						`${selectedDates.length} datas selecionadas`
					) : (
						<span>Escolher dias</span>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="multiple"
					initialFocus
					selected={selectedDates}
					onSelect={handleSelect}
					locale={ptBR}
				/>
			</PopoverContent>
		</Popover>
	);
}
