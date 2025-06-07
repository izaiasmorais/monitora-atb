import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { viasTableColumns } from "./vias-table-columns";
import { ViasTableHeader } from "./vias-table-header";
import { Via } from "@/@types/via";
import { ViasTableSkeleton } from "./vias-table-skeleton";

interface ViasTableProps {
	table: TableType<Via>;
	isLoadingGetVias: boolean;
	data: Via[];
}

export function ViasTable({ table, isLoadingGetVias, data }: ViasTableProps) {
	return (
		<Table>
			<ViasTableHeader table={table} />

			<TableBody>
				{isLoadingGetVias && <ViasTableSkeleton />}

				{!isLoadingGetVias &&
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

				{!isLoadingGetVias &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={viasTableColumns.length}
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
