"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { PrescriptionsTableEmptyState } from "./prescriptions-table-empty-state";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";
import { PrescriptionsTableFilters } from "@/components/prescriptions/prescriptions-table-filters";
import { PrescriptionsTableItem } from "./prescriptions-table-item";
import { PaginationSkeleton } from "../global/pagination-skeleton";
import { Pagination } from "../global/pagination";
import { DateRange } from "react-day-picker";
import { useState } from "react";
import { subDays } from "date-fns";
import { useGetPrescriptions } from "@/hooks/use-get-prescriptions";

export function PrescriptionsTable() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	const { data, handlePaginate, isLoadingPrescriptions } =
		useGetPrescriptions();

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
							data &&
							data.prescriptions.map((prescription) => {
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

			{((data && data.prescriptions.length === 0 && !isLoadingPrescriptions) ||
				(!data && !isLoadingPrescriptions)) && <PrescriptionsTableEmptyState />}

			{data && !isLoadingPrescriptions && (
				<Pagination
					pageIndex={data.meta.pageIndex}
					perPage={data.meta.perPage}
					totalCount={data.meta.totalCount}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	);
}
