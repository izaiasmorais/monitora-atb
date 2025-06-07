import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { posologiesTableColumns } from "./posologies-table-columns";
import { PosologiesTableHeader } from "./posologies-table-header";
import { Posology } from "@/@types/posology";
import { PosologiesTableSkeleton } from "./posologies-table-skeleton";

interface PosologiesTableProps {
	table: TableType<Posology>;
	isLoadingGetPosologies: boolean;
	data: Posology[];
}

export function PosologiesTable({
	table,
	isLoadingGetPosologies,
	data,
}: PosologiesTableProps) {
	return (
		<Table>
			<PosologiesTableHeader table={table} />

			<TableBody>
				{isLoadingGetPosologies && <PosologiesTableSkeleton />}

				{!isLoadingGetPosologies &&
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

				{!isLoadingGetPosologies &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={posologiesTableColumns.length}
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
