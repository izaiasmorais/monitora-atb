"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { PrescriptionsTableRow } from "./prescriptions-table-row";
import { Pagination } from "../global/pagination";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "@/api/get-prescriptions";
import { PrescriptionsTableFilters } from "@/components/prescriptions/prescriptions-table-filters";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";
import { prescriptions } from "../../mocks/prescriptions";
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
				<PrescriptionsTableFilters
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[200px]">Prontuário</TableHead>
							<TableHead className="min-w-[350px]">Nome</TableHead>
							<TableHead className="w-[150px]">Unidade</TableHead>
							<TableHead className="w-[150px]">Medicamento</TableHead>
							<TableHead className="w-[150px]">Via</TableHead>
							<TableHead className="w-[150px]">Dose</TableHead>
							<TableHead className="w-[150px]">Posologia</TableHead>
							<TableHead className="w-[50px]"></TableHead>
							<TableHead className="w-[50px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoadingPatients &&
							prescriptions.map((prescription) => {
								return (
									<PrescriptionsTableRow
										key={prescription.id}
										prescription={prescription}
									/>
								);
							})}

						{isLoadingPatients && <PrescriptionsTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{result && (
				<Pagination
					pageIndex={result.meta.pageIndex - 1}
					perPage={result.meta.perPage}
					totalCount={8}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	);
}
