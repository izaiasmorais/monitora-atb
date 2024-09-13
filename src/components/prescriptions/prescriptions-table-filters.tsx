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

const patientFilterSchema = z.object({
	id: z.string().optional(),
	name: z.string().optional(),
	status: z.string().optional(),
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

	const { register, handleSubmit, control, reset } =
		useForm<PatientFilterSchema>({
			// @ts-ignore
			resolver: zodResolver(patientFilterSchema),
			defaultValues: {
				id: id ?? "",
				name: name ?? "",
				status: status ?? "all",
			},
		});

	function handleFilter({ id, name, status }: PatientFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (id) {
			state.set("id", id);
		} else {
			state.delete("id");
		}

		if (name) {
			state.set("name", name);
		} else {
			state.delete("name");
		}

		if (status) {
			state.set("status", status);
		} else {
			state.delete("status");
		}

		state.set("page", "1");
		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	function handleClearFilters() {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.delete("id");
		state.delete("name");
		state.delete("status");
		state.set("page", "1");

		reset({
			id: "",
			name: "",
			status: "all",
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
				className="h-8"
				placeholder="Número do Protuário"
				{...register("id")}
			/>

			<Input
				className="h-8"
				placeholder="Nome da paciente"
				{...register("name")}
			/>

			<Controller
				control={control}
				name="status"
				defaultValue="Status"
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							defaultValue="all"
							name={name}
							onValueChange={onChange}
							value={value}
							disabled={disabled}
						>
							<SelectTrigger className="h-8">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Status</SelectItem>
								<SelectItem value="deposit">Pendente</SelectItem>
								<SelectItem value="patient">Pago</SelectItem>
								<SelectItem value="withdrawal">Atrasado</SelectItem>
								<SelectItem value="payment">Adiada</SelectItem>
							</SelectContent>
						</Select>
					);
				}}
			/>

			<Button type="submit" variant="secondary" size="sm">
				<Search className="mr-2 h-4 w-4" />
				Filtrar resultados
			</Button>

			<Button
				type="button"
				variant="outline"
				size="sm"
				onClick={() => handleClearFilters()}
			>
				<X className="mr-2 h-4 w-4" />
				Limpar resultados
			</Button>
		</form>
	);
}
