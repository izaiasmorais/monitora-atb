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
						<TableRow className="bg-muted/50 hover:bg-muted/50">
							<TableHead>Prontuário</TableHead>
							<TableHead>Nome</TableHead>
							<TableHead>Unidade</TableHead>
							<TableHead>Medicamento</TableHead>
							<TableHead>Via</TableHead>
							<TableHead>Dose</TableHead>
							<TableHead>Posologia</TableHead>
							<TableHead></TableHead>
							<TableHead></TableHead>
							<TableHead></TableHead>
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
					page={data.meta.page}
					totalItems={data.meta.totalItems}
					totalPages={data.meta.totalPages}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	);
}
