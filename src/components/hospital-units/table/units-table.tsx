import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { unitsTableColumns } from "./units-table-columns";
import { UnitsTableHeader } from "./units-table-header";
import { Unit } from "@/@types/unit";
import { UnitsTableSkeleton } from "./units-table-skeleton";

interface UnitsTableProps {
	table: TableType<Unit>;
	isLoadingGetUnits: boolean;
	data: Unit[];
}

export function UnitsTable({
	table,
	isLoadingGetUnits,
	data,
}: UnitsTableProps) {
	return (
		<Table>
			<UnitsTableHeader table={table} />

			<TableBody>
				{isLoadingGetUnits && <UnitsTableSkeleton />}

				{!isLoadingGetUnits &&
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

				{!isLoadingGetUnits &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={unitsTableColumns.length}
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
