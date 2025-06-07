"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { unitsTableColumns } from "./units-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateUnitsTableKeys } from "@/utils/translate/translate-units-table-keys";
import { UnitsTable } from "./units-table";
import { TablePagination } from "@/components/table/table-pagination";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { hospitalUnits } from "@/mocks/hospital-units";

export function UnitsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: hospitalUnits,
		columns: unitsTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar unidades..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
				/>

				{table.getColumn("name")?.getIsFiltered() && (
					<Button
						variant="secondary"
						className="font-semibold"
						onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
					>
						<X />
						Limpar Filtros
					</Button>
				)}

				<TableHideColumnsDropDown
					table={table}
					translateFunction={translateUnitsTableKeys}
				/>

				<Button>Adicionar Unidade</Button>
			</div>

			<UnitsTable
				table={table}
				isLoadingGetUnits={false}
				data={hospitalUnits}
			/>

			<TablePagination table={table} />
		</div>
	);
}
