"use client";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { GetDotData } from "@/hooks/use-get-dot";
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
import React from "react";
import type { DateRange } from "react-day-picker";

interface DotDatePickerProps {
	form: UseFormReturn<GetDotData>;
}

export function DotDatePicker({ form }: DotDatePickerProps) {
	return (
		<FormField
			control={form.control}
			name="timeInterval"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Intervalo de Tempo</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant={"outline"}
									className={cn(
										"pl-3 text-left font-normal",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value?.from ? (
										field.value.to ? (
											<>
												{format(field.value.from, "dd/MM/yyyy")} -{" "}
												{format(field.value.to, "dd/MM/yyyy")}
											</>
										) : (
											format(field.value.from, "dd/MM/yyyy")
										)
									) : (
										<span>Seleciona um intervalo</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="range"
								selected={field.value}
								onSelect={field.onChange}
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
