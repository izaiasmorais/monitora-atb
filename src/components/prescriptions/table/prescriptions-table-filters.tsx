import { LoaderCircle, Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddPrescriptionForm } from "../add-prescription-form";
import { z } from "zod";

const prescriptionsFilterSchema = z.object({
	medicalRecord: z.string().optional(),
	patientName: z.string().optional(),
	medicine: z.string().optional(),
});

export type PrescriptionsFilterSchema = z.infer<
	typeof prescriptionsFilterSchema
>;

export function PrescriptionsTableFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const medicalRecord = searchParams.get("medicalRecord");
	const patientName = searchParams.get("patientName");
	const medicine = searchParams.get("medicine");

	const { register, handleSubmit, reset, formState } = useForm<PrescriptionsFilterSchema>({
		resolver: zodResolver(prescriptionsFilterSchema),
		defaultValues: {
			medicalRecord: medicalRecord ?? "",
			patientName: patientName ?? "",
			medicine: medicine ?? "",
		},
	});

	function handleFilter({
		medicalRecord,
		medicine,
		patientName,
	}: PrescriptionsFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (medicalRecord) {
			state.set("medicalRecord", medicalRecord);
		} else {
			state.delete("medicalRecord");
		}

		if (patientName) {
			state.set("patientName", patientName);
		} else {
			state.delete("patientName");
		}

		if (medicine) {
			state.set("medicine", medicine);
		} else {
			state.delete("medicine");
		}

		state.set("page", "1");

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	function handleClearFilters() {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.delete("medicalRecord");
		state.delete("patientName");
		state.delete("medicine");
		state.delete("page");

		reset({
			medicalRecord: "",
			patientName: "",
			medicine: "",
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
				placeholder="Número do Prontuário"
				{...register("medicalRecord")}
			/>

			<Input
				className="h-9 w-[400px]"
				placeholder="Nome do Paciente"
				{...register("patientName")}
			/>

			<Button
				type="submit"
				variant="secondary"
				disabled={formState.isSubmitting}
			>
				{!formState.isSubmitting && <Search className="mr-2 h-4 w-4" />}

				{formState.isSubmitting && <LoaderCircle className="animate-spin" />}

				Filtrar
			</Button>

			<Button
				type="button"
				variant="outline"
				onClick={() => handleClearFilters()}
			>
				<X className="mr-2 h-4 w-4" />
				Limpar
			</Button>

			<AddPrescriptionForm />
		</form>
	);
}
