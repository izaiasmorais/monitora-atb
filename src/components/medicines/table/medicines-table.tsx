import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { medicinesTableColumns } from "./medicines-table-columns";
import { MedicinesTableHeader } from "./medicines-table-header";
import { Medicine } from "@/@types/medicine";
import { MedicinesTableSkeleton } from "./medicines-table-skeleton";

interface MedicinesTableProps {
	table: TableType<Medicine>;
	isLoadingGetMedicines: boolean;
	data: Medicine[];
}

export function MedicinesTable({
	table,
	isLoadingGetMedicines,
	data,
}: MedicinesTableProps) {
	return (
		<Table>
			<MedicinesTableHeader table={table} />

			<TableBody>
				{isLoadingGetMedicines && <MedicinesTableSkeleton />}

				{!isLoadingGetMedicines &&
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

				{!isLoadingGetMedicines &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={medicinesTableColumns.length}
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
