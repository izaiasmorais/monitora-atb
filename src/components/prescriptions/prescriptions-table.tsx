"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { PrescriptionsTableItems } from "./prescriptions-table-items";
import { Pagination } from "../global/pagination";
import { useQuery } from "@tanstack/react-query";
import { getPrescriptions } from "@/api/prescriptions/get-prescriptions";
import { PrescriptionsTableFilters } from "@/components/prescriptions/prescriptions-table-filters";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";
import { z } from "zod";
import { PaginationSkeleton } from "../global/pagination-skeleton";

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

	const { data: result, isLoading: isLoadingPrescriptions } = useQuery({
		queryKey: ["patients", pageIndex, id, name, status],
		queryFn: () =>
			getPrescriptions({
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
						<TableRow className="bg-muted/50">
							<TableHead className="w-[200px]">Prontuário</TableHead>
							<TableHead className="min-w-[300px]">Nome</TableHead>
							<TableHead className="w-[150px]">Unidade</TableHead>
							<TableHead className="min-w-[150px]">Medicamento</TableHead>
							<TableHead className="w-[150px]">Via</TableHead>
							<TableHead className="w-[150px]">Dose</TableHead>
							<TableHead className="w-[150px]">Posologia</TableHead>
							<TableHead className="w-[100px]"></TableHead>
							<TableHead className="w-[100px]"></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoadingPrescriptions &&
							result &&
							result.prescriptions.map((prescription) => {
								return (
									<PrescriptionsTableItems
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

			{result && !isLoadingPrescriptions && (
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
