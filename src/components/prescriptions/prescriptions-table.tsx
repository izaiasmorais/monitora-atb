"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PrescriptionsTableEmptyState } from "./prescriptions-table-empty-state";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";
import { PrescriptionsTableFilters } from "@/components/prescriptions/prescriptions-table-filters";
import { PrescriptionsTableItem } from "./prescriptions-table-item";
import { PaginationSkeleton } from "../global/pagination-skeleton";
import { getPrescriptions } from "@/api/prescriptions/get-prescriptions";
import { Pagination } from "../global/pagination";
import { DateRange } from "react-day-picker";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { subDays } from "date-fns";
import { z } from "zod";

export function PrescriptionsTable() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const medicalRecord = searchParams.get("medicalRecord");
	const name = searchParams.get("name");
	const unit = searchParams.get("unit");
	const medicine = searchParams.get("medicine");
	const posology = searchParams.get("posology");

	const pageIndex = z.coerce
		.number()
		.transform((page) => page)
		.parse(searchParams.get("page") ?? 0);

	const perPage = z.coerce
		.number()
		.transform((perPage) => perPage)
		.parse(searchParams.get("perPage") ?? 5);

	const { data: result, isLoading: isLoadingPrescriptions } = useQuery({
		queryKey: [
			"prescriptions",
			pageIndex,
			id,
			name,
			unit,
			medicalRecord,
			medicine,
			posology,
		],
		queryFn: () =>
			getPrescriptions({
				pageIndex: pageIndex != 0 ? pageIndex - 1 : 0,
				perPage,
				id,
				name,
				unit,
				medicalRecord,
				medicine,
				posology,
			}),
		staleTime: 1000 * 60 * 5,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
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
				<PrescriptionsTableFilters
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead className="w-[200px]">Prontuário</TableHead>
							<TableHead className="min-w-[300px] xl:w-[300px]">Nome</TableHead>
							<TableHead className="w-[150px]">Unidade</TableHead>
							<TableHead className="min-w-[150px]">Medicamento</TableHead>
							<TableHead className="w-[150px]">Via</TableHead>
							<TableHead className="w-[150px]">Dose</TableHead>
							<TableHead className="w-[150px]">Posologia</TableHead>
							<TableHead className="w-[50px]"></TableHead>
							<TableHead className="w-[50px]"></TableHead>
							<TableHead className="w-[50px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoadingPrescriptions &&
							result &&
							result.prescriptions.map((prescription) => {
								return (
									<PrescriptionsTableItem
										key={prescription.id}
										prescription={prescription}
									/>
								);
							})}

						{isLoadingPrescriptions && <PrescriptionsTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{isLoadingPrescriptions && <PaginationSkeleton />}

			{((result &&
				result.prescriptions.length === 0 &&
				!isLoadingPrescriptions) ||
				(!result && !isLoadingPrescriptions)) && (
				<PrescriptionsTableEmptyState />
			)}

			{result && !isLoadingPrescriptions && (
				<Pagination
					pageIndex={result.meta.pageIndex}
					perPage={result.meta.perPage}
					totalCount={result.meta.totalCount}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	);
}
