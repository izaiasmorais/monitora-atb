"use client";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
} from "@/components/ui/table";
import { useGetPrescriptions } from "@/hooks/use-get-prescriptions";
import { Pagination } from "@/components/global/pagination";
import { PaginationSkeleton } from "@/components/global/pagination-skeleton";
import { PrescriptionsTableEmptyState } from "./prescriptions-table-empty-state";
import { PrescriptionsTableFilters } from "./prescriptions-table-filters";
import { PrescriptionsTableItem } from "./prescriptions-table-item";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";

export function PrescriptionsTable() {
	const { data, handlePaginate, isLoadingPrescriptions } =
		useGetPrescriptions();

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2">
				<PrescriptionsTableFilters />
			</div>

			<div className="rounded-md border overflow-hidden">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead className="w-[100px]">Prontuário</TableHead>
							<TableHead className="min-w-[300px] xl:w-[300px]">Nome</TableHead>
							<TableHead className="min-w-[300px] xl:w-[300px]">
								Unidade
							</TableHead>
							<TableHead className="min-w-[300px] xl:w-[300px]">
								Medicamento
							</TableHead>
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

			{!isLoadingPrescriptions &&
				(!data || (data && data.prescriptions.length === 0)) && (
					<PrescriptionsTableEmptyState />
				)}

			{isLoadingPrescriptions && <PaginationSkeleton />}

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
