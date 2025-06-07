import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { prescriptionsTableColumns } from "./prescriptions-table-columns";
import { PrescriptionsTableHeader } from "./prescriptions-table-header";
import { PrescriptionsTableSkeleton } from "./prescriptions-table-skeleton";
import { Prescription } from "@/@types/new-prescription";

interface PrescriptionsTableProps {
	table: TableType<Prescription>;
	isLoadingGetPrescriptions: boolean;
	data: Prescription[];
}

export function PrescriptionsTable({
	table,
	isLoadingGetPrescriptions,
	data,
}: PrescriptionsTableProps) {
	return (
		<Table>
			<PrescriptionsTableHeader table={table} />

			<TableBody>
				{isLoadingGetPrescriptions && <PrescriptionsTableSkeleton />}

				{!isLoadingGetPrescriptions &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoadingGetPrescriptions &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={prescriptionsTableColumns.length}
								className="h-24 text-center"
							>
								Sem resultados
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}
