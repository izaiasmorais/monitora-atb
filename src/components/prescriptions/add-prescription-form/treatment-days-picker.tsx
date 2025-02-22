"use client";
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
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { UseFormReturn } from "react-hook-form";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { useState } from "react";
import { ptBR } from "date-fns/locale";

export function TreatmentDaysPciker({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const [selectedDates, setSelectedDates] = useState<Date[]>([]);

	const handleSelect = (dates: Date[] | undefined) => {
		setSelectedDates(dates || []);
		const formattedDates = dates?.map((date) => date.toISOString());
		if (formattedDates) form.setValue("treatmentDays", formattedDates);
	};

	const treatmentDays = selectedDates.map((date) => date.toISOString());

	return (
		<FormField
			control={form.control}
			name="treatmentDays"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Dias de Tratamento</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
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
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="multiple"
								selected={selectedDates}
								onSelect={(e) => [
									handleSelect(e),
									field.onChange(treatmentDays),
								]}
								locale={ptBR}
								disabled={(date) =>
									date < new Date(new Date().setHours(0, 0, 0, 0))
								}
								initialFocus
							/>
						</PopoverContent>
					</Popover>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
