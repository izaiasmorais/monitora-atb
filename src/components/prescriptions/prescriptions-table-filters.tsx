import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { DateRange } from "react-day-picker";
import { z } from "zod";
import { AddPrescriptionSheet } from "./add-prescription-sheet";
import { MedicinesCombobox } from "./medicines-combobox";

const patientFilterSchema = z.object({
	medicalRecord: z.string().optional(),
	name: z.string().optional(),
	unit: z.string().optional(),
	medicine: z.string().optional(),
	posology: z.string().optional(),
});

type PatientFilterSchema = z.infer<typeof patientFilterSchema>;

interface PrescriptionsTableFiltersProps {
	dateRange: DateRange | undefined;
	setDateRange: Dispatch<SetStateAction<DateRange | undefined>>;
}

export function PrescriptionsTableFilters({
	dateRange,
	setDateRange,
}: PrescriptionsTableFiltersProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const name = searchParams.get("name");
	const status = searchParams.get("status");
	const medicine = searchParams.get("medicine");
	const posology = searchParams.get("posology");

	const { register, handleSubmit, control, reset } =
		useForm<PatientFilterSchema>({
			resolver: zodResolver(patientFilterSchema),
			defaultValues: {
				medicalRecord: id ?? "",
				name: name ?? "",
				unit: status ?? "",
				medicine: medicine ?? "",
				posology: posology ?? "",
			},
		});

	function handleFilter({
		medicalRecord,
		medicine,
		name,
		posology,
		unit,
	}: PatientFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (medicalRecord) {
			state.set("medicalRecord", medicalRecord);
		} else {
			state.delete("medicalRecord");
		}

		if (name) {
			state.set("name", name);
		} else {
			state.delete("name");
		}

		if (medicine) {
			state.set("medicine", medicine);
		} else {
			state.delete("medicine");
		}

		if (posology) {
			state.set("posology", posology);
		} else {
			state.delete("posology");
		}

		if (unit) {
			state.set("unit", unit);
		} else {
			state.delete("unit");
		}

		state.set("page", "1");
		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	function handleClearFilters() {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.delete("medicalRecord");
		state.delete("name");
		state.delete("unit");
		state.delete("medicine");
		state.delete("posology");
		state.set("page", "1");

		reset({
			medicalRecord: "",
			name: "",
			unit: "",
			medicine: "",
			posology: "",
		});

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	return (
		<form
			className="flex flex-wrap lg:flex-nowrap items-center gap-2 w-full"
			onSubmit={handleSubmit(handleFilter)}
		>
			<span className="text-sm font-semibold hidden lg:block">Filtros: </span>

			<Input
				className="h-9"
				placeholder="Prontuário"
				{...register("medicalRecord")}
			/>

			<Input className="h-9" placeholder="Nome" {...register("name")} />

			<Controller
				control={control}
				name="unit"
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							onValueChange={onChange}
							name={name}
							value={value ? value : undefined}
							disabled={disabled}
						>
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Unidade" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todas</SelectItem>
								<SelectItem value="1">Posto 1</SelectItem>
								<SelectItem value="2">Posto 2</SelectItem>
								<SelectItem value="3">Posto 3</SelectItem>
								<SelectItem value="uti">UTI</SelectItem>
								<SelectItem value="unacon">UNACON</SelectItem>
							</SelectContent>
						</Select>
					);
				}}
			/>

			<MedicinesCombobox />

			<Controller
				control={control}
				name="posology"
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							onValueChange={onChange}
							name={name}
							value={value ? value : undefined}
							disabled={disabled}
						>
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Posologia" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todos</SelectItem>
								<SelectItem value="1">6/6h</SelectItem>
								<SelectItem value="2">8/8h</SelectItem>
								<SelectItem value="3">12/12h</SelectItem>
								<SelectItem value="uti">24/24h</SelectItem>
							</SelectContent>
						</Select>
					);
				}}
			/>

			<Button type="submit" variant="secondary" size="sm">
				<Search className="mr-2 h-4 w-4" />
				Filtrar
			</Button>

			<Button
				type="button"
				variant="outline"
				size="sm"
				onClick={() => handleClearFilters()}
			>
				<X className="mr-2 h-4 w-4" />
				Limpar
			</Button>

			<AddPrescriptionSheet />
		</form>
	);
}
