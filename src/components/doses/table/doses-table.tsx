import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { dosesTableColumns } from "./doses-table-columns";
import { DosesTableHeader } from "./doses-table-header";
import { Dose } from "@/@types/dose";
import { DosesTableSkeleton } from "./doses-table-skeleton";

interface DosesTableProps {
	table: TableType<Dose>;
	isLoadingGetDoses: boolean;
	data: Dose[];
}

export function DosesTable({
	table,
	isLoadingGetDoses,
	data,
}: DosesTableProps) {
	return (
		<Table>
			<DosesTableHeader table={table} />

			<TableBody>
				{isLoadingGetDoses && <DosesTableSkeleton />}

				{!isLoadingGetDoses &&
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

				{!isLoadingGetDoses &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={dosesTableColumns.length}
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
