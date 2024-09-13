"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { PatientTableRow } from "./patient-table-row";
import { Pagination } from "../global/pagination";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "@/api/get-patients";
import { PatientTableFilters } from "@/components/patients/patient-table-filters";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { PatientTableSkeleton } from "./patient-table-skeleton";
import { AddPatientModal } from "./add-patient-modal";

export function PatientTable() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const name = searchParams.get("name");
	const status = searchParams.get("status");

	const pageIndex = z.coerce
		.number()
		.transform((page) => page)
		.parse(searchParams.get("page") ?? 1);

	const { data: result, isLoading: isLoadingPatients } = useQuery({
		queryKey: ["patients", pageIndex, id, name, status],
		queryFn: () =>
			getPatients({
				pageIndex,
				id,
				name,
			}),
	});

	function handlePaginate(pageIndex: number) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.set("page", (pageIndex + 1).toString());

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2">
				<PatientTableFilters
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>

				<AddPatientModal />
			</div>

			{/* <div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[64px]"></TableHead>
							<TableHead className="w-[200px]">Identificador</TableHead>
							<TableHead className="min-w-[200px]">Nome</TableHead>
							<TableHead className="min-w-[200px]">Email</TableHead>
							<TableHead className="w-[180px]">Criação</TableHead>
							<TableHead className="w-[164px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{result &&
							result.patients.map((patient) => {
								return <PatientTableRow key={patient.id} patient={patient} />;
							})}

						{isLoadingPatients && <PatientTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{result && (
				<Pagination
					pageIndex={result.meta.pageIndex - 1}
					perPage={result.meta.perPage}
					totalCount={result.meta.totalCount}
					onPageChange={handlePaginate}
				/>
			)} */}
		</div>
	);
}
