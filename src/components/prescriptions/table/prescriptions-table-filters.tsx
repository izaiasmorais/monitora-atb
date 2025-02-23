import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddPrescriptionForm } from "../add-prescription-form";
import { DateRange } from "react-day-picker";
import { z } from "zod";

const prescriptionsFilterSchema = z.object({
	medicalRecord: z.string().optional(),
	name: z.string().optional(),
	unit: z.string().optional(),
	medicine: z.string().optional(),
	posology: z.string().optional(),
});

export type PrescriptionsFilterSchema = z.infer<
	typeof prescriptionsFilterSchema
>;

export function PrescriptionsTableFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const name = searchParams.get("name");
	const status = searchParams.get("status");
	const medicine = searchParams.get("medicine");
	const posology = searchParams.get("posology");

	const { register, handleSubmit, control, reset } =
		useForm<PrescriptionsFilterSchema>({
			resolver: zodResolver(prescriptionsFilterSchema),
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
	}: PrescriptionsFilterSchema) {
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
		state.delete("page");

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
				className="h-9 w-[300px]"
				placeholder="Prontuário"
				{...register("medicalRecord")}
			/>

			<Input className="h-9 w-[400px]" placeholder="Nome" {...register("name")} />

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

			<AddPrescriptionForm />
		</form>
	);
}
